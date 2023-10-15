<template>
      <div>
        <input type ="text" :value = "modelValue" @input = handleInput>
        <ul v-show = "searchResults.length && isOpen">
            <li v-for = "result in searchResults" :key ="result.name" @click = "setSelected(result.name)">{{ result.name }}</li>
            
        </ul>
      </div>
</template>
<script setup>

import {computed,ref} from 'vue';
const props = defineProps({

    source :
    {
        type: Array,
        required : true,
        default : () => []
    },
    modelValue :String
})

const emit = defineEmits(['update:modelValue'])

const search = ref('');
const  isOpen =ref(false)

const searchResults = computed (() => 
{
    if(search.value === '')
    {
        return[]
    }

    return props.source.filter(item =>{

        if(item.name.toLowerCase().includes(search.value.toLowerCase()))

           return item
        

    });
    
});

const setSelected = item => {
    search.value = item
    isOpen.value = item
    emit('update:modelValue', search.value)
}

const handleInput = event => {
    search.value = event.target.value
    isOpen.value = true
    emit('update:modalValue', search.value)
}

</script>
