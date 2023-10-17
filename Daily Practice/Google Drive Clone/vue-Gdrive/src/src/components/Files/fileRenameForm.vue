<template>
    <form>
        <input type="text" class="form-control">
        <div class="d-flex flex-row-reverse mt-3">
        <button class="btn btn-primary">OK</button>
        <button class="btn btn-outline-secondary me-2">CANCEL</button>
    </div>
    </form>
    </template>
<script>
import filesApi from ""
export default {
    props:{
       file:{
        type: Object,
        required: true
       } 
    },
    data(){
        return{
           name: this.file.name 
        }
    },
    methods: {
        handleSubmit(){
try {
    filesApi.update({ name: this.name})
} catch (error) {
    
}
        }
    },

}
</script>