<template>
  <div class="container py-3">
    <ActionBar :selectedCount="selectedItems.length" @remove="handleRemove" @rename="showModal=true"/>

    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">Files {{ selectedItems }}</h6>
      <sortToggler @sort-change="handleSortChange($event)"/>
    </div>
  <teleport to="#search-form">
    <searchForm v-model="q"/>
  </teleport>
    <filesList :files="files" @select-change="handleSelectChange($event)"/>
   <app-toast :show="toast.show" :message="toast.message" type="success" position="bottom-left" @hide="toast.show = false"/>

   <app-modal title="Rename" :show="showModal && selectedItems.length === 1" @hide="showModal = false">
    <fileRenameForm :file="selectedItems[0]" @close="showModal = false" @file-updated="handleFileUpdated($event)"/>
   </app-modal>

  </div>
</template>

<script>
// import axios from 'axios'
import ActionBar from "../components/ActionBar.vue";
import filesList from '../components/Files/filesList.vue';
import sortToggler from '../components/sortToggler.vue';
import fileRenameForm from '../components/Files/fileRenameForm.vue'
import filesApi from "../api/files";
import {onMounted, reactive, ref, toRef, watch, watchEffect } from 'vue'
import SearchForm from '../components/SearchForm.vue';
const fetchFiles = async (query) => {
      try {
        const { data } =await filesApi.index(query);      
        console.log("Fetched Files:", data); // Logging the fetched files
      return data;
      } catch (error) {
        console.error(error)
      }
      console.log()
      };

     const removeItem = async(item,files) => {
      try {
       const response = await filesApi.delete(item.id);
       if(response.status === 200 || response.status === 204){

       
       const index = files.value.findIndex(file => file.id === item.id);
      files.value.splice(index, 1);
      } 
    }
    catch (error) {
        console.error(error);
      }
     } 
export default {
  components: { ActionBar,filesList,sortToggler, SearchForm,fileRenameForm },
  setup(){
     const files = ref([]);
     const query = reactive({
      _sort: "name",
      _order:"asc",
      q: ""  //this is a json server way to perform full text search..we simply add q in query string & specify the search term.
     });
    const selectedItems = ref([]);

    const toast = reactive({
      show: false,
      message: ""
    });
    const showModal = ref(false);

    const handleSelectChange = (items) => {
      selectedItems.value = Array.from(items); // converting drom set to array
    }

     const handleSortChange = (payload) => {
        query._sort = payload.column;
        query._order = payload.order;
     };
 

     const handleRemove = () => {
      if(confirm("Are you sure?")){
        selectedItems.value.forEach((item) => removeItem(item,files));
        selectedItems.value.splice(0);
        toast.show = true;
        toast.message = "Selected item(s) successfully removed";
        //item represents the current iteration
      }
     }
    // const fetchFiles = async () => {
    //   try {
    //     const { data } =await axios.get("http://localhost:3030/files")
    //   files.value = data;
    //   console.log("Fetched Files:", files.value); // Logging the fetched files
    //   } catch (error) {
    //     console.error(error)
    //   }
    //   console.log()
    //   };

      // onMounted(() => fetchFiles());
      // onMounted(async () => (files.value = await fetchFiles(query)));

      const handleFileUpdated = (file) => {
        const oldFile = selectedItems.vlue[0];
        const index = files.value.findIndex(item => item.id === file.id);
        files.value.splice(index,1,file);
        toast.show = true;
        toast.message = `File '${oldFile.name}' renamed to '${file.name}'`;
      }
      watchEffect(async () => (files.value = await fetchFiles(query)));
    
     return { files,handleSortChange, q: toRef(query,'q'),handleSelectChange,selectedItems,handleRemove,toast,showModal,handleFileUpdated };
  }}
  // mounted(){
  //   this.fetchFiles();
  // }}
  // data:() => ({
  //   files:[]
  // }),
  // methods : {
  //    async fetchFiles() {
  //      try {
  //        const { data } =await axios.get("http://localhost:3030/files")
  //      this.files = data;
  //      console.log("Fetched Files:", this.files); // Logging the fetched files
  //      } catch (error) {
  //        console.error(error)
  //      }
  //      console.log()
  //      }
  //   }
  // }
// console.log('Hello ji')
// provide inject..second we use using teleport
//app-modal - the component emit hide event whic triggers when we cllick on the close icon on the top right of the -
//modal title
//app-modal title="Rename" :show="showModal && selectedItems.length === 1  to make sure that we have only one item selected
</script>
