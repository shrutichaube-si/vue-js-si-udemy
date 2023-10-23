<template>
    <div class="card shadow uploader-popup" v-if ="items.length">
        <div class="card-header bg-dark py-3">
            <div class="d-flex justify-content-between  align-items-center">
               <span class="text-light">
              {{ uploadingStatus }}
               </span>
               <PopupControls   @toggle ="showPopupBody =!showPopupBody" @close ="handleClose"/>
            </div>
        </div>
        <div  class = "upload-items"  v-show ="showPopupBody">
            <ul class="list-group list-group-flush">
            <UploadItem 
             v-for ="item in items" 
             :key ="`item-${item.id}`" 
             :item = "item"
             @change ="handleItemChange"
             />  
            </ul>
        </div>
    </div>
   
</template>
<script>
import PopupControls from "./PopupControls.vue";
import{ref,watch,computed} from "vue";
import states from "../states"
import UploadItem from "../Item/UploadItem.vue";


const randomId =() =>
        {
            return Math.random().toString(36).substr(2,9);
        } 
         const getUploadItems =(files) =>{

             return Array.from(files).map((file) => ({
                id: randomId(),
                file,
                progress: 0,
                state: states.WAITING,
                response :null
            }))
         }








const uploadStatistics =(items) => {
const uploadingItemsCount =  computed(()=>
 
       {
          return items.value.filter
          ((item)=> item.state ===states.WAITING || item.state === states.UPLOADING)
          .length;
       }).value;


 const failedItemCount =  computed(()=>
 
 {
    return items.value.filter
    ((item)=> item.state ===states.CANCELED || item.state === states.FAILED)
    .length;
 }).value;







const completeItemsCount = computed(()=> items.value.filter(item => item.state === states.COMPLETE).length).value;

  return {uploadingItemsCount,completeItemsCount,failedItemCount}
}


export default {


    props: {
        files :{
            type: Object,
            required :true
        }
    },

    components:{
        PopupControls,
        UploadItem
    },
    setup(props,{emit})
    {
         const items = ref([]);

         const showPopupBody = ref(true)
          
         const handleClose  =  () =>{
            if(confirm("Cancel all uploads ?"))
            {
                items.value.splice(0);
            }
         }
          const uploadingStatus = computed(() =>{
          
          const {uploadingItemsCount,failedItemsCount,completeItemsCount}    =     uploadStatistics(items)
          

          if(uploadingItemsCount>0){
          
          
            return `Uploading ${uploadingItemsCount} items`;
          }
          else if (completeItemsCount >0){
            return `$ {completeItemsCount}  uploads complete`;
          }
          else if(failedItemsCount>0){
            return `$ {failedItemsCount} uploads Failed`
          }
         })


         const handleItemChange =(item) =>  {
            if(item.state ===   states.COMPLETE)
            {
                emit('upload-complete',item.response)
                const index = items.value.findIndex(i => i.id === item.id);
                items.value.splice(index,1,item);
            }
         }

         watch(() => props.files,(newFiles) =>{
            items.value.unshift(...getUploadItems(newFiles))
         });


         return{items ,uploadingStatus,handleClose,showPopupBody,handleItemChange};
    }

,
emits:['upload-complete']




}
</script>
<style scoped>


.uploader-popup 
{
    width:400px;
    position:fixed;
    bottom:20px;
    right:20px;
    z-index:999;
}

</style>
