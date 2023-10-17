<template>
  <div class="container py-3">
    <ActionBar />

    <div class="d-flex justify-content-between align-items-center py-2">
      <h6 class="text-muted mb-0">Files</h6>
      <button class="rounded-button">
        <icon-arrow-up />
      </button>
    </div>
    <FilesList :files="files"/>
   
  </div>
</template>

<script>
import filesApi from "../api/files";
//import axios from 'axios';
import ActionBar from "../components/ActionBar.vue";
//import IconTypeCommon from '../components/icons/IconTypeCommon.vue';
import FilesList from "../components/files/FilesList.vue";
import {onMounted, ref} from 'vue';
const fetchFiles = async () => {
      try {
        const {data} = await filesApi.index();
      return data;
       } catch(erro) {
        console.error(error);

       }
      //  axios.get("http://localhost:3030/files")
     
      //  .then(response => console.log(response))
       

    
    };

export default {
  components: { ActionBar, FilesList },
  setup() {
    const files = ref([]);
   
    onMounted(async() => files.value =await  fetchFiles()) ;

    return { files};
 }
  // mounted() {
  //   this.fetchFiles(); 
  // },
  // data : () => ({
  //   files: []

  // }),
  // methods: {
    
  // }
};
</script>
