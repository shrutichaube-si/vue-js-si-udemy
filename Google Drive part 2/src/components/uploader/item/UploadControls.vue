<template>
    <div class="upload-controls">
    {{ item.state }} - {{ item.progress }}
     <button @click="$emit('cancel')">c</button>
     <button @click="$emit('retry')">r</button>
     <button @click="$emit('locate')">l</button>
</div>
</template>

<script>
export default{
    emits:['cancel','retry','locate'],
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>
