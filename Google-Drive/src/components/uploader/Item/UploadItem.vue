<template>
    <li class="list-group-item d-flex justify-content-between align-items-center ">  
            <p class ="uploadItemClasses">
       <component :is ="iconFileType"/>
         
           <span> {{item.file.name}}  </span> 
           </p>
           <span class ="failed-text" v-show ="isCanceled"> Upload canceled</span>
           <UploadControls :item ="item"  @cancel="handleCancel" @retry ="handleRetry" @locate ="handleLocate" />
            </li>
</template>
<script>
import { onMounted,reactive ,computed ,watch,inject
} from 'vue';
import { useIconFileType } from '../../../composable/icon-file-type'
import filesApi from "../../../api/files";
import states from "../states";
import axios from "axios"
import UploadControls from '../UploadControls.vue'
import useuploadStates from '../../../composable/upload-states';




const createFormData = (file) =>{
    const formData = new FormData();
    formData.append('file',file);
    return formData;
}



const startUpload = async(upload,source) =>{


try{
    
    upload.state = states.UPLOADING;
    const{data} = await filesApi.create(createFormData(upload.file),{
        onUploadProgress :(e)=>{

            if(e.event.lengthComputable){

            upload.progress = Math.round(( e.loaded /e.total) * 100)
            }
        },

  
     CancelToken: source.token


    });

upload.state = states.COMPLETE;
upload.response =data;
}
catch(error){
    if(axios.isCancel(error)){
        upload.state = states.CANCELED;
    } else {
        upload.state = states.FAILED
    }
  
    upload.progress = 0;

}

};
  
export default {
  components: {  UploadControls },

props:{

    item:{
        type:Object,
        required:true
    },
},

setup(props ,{emit})
{

    const uploadItem = reactive(props.item);
    let source = axios.CancelToken.source();

    // const isCanceled = computed(()=> uploadItem.state === states.CANCELED)
    

    const {isCanceled} = useuploadStates(uploadItem);



    const uploadItemClasses = computed(()=> {

        return {
            "upload-item" :true ,
            "failed" : isCanceled.value
 
        }
    })
    // onMounted(() =>
    // {
    //     setInterval(()=>{
    //         uploadItem.progress++;
    //     } ,500)
    // })

    // onMounted(startUpload(uploadItem));

    const setSelectedItem=  inject('setSelectedItem');
    
    

    const handleLocate =  () =>{
        setSelectedItem([uploadItem.response])
    }
    


    onMounted(() => 
  startUpload(uploadItem,source));
 
;


watch (() => [uploadItem.progress, uploadItem.state] , () => {

    emit('change' ,uploadItem)
})

const handleCancel = () =>{

source.cancel();
};

const handleRetry =() => {
    source = axios.CancelToken.source()
    startUpload(uploadItem,source)
}

//     onMounted(() => {
//   startUpload(uploadItem);
// });



    return{
        iconFileType:useIconFileType(props.item.file.type),
        uploadItem,
        handleCancel,
        handleRetry,
        handleLocate,
        isCanceled,
        uploadItemClasses
    };
},

     emits :['change']

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