<template>
      <li class="list-group-item d-flex justify-content-between align-items-center">
      <p :class="uploadItemClasses">
        <component :is="iconFileType"/>
      <span> {{ item.file.name }} </span>  
    </p>
    <span class="failed-text" v-show="isCanceled">Upload canceled</span>
<UploadControls :item="item" @cancel="handleCancel" @retry="handleRetry" @locate="handleLocate"/>
</li>
</template>
<script>
import UploadControls from './UploadControls.vue';
import { computed, onMounted, reactive, watch, inject } from 'vue';
import {useiconFileType} from "../../../composable/icon-file-type";
import IconTypeCommon from '../../icons/IconTypeCommon.vue'
import filesApi from "../../../api/files"
import states from '../states';
import axios from "axios";
import useUploadStates from '../../../composable/upload-states';



const createFormData = (file) => {
   const formData = new FormData(); 
   formData.append('file',file);
   return formData;
}
const startUpload = async(upload,source) => {
    try {
      upload.state = states.UPLOADING;


      const { data } = await filesApi.create(createFormData(upload.file),{
          onUploadProgress:(e) =>  {
            console.log(e,'---e')
            if(e.event.lengthComputable){
              //  console.log(adding) 
              upload.progress = Math.round((e.loaded / e.total) * 100) 
            }
          },
          
          cancelToken: source.token
        });
       upload.state = states.COMPLETE;
       upload.response = data;
    } catch (error) {
       if(!axios.isCancel(error)){
          
         upload.state = states.FAILED;
       }
        // console.log("hello")
         console.log(error)
        // upload.state = states.FAILED;
        upload.progress = 0;
    }
}
export default {
  components: { IconTypeCommon, UploadControls },
    props:{
        item:{
            type: Object,
            required: true
        }
    },
    setup(props, { emit }){
      let source = axios.CancelToken.source();
      const uploadItem = reactive(props.item);
     
      const {isCanceled} = useUploadStates(uploadItem);
      const uploadItemClasses = computed(() =>{
        return{
          "upload-item": true,
          "failed": isCanceled.value
        };
      });

     const setSelectedItem = inject('setSelectedItem')
     const handleLocate = () => {
      setSelectedItem([uploadItem.response])
     }
    //   onMounted(() => {
    //     setInterval(() => {
    //        uploadItem.progress++;
    //     },500)
    //   })
    // onMounted(startUpload(uploadItem));
    onMounted(() => {
      startUpload(uploadItem,source)
    });


    watch(
      () => [uploadItem.progress, uploadItem.state],
      () => { 
        if(uploadItem.state == states.CANCELED){
          source.cancel();
        }
        emit('change', uploadItem);
    });
     const handleCancel = () => {
         uploadItem.state = states.CANCELED;
     };

     const handleRetry = () => {
      source = axios.CancelToken.source();
        startUpload(uploadItem, source);
     }

      return{
        iconFileType:useiconFileType(props.item.file.type),uploadItem,handleCancel,handleRetry,handleLocate,isCanceled,uploadItemClasses}
    },
    emits: ['change']

}
</script>
<style scoped>
.upload-item {
  line-height: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.upload-item,
.failed-text {
  color: #6c757d;
}

.upload-item span,
.failed-text {
  font-size: 12px;
}

.upload-item span {
  margin-left: 6px;
}

.failed {
  width: 140px;
  color: #212529;
}
</style>