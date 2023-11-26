<template>
    <div class="w-full relative">
        <input 
        type="text" 
        :value="modelValue" 
        @input="handleInput"
        class="px-5 py-3 w-full border border-gray-300 rounded-md"
        >
        <ul 
        v-show="searchResults.length && isOpen"
        class="mt-1 w-full max-h-60 border border-grey-300 rounded-md bg-white absolute overflow-y-auto"
        >
            <li 
            v-for="results in searchResults" 
            :key="results.name" 
            @click="setSelected(results.name)"
            class="px-4 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover: bg-gray-100 transition-colors"
            >{{ results.name }}
        </li>
        </ul>
    </div>
</template>
<script setup>
import { computed,ref } from "vue"

const props = defineProps({
    source: {
        type: Array,
        required: true,
        default: () => []
    },
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const search = ref('')
const isOpen = ref(false)

const searchResults = computed(() => {
    if(search.value === ''){
        return []
    }
    return props.source.filter(item => {
        if(item.name.toLowercase().includes(search.value.toLowerCase())){
            return item
        }
    })
})

const setSelected = item => {
    search.value = item
    isOpen.value = false
    emit('update:modelValue',search.value)
}

const handleInput = event => {
    search.value = event.target.value
    isOpen.value = true
    emit('update:modelValue',search.value)
}
</script>
