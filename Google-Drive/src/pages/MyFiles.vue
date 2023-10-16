<template>
  <div class="container py-3">
    <ActionBar />

    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">Files</h6>
     <SortToggler @sort-change ="handleSortChange ($event)"/>
    </div>
   <FilesList  :files="files"/>
  </div>
</template>

<script>
import  filesApi from"../api/files"
import ActionBar from "../components/ActionBar.vue";
import IconTypeCommon from '../components/icons/IconTypeCommon.vue';
import FilesList from "../components/files/FilesList.vue";
import{ ref,reactive ,watchEffect,watch }from 'vue';
import SortToggler from "../components/SortToggler.vue";
// import { watchEffect } from 'vue';
// const files = ref([])
  const  fetchFiles= async(query)=>{
    try{
      const {data} = await filesApi.index(query);
      return  data;
    } catch(error){
       console.error(error);
    }
  } 
export default {
  components: { ActionBar, IconTypeCommon,FilesList,SortToggler },
  
  setup()
{
  const files = ref([]);
  const query = reactive(
    {
      _sort: "name",
      _order: "asc"
    }
  );

  const handleSortChange =(payload) => {
    query._sort =payload.column;
    query._order = payload.order
  }
  watchEffect(async()=>(files.value = await fetchFiles(query)))
  // watch(
  // ()=> query._order,
  // async()=>(files.value = await fetchFiles(query)),
  // {immediate:true}
  // );

  return {
    files,handleSortChange
  }
},

//   mounted(){
//     this.fetchFiles();
//   },


//   data: () =>({
//    files:[]
//   }),
//   methods : {
    
//   }
};

</script>
