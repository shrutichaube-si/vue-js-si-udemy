<template>
    <li class="list-group-item d-flex justify-content-between align-items-center ">  
            <p class ="upload-item">
       <component :is ="iconFileType"/>
         
           <span> {{item.file.name}}  </span> 
           </p>
           
            </li>
</template>
<script>
import { onMounted,reactive } from 'vue';
import { useIconFileType } from '../../../composable/icon-file-type'
 import IconTypeCommon from '../../icons/IconTypeCommon.vue'
import filesApi from "../../../api/files";
import states from "../states";

const createFormData = (file) =>{
    const formData = new FormData();
    formData.append('file',file);
    return formData;
}



const startUpload = async(upload) =>{


try{
    
    upload.state = states.UPLOADING;
    const config = {
        onUploadProgress :(e)=>{

            if(e.event.lengthComputable){

            upload.progress = Math.round(( e.loaded /e.total) * 100)
            }
        }
    }
    const payload = createFormData(upload.file)
    const {data} = await filesApi.create(payload,config );
upload.state = states.COMPLETE;
upload.response =data;
}catch(error){
    console.log(error)
    upload.state = states.FAILED
    upload.progress = 0;

}



}
  
export default {
//   components: { IconTypeCommon },

props:{

    item:{
        type:Object,
        required:true
    },
},

setup(props)
{

    const uploadItem = reactive(props.item);

    // onMounted(() =>
    // {
    //     setInterval(()=>{
    //         uploadItem.progress++;
    //     } ,500)
    // })

    // onMounted(startUpload(uploadItem));

    onMounted(() => {
  startUpload(uploadItem);
});

//     onMounted(() => {
//   startUpload(uploadItem);
// });



    return{
        iconFileType:useIconFileType(props.item.file.type),
        uploadItem
    }
}
     
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