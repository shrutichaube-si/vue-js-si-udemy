<template>
  <div class="container py-3">
    <ActionBar
      :selected-count="selectedItems.length"
      @remove="handleRemove"
      @rename="modal.rename = true"
      @files-choosen="choosenFiles = $event"
      @create-folder="modal.newFolder=true"
    />

    <teleport to="#search-form">
      <SearchForm v-model="q" />
    </teleport>
    <DropZone
      @files-dropped="choosenFiles = $event"
      :show-message="!files.length && !folders.length"
    >

    <SectionHeader 
    title="Folders" 
    @sort-change="handleSortChange" 
    v-if="folders.length"
    sortToggler="true"
    />
      <FoldersList
        :folders="folders"
        @double-click="handleDoubleClickFolder"
        @select-change="handleSelectChange($event)"
        :selected="selectedItems"
      />
      <SectionHeader title="Files" @sort-change="handleSortChange" v-if="files.length" :sortToggler="!folders.length"/>
      <FilesList
        :files="files"
        @select-change="handleSelectChange($event)"
        :selected="selectedItems"
      />
      {{ console.log(files) }}

    </DropZone>
    <app-toast
      :show="toast.show"
      :message="toast.message"
      type="success"
      position="bottom-left"
      @hide="toast.show = false"
    />
    <app-modal
      :title="modal.rename ? 'Rename': 'New Folder' "
      :show="(modal.rename && selectedItems.length === 1) || modal.newFolder"
      @hide="modal.rename = false , modal.newFolder=false"
    >
    <FolderNewForm v-if="modal.newFolder" @folder-created="handleFolderCreated" @close="modal.newFolder = false" :folder-id="folderId"></FolderNewForm>
      <RenameForm
        :data="selectedItems[0]"
        @close="modal.rename = false"
        @updated="handleFileUpdated"
        :submit="renameFile"
        v-else-if="modal.rename && isFile"
        ></RenameForm>

        <RenameForm
        :data="selectedItems[0]"
        @close="modal.rename = false"
        @updated="handleFolderUpdated"
        :submit="renameFolder"
        v-else
        ></RenameForm>
    </app-modal>

    <UploaderPopup
      :files="choosenFiles"
      @upload-complete="handleUploadComplete"
    />
  </div>
</template>

<script>
import filesApi from "../api/files";
import foldersApi from "../api/folders";
import ActionBar from "../components/ActionBar.vue";
import SearchForm from "../components/SearchForm.vue";
import SectionHeader from "../components/files/SectionHeader.vue";
import FilesList from "../components/files/FilesList.vue";
import FoldersList from "../components/files/FoldersList.vue";
import DropZone from "../components/uploader/file-chooser/DropZone.vue";
import UploaderPopup from "../components/uploader/popup/UploaderPopup.vue";
import { ref, reactive, watchEffect, toRef, provide, onMounted,computed } from "vue";
//import RenameFormVue from '../components/files/RenameForm.vue';
import RenameForm from '../components/files/RenameForm.vue';
import FolderNewForm from "../components/files/FolderNewForm.vue";

const getPath = (query) => {
  let folderPath = "folders";
  let filePath = "files";

  if (query.folderId > 0) {
    const basePath = `folders/${query.folderId}`;
    folderPath = `${basePath}/${folderPath}`;
    filePath = `${basePath}/${filePath}`;
  }

  return { folderPath, filePath };
};

const fetchFoldersAndFiles = async (query) => {
  try {
   const {folderPath , filePath} = getPath(query);
    const { data:folders} = await foldersApi.index(query,folderPath);
    const { data:files} = await filesApi.index(query,filePath);
    return {folders , files};
  } catch (error) {
    console.error(error);
  }
};

const removeItem = async (item, items, fn) => {
  try {
    const response = await fn(item.id);
    if (response.status === 200 || response.status === 204) {
      const index = files.value.findIndex((i) => file.id === item.id);
      files.value.splice(index, 1);
    }
  } catch (error) {
    console.error(error);
  }
};

export default {
  components: {
    ActionBar,
    FilesList,
    FoldersList,
    SectionHeader,
    SearchForm,
    RenameForm,
    FolderNewForm,
    DropZone,
    UploaderPopup,
   
  },
  setup() {
    const files = ref([]);
    const folders= ref([]);
    const query = reactive({
      _sort: "name",
      _order: "asc",
      q: "",
      folderId: 0
    });
    const selectedItems = ref([]);
    const toast = reactive({
      show: false,
      message: "",
    });
    const modal = reactive({
      rename: false,
      newFolder: false
    });
    const choosenFiles = ref([]);

    const handleSelectChange = (items) => {
      selectedItems.value = Array.from(items);
    };

    const handleFolderCreated = (folder)=>{
      folders.value.push(folder);
      toast.message = `Folder ${folder.name} created`;
      toast.show=true;
    }

    provide("setSelectedItem", handleSelectChange);

    const handleSortChange = (payload) => {
      query._sort = payload.column;
      query._order = payload.order;
    };

    const handleRemove = () => {
      if (confirm("Are you sure?")) {
        selectedItems.value.forEach((item) => {
          if(item.mimeType){
            removeItem(item,files,filesApi.delete)
          }else{
            removeItem(item,folders,foldersApi.delete)
          }
        });
        selectedItems.value.splice(0);
        toast.show = true;

        toast.message = "Selected item(s) successfully removed";
      }
    };

    const handleRename = (items, newItem,entity) => {
      const oldItem = selectedItems.value[0];
      const index = items.value.findIndex((item) => item.id === newItem.id);
      items.value.splice(index, 1, newItem);
      toast.show = true;
      toast.message = `${entity} '${oldFile.name}' renamed to '${file.name}'`;
    };

    const handleFileUpdated = (file) => {
      handleRename(files,file,"File");
    };

    const handleFolderUpdated = (folder) => {
      handleRename(folders,folder,"Folder");
    };
    
    
    const handleUploadComplete = (item) => {
      files.value.push(item);
    };

    const handleDoubleClickFolder = (folder)=>{
      query.folderId = folder.id;
    }

    watchEffect(async () => {
      const response = await fetchFoldersAndFiles(query);
      files.value = response.files;
      folders.value = response.folders;
      history.pushState({},"",`?${new URLSearchParams(query)}`);
     
    });

     onMounted(()=>{
      window.onpopstate=()=>{
        Object.assign(
          query,
          Object.fromEntries(new URLSearchParams(window.location.search))
        );
      };
     });

     const isFile = computed(()=>selectedItems.value.length===1 && selectedItems.value[0].mimeType);

     

    return {
      files,
      folders,
      handleSortChange,
      q: toRef(query, "q"),
      folderId: toRef(query, "folderId"),
      handleSelectChange,
      selectedItems,
      handleRemove,
      toast,
      modal,
      handleFileUpdated,
      handleFolderUpdated,
      handleFolderCreated,
      choosenFiles,
      handleUploadComplete,
      handleDoubleClickFolder,
      renameFile: filesApi.update,
      renameFolder: foldersApi.update,
      isFile
    };
  },
};
</script>
