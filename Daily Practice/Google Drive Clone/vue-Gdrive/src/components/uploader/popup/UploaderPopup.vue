<template>
    <div class="card shadow uploader-popup" v-if="items.length">
        <div class="card-header bg-dark py-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="text-light">{{ uploadingStatus }}</span>
                <popupControls @toggle="showPopupBody = !showPopupBody" @close="handleClose" />
               
            </div>
        </div>
        <div>

        </div>
        <div class="upload-items" v-show="showPopupBody">
            <ul class="list-group list-group-flush">
  <UploadItem 
  v-for="item in items"
  :key="`item-${item.id}`"
  :item="item"
  @change="handleItemChange"
  />
</ul>
        </div>
    </div>
</template>

<script>
import PopupControls from "./PopupControls.vue";
import states from "../states";
import { computed, ref , watch } from "vue";
import files from '../../../api/files';
import UploadItem from "../item/UploadItem.vue";


const randomId = () => {
            return Math.random().toString(36).substr(2 ,9)
        }

        const getUplaodItems = (files) => {
            return Array.from(files).map(file => ({
                id: randomId(),
                file,
                progress: 0,
                state: states.WAITING,
                response: null
            }))
        };



const uplaodStatistics = (items) => {

    const uploadingItemsCount = 
    computed (() =>{
          return items.
            value.filter((item) => 
            item.state === states.WAITING || item.state === states.UPLOADING)
            .length;

        }).value;


const failedItemsCount =computed(() => {return items.value.filter((item) =>item.state === states.CANCELED || item.state === states.FAILED)
    .length}).value;
    
     return {
        uploadingItemsCount , completeItemsCount, failedItemsCount
    };
}
export default {
    props: {
        files : {
            type : Object,
            required : true
        }
    },
    components: { PopupControls, UploadItem ,},
    setup (props ,{ emit}) {
        const items = ref([]);
        const showPopupBody = ref(true);
        const handleClose = () => {
            if (confirm("cancel all uploads?")) {
                items.value.splice(0);
            }
        }

       
        
        const uploadingStatus = computed(() => {
           const {uploadingItemsCount,failedItemsCount, completeItemsCount,} = uplaodStatistics (items);
           if (uploadingItemsCount > 0) {
            return `Uploading ${uploadingItemsCount} items`;
           } else if (completeItemsCount > 0) {
            return `${completeItemsCount} uploads complete`;
           } else if (failedItemsCount > 0) {
            return `${failedItemsCount} uploads failed`;
           }
            
        });

        const handleItemChange = (item) => {
            if (item.state === states.COMPLETE) {
                emit('upload-complete', item.response);
                const index = items.value.findIndex( i => i.id === item.id);
                items.value.splice( index, 1, item);

            }
        }


        watch(() => props.files, (newFiles) => {
            items.value.unshift(...getUplaodItems(newFiles));
        });
        return { items,uploadingStatus,showPopupBody,handleClose,handleItemChange };
    },
    emits: ['upload-complete']
};
</script>