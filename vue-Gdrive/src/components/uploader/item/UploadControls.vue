<template>
    <div class="upload-controls">
    {{ item.state }} - {{ item.progress }}
    <button @click="$emit('cancel')">C</button>
    <button @click="$emit('retry')">R</button>
    <button @click="$emit('locate')">L</button>
</div>
</template>
<script>
export default {
    emits:['cancel','retry','locate'],
    props:{
        item:{
          type: Object,
          required:true  
        }
    }
}

// <!-- <div class="upload-controls">
//     {{ uploadItem.state }} - {{ uploadItem.progress }}
// </div> -->
</script>
