<template>
     <div class="uplaod-controls"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false">
      <template v-if="!hovered">
        <ProgressRing :progress="item.progress" v-if="isUploading" />
        <div class="upload-action" v-else>
            <div class="action-canceled" v-if="isCanceled">
                <icon-exclamation/>
            </div>
            <div class="action-complete" v-else-if="isComplete">
                <icon-check/>
            </div>

        </div>
    </template>
    <template v-else>
        <div class="upload-action" >
                <div class="action-cancel" v-if="isUploading" >
                    <button @click="$emit('cancel')"><icon-times /></button>
                </div>
                <div class="action-canceled" v-else-if="isCanceled">
                    <button @click="$emit('retry')"><icon-clockwise/></button>
                </div>
                <div class="action-locate " v-else-if="isComplete">
                    <button @click="$emit('locate')"><icon-folder-open/></button>
                </div>
            </div>
        </template>
        </div>
</template>

<script>
import IconFolderOpen from '../../icons/IconFolderOpen.vue';
import ProgressRing from './ProgressRing.vue';
import { ref } from "vue";
import useUploadStates from '../../../composable/upload-states';
import IconExclamation from '../../icons/IconExclamation.vue';
import IconCheck from '../../icons/IconCheck.vue';
export default {
    components : { ProgressRing, IconFolderOpen, IconExclamation, IconCheck },
    emits : ['cancel','retry','locate'],
    props: {
        item:{
            type:Object,
            required:true
        },
    },
    setup(props) {
        const hovered = ref(false);

        return { hovered,...useUploadStates(props.item) };
},
};
</script>