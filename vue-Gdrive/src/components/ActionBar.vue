<template>
  <div
    class="
      d-flex
      justify-content-between
      align-items-center
      border-bottom
      pt-2
      pb-3
    "
  >
   <fileChooser @files-choosen="$emit('files-choosen',$event)"/>

    <div class="action-buttons" v-show="selectedCount">
      <button type="button" class="rounded-button" title="Rename" v-show="selectedCount === 1" @click="$emit('rename')">
        <icon-pencil />
      </button>
      <button type="button" class="rounded-button" title="Remove selected" @click="$emit('remove')">
        <icon-trash />
      </button>
    </div>
  </div>
</template>
<script>
import fileChooser from '../components/uploader/file-chooser/fileChooser.vue';
export default{
  components:{fileChooser},
  props:{
    selectedCount:{
      type:Number,
      default:0
    }
  },
  components:{ fileChooser },
  emits:['rename','remove','files-choosen']
}
</script>
