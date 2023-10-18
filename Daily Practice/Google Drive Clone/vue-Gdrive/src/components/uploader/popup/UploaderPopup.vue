<template>
    <div class="card shadow uploader-popup">
        <div class="card-header bg-dark py-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="text-light">Uploading</span>
                <div class="popup-controls">
                    <button class="rounded-button me-2">
                        <icon-chevron-down/>
                    </button
                    ><button class="rounded-button">
                        <icon-times />
                    </button>
                </div>
            </div>
        </div>
        <div>

        </div>
        <div class="upload-items">
            <ul class="list-group list-group-flush">
  <li class=
  "list-group-item
   d-flex
    justify-content-between-align-items-center
    "
     v-for="item in items"
    :key="`item-${item.id}`"
     > 
            <p class="uplaod-item"> {{item.file.name}} </p>
            <div class="uplaod-controls">x</div>
        </li>
</ul>
        </div>
    </div>
</template>

<script>
import states from "../states";
import { ref , watch } from "vue";
import files from '../../../api/files';
export default {
    props: {
        files : {
            type : Object,
            required : true
        }
    },
    setup (props ,{ emit}) {
        const items = ref([]);

        const randomId = () => {
            return Math.random().toString(36).substr(2 ,9)
        }

        const getUplaodItems = (files) => {
            return Array.from(files).map(file => ({
                id: randomId(),
                file,
                progress: 0,
                state: states.WAITING,
                response: null
            }))
        }

        watch(() => props.files, (newFiles) => {
            items.value.unshift(...getUplaodItems(newFiles));
        });
        return { items };
    }
}
</script>