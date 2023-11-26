<template>
    <form @submit.prevent="handleSubmit">
        <input v-highlight type="text" class="form-control" v-model="name">
        <div class="d-flex flex-row-reverse mt-3">
        <button class="btn btn-primary" type="submit">OK</button>
        <button class="btn btn-outline-secondary me-2" @click.prevent="$emit('close')">CANCEL</button>
    </div>
    </form>
    </template>
<script>
import filesApi from "../../api/files";
import { nextTick } from 'vue';
export default {
    props:{
       file:{
        type: Object,
        required: true
       } 
    },
    directives:{
       highlight:{
        mounted(el){
            nextTick(() => {
               const selectionEnd = el.value.split(".").slice(0,-1).join(".").length;
                el.setSelectionRange(0,selectionEnd);
            });
          //el.setSelectionRange(0,3);
          el.focus();  //to set the start and end position of the current text selection of our input element
        }
       } 
    },
    data(){
        return{
           name: this.file.name 
        }
    },
    
    methods: {
    async handleSubmit() {
            try {
            const {data} = await filesApi.update({ ...this.file, name: this.name }, this.file.id);
            this.$emit('file-updated',data);
            this.$emit('close');
            } catch (error) {
                console.error(error);
            }
                    }
    },
    emits:['file-updated','close']
}
//"File 1.png".split(".").slice(0,-1).join()
</script>