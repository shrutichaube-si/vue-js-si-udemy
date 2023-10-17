<template>
  <div class="container py-3">
    <ActionBar />
    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">Files {{ selectedItems }}</h6>
      <SortToggler @sort-change="handleSortChange($event)"></SortToggler>
    </div>
    <teleport to="#search-form">
      <SearchForm v-model="q"/>
      </teleport>
    <FilesList :files="files" @select-change="handleSelectChange($event)"></FilesList>
    
  </div>
</template>

<script>

import filesApi from '../api/files';
import ActionBar from "../components/ActionBar.vue";
import SortToggler from '../components/SortToggler.vue';
import FilesList from '../components/files/FilesList.vue';
import IconTypeCommon from '../components/icons/IconTypeCommon.vue';
import {ref, onMounted,reactive,watchEffect, watch,toRef} from 'vue';
import SearchForm from '../components/SearchForm.vue';

const fetchFiles = async(query)=>{
     try{
      const {data} = await filesApi.index(query);
      return data;
      }catch(error){
       console.error(error);
        }  };
export default {

  components: { ActionBar, IconTypeCommon, FilesList,SortToggler, SearchForm},
  setup(){
    const files = ref([]);
     const query = reactive({
      _sort:"name",
      _order:"asc",
      q:""
     });
     const selectedItems = ref([]);
     const handleSelectChange = (items)=>{
      selectedItems.value = Array.from(items);
     }
     const handleSortChange = (payload)=>{
       query._sort=payload.column;
       query._order = payload.order;
     }
      watchEffect(async ()=> (files.value = await fetchFiles(query)));
      //   watch(
      //     ()=>query._order,
      //     async ()=>(files.value = await fetchFiles(query)),{immediate:true});
          
        
    return {files, handleSortChange, q: toRef(query,'q'),handleSelectChange,selectedItems};
  },
};
</script>
