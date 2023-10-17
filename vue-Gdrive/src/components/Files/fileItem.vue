<template>
    <div class="col-md-3">
  <div class="card mb-4">
    <img class="file-thumb" :src="file.url" v-if="isValidImage"/>
    <div class="card-body text-center py-5" v-else>
      <component :is="iconFileType" height="4em" width="4em" />
    </div>
    <div class="card-footer">
      <div class="d-flex align-items-center">
        <icon-type-common />
        <span class="file-name">{{ file.name }}</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { computed } from 'vue'
export default{
    props:{
        file:{
            type:Object,
            required:true
        }
    },
    setup(props){
          const iconFileType = computed(() => {
            const iconTypes = {
                "video/mp4": "icon-type-video",
                "image/jpeg": "icon-type-image",
                "image/jpg":"icon-type-image",
                "image/png":"icon-type-image",
                "application/zip":"icon-type-zip",
                "application/msword":"icon-type-doc",
                "application/vnd.ms-excel":"icon-type-excel",
                "application/pdf":"icon-type-pdf",   
            };
            return iconTypes[props.file.mimeType] ? iconTypes[props.file.mimeType] : "icon-type-common";
        });

    const isValidImage = computed(() => {
        const imageMimeTypes = ["image/jpg","image/jpeg","image/png"];
            return imageMimeTypes.includes(props.file.mimeType) && !!props.file.url;
    });

    return {iconFileType,isValidImage};
          }
    // computed:{
    //     iconFileType(){
    //         const iconTypes = {
    //             "video/mp4": "icon-type-video",
    //             "image/jpeg": "icon-type-image",
    //             "image/jpg":"icon-type-image",
    //             "image/png":"icon-type-image",
    //             "application/zip":"icon-type-zip",
    //             "application/msword":"icon-type-doc",
    //             "application/vnd.ms-excel":"icon-type-excel",
    //             "application/pdf":"icon-type-pdf",   
    //         };
    //         return iconTypes[this.file.mimeType] ? iconTypes[this.file.mimeType] : "icon-type-common";
    //     },

        // isValidImage(){
        //     const imageMimeTypes = ["image/jpg","image/jpeg","image/png"];
        //     return imageMimeTypes.includes(this.file.mimeType) && this.file.url;
        // }
    };
</script>
