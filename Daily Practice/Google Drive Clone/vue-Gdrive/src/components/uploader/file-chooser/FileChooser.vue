<template>
    <div>
    <button class="btn btn-outline-primary" @click="handleClick">
      <icon-upload /> Upload Files
    </button>
    <input type="file" multiple style="display: none;" ref="file" @change="$emit ('file-choosen', $event.target.files)">
</div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const file = ref(null);
        const handleClick = () => {
            file.value.click();
        }

        return {file, handleClick };
    },
    emits :['files-choosen']
}
</script>