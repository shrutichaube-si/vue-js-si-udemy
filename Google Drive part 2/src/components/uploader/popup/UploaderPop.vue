<template>
    <div class="card shadow uploader-popup" v-if="items.length">
        <div class="card-header bg-dark py-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="text-light">{{ uploadingStatus }}</span>
                <pop-up-controls @toggle="showPopBody=!showPopBody" @close="handleClose"></pop-up-controls>
            </div>
        </div>
        <div class="upload-items" v-show="showPopBody">
            <ul class="list-group list-group-flush">
            <UploadItem  
            v-for="(item,index) in items" :key="index"
            :item="item"/>
        </ul>
        </div>
    </div>
</template>

<script>
import PopUpControls from "./PopUpControls.vue";
import UploadItem from "../item/UploadItem.vue";
import { ref , watch,computed} from "vue";
import states from "../states";

const randomId =()=>{
            return Math.random().toString(36).substr(2,9);
        }

        const getUploadItems = (files)=>{
             return Array.from(files).map(file=>({
                id:randomId(),
                file,
                progress:0,
                state: states.WAITING,
                response:null,
            }));
        };

const uploadingItemsCount = (items)=>{
    return computed(()=>{
          return items.value.filter(
            (item)=>  
            item.state === states.WAITING || item.state === states.UPLOADING
            ).length;
        }).value;

};


export default {
    props:{
        files:{
            type:Object,
            required:true,
        },
    },
components:{PopUpControls,UploadItem},

    setup(props,{emit}){
        const items = ref([]);
        const showPopBody = ref(true);

        const handleClose =()=>{
            if(confirm("cancel all uploads?")){
                items.value.splice(0);
            }
        }
        
       
        const uploadingStatus = computed(()=>{
            return `Uploading ${uploadingItemsCount(items)} items`;
        });

        watch(()=>props.files,(newFiles)=>{
             items.value.unshift(...getUploadItems(newFiles));
        });
        return {items,uploadingItemsCount,uploadingStatus,showPopBody,handleClose};
    }
}
</script>
<style scoped>
.uploader-popup{
    width:400px;
    position: fixed;
    bottom:20px;
    right:20px;
    z-index:999;
}
</style>
