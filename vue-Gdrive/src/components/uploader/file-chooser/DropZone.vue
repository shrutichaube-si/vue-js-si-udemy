<template>
    <div class="dropzone" @dragover.prevent="dragged = true" 
    @dragleave.prevent="dragged = false" 
    :class="{'dragged-over': dragged }"
    @drop.prevent="handleDrop"
    >
    <DropZoneMessage/>
        <slot/>
    </div>
</template>
<script>
import DropZoneMessage from './DropZoneMessage.vue';
import { ref } from 'vue';
export default{
    components:{ DropZoneMessage },
    setup (props,{emit}){
        const dragged = ref(false);

        const handleDrop = (event) =>{
            dragged.value = false;
            emit('files-dropped', event.dataTransfer.files);

        }

        return {dragged,handleDrop}
    },
    emits:['files-dropped']
}
</script>

<style scoped>
.dropzone{
    min-height: 80vh;
    border: 2px solid #fff;
    background: #fff;
    padding: 0.3em;

}
.dragged-over{
    background: #e8f0fe;
    border:2px solid #f285f4
}
</style>