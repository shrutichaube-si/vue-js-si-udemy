<template>
    <div class="row">
      <file-item  v-for="file in files" :file="file" :key="`file-${file.id}`" ></file-item>
    </div>
</template>

<script>
import FileItem from './FileItem.vue';
export default{
    components:{FileItem},
  props:{
    files:{
        type:Array,
        required:true
    }
  }
}
</script>