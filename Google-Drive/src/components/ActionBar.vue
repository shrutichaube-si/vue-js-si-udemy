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
   <File-Chooser  @files-choosen="$emit('files-choosen',$event)"/>

    <div class="action-buttons" v-show ="selectedCount ===1"
    @click ="$emit('rename')">
      <button type="button" class="rounded-button" title="Rename">
        <icon-pencil />
      </button>
      <button type="button" class="rounded-button" title="Remove selected"  @click ="$emit('remove')"  >
        <icon-trash />
      </button>
    </div>
  </div>
</template>
<script>
import FileChooser from './uploader/file-chooser/FileChooser.vue';
export default {


  components :{
     FileChooser
  },
  props : {
    selectedCount :{

      type: Number,
      default :0
    }
  },
  emits :['rename' ,'remove']
}
</script>
