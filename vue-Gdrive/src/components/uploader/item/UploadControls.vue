<template>
    <div class="upload-controls" @mouseenter="hovered = true" @mouseleave="hovered = false">
     <ProgressRing :progress="item.progess" v-if="!hovered"/>
    <div class="upload-action" v-else>
        <div class="action-cancel"><button @click="$emit('cancel')"><icon-times/></button></div>
    </div>
    <div class="upload-action">
        <!-- <div class="action-canceled"><button @click="$emit('retry')"><icon-clockwise/></button></div>
    </div>
    <div class="upload-action">
        <div class="action-locate"><button @click="$emit('locate')"><icon-folder-open/></button></div> -->
    </div>
</div>
</template>
<script>
import IconFolderOpen from '../../icons/IconFolderOpen.vue';
import ProgressRing from './ProgressRing.vue';
import { ref } from 'vue'
export default {
    components:{ ProgressRing, IconFolderOpen},
    emits:['cancel','retry','locate'],
    props:{
        item:{
          type: Object,
          required:true  
        }
    },
    setup(){
        const hovered = ref(false);

        return{hovered}
    }
}

// <!-- <div class="upload-controls">
//     {{ uploadItem.state }} - {{ uploadItem.progress }}
// </div> -->
</script>
<style scoped>
.upload-controls,
.upload-action,
.action-cancel,
.action-canceled,
.action-complete,
.action-locate {
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-controls {
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.upload-controls:hover {
  background-color: #d9d9d9;
  fill: white;
}

.upload-controls button {
  background: transparent;
  padding: 0;
  border: none;
}

.upload-action,
.upload-controls button {
  width: 32px;
  height: 32px;
}

.action-cancel,
.action-canceled,
.action-complete,
.action-locate {
  width: 70%;
  height: 70%;
  border-radius: 50%;
}

.action-cancel {
  background-color: #333;
}

.action-canceled {
  background-color: #dc3545;
}

.action-complete {
  background-color: #28a745;
}

.action-locate {
  position: relative;
  background-color: #d9d9d9;
}

.upload-action svg {
  width: 70%;
  height: 70%;
  color: #fff;
}
</style>