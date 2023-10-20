<template>
   <div class="card shadow uploader-popup" v-if="items.length">
    <div class="card-header bg-dark py-3">
        <div class="d-flex justify-content-between align-items-center">
            <span class="text-light">{{ uploadingStatus }}</span>
          <PopupControls @toggle="showPopupBody = !showPopupBody" @close="handleClose"/>
        </div>
    </div>
    <div class="upload-items" v-show="showPopupBody">
        <ul class="list-group list-group-flush">
<Uploaditem v-for="item in items" :key="item.id" :item="item" @change="handleItemChange"/>
   
</ul>
    </div>
   </div> 
</template>
<script>
import {watch,ref,computed} from 'vue'
import states from "../states"
import PopupControls from './PopupControls.vue';
import Uploaditem from '../item/Uploaditem.vue';
import files from '../../../api/files';


const randomId = () => {
           return Math.random().toString(36).substr(2,9);  // This function randomId generates a random alphanumeric string of length 9 to be used as an ID for the uploaded items.
        }

        const getUploadItems = (files) => {
           return Array.from(files).map(file => ({
                id:randomId,
                file,
                progress:0,
                state: states.WAITING,
                response:null
            }))
        }

//The getUploadItems function takes in a list of files, converts them to an array, and maps each file to an object containing an ID, 
//the file itself, upload progress, state, and response. The states.WAITING is one of the predefined states for the upload process.
const uploadingItemsCount = (items) => {
   return computed(() =>{
        return items.value.filter((item) => item.state === states.WAITING || item.state === states.UPLOADING).length;
       }).value;
};

export default{
    components:{ PopupControls, PopupControls,Uploaditem },
    props:{
       files:{
         type:Object,
         required:true
       } 
    },
    setup(props,{ emit }){
        const items = ref([]);
        const showPopupBody = ref(true);

        const handleClose = () => {
            if(confirm("Cancel all Uploads?")){
                items.value.splice(0);
            }
        } 
       const uploadingStatus = computed(() => {
        return `Uploading ${uploadingItemsCount(items)} items`;
       }) 

       const handleItemChange = (item) => {
        if(item.state === states.COMPLETE) {
            emit('upload-complete', item.response);
            const index = items.value.findIndex(i => i.id === item.id);
            items.value.splice(index, 1, item);
        }
       }

         watch(() => props.files,(newFiles) =>{
            items.value.unshift(...getUploadItems(newFiles));
         } );    
         return{items,uploadingStatus,showPopupBody,handleClose,handleItemChange};
         //This watch function watches for changes in the props.files. When props.files change, it updates the items array with the new files using the getUploadItems function.
        // The items array is then returned to be accessible in the template.
    },
    emits: ['upload-complete']
}
// In the code snippet you provided, item.state refers to the state of each individual file item being uploaded. The items array likely contains multiple objects, each representing a file to be uploaded. Each of these objects has a state property which represents the current state of the file.
// The computed property uploadingItemsCount calculates the number of items that are either in the "waiting" state or the "uploading" state. It filters the items array based on the state property of each item, and then it calculates the length of the filtered array. The result represents the count of items that are either waiting to be uploaded or currently being uploaded.
// Here's how the computed property uploadingItemsCount works:
// It uses the computed function from Vue to create a reactive computed property.
// Inside the function, it accesses the items.value array, which contains all the items to be uploaded.
// It filters this array based on a condition that checks if the state of each item is either "waiting" or "uploading", referring to the predefined states states.WAITING and states.UPLOADING.
// The filter function returns a new array containing only the items that meet the specified condition.
// The length property of the filtered array is calculated, representing the count of items that are either in the "waiting" state or the "uploading" state.
// This computed property can be used in the Vue template or component logic to display or manage the count of files that are currently waiting or being uploaded.
</script>
<style scoped>
.uploader-popup{
    width: 400px;
    position:fixed;
    bottom : 20px;
    right:20px;
    z-index:999
}
</style>
