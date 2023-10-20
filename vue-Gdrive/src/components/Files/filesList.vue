<template>
      <div class="row" @click="clearSelected">
<fileItem v-for="file in files" :file="file" :key="file.id" @click.exact.stop="selectOne(file)"
@click.meta.exact.stop="selectMultiple(file)"
:class="{'selected-file': isSelected(file)}"
/>
</div>
</template>

<script>
import fileItem from './fileItem.vue';
import { reactive } from 'vue';
export default{
    components:{fileItem},
    props:{
        files:{
            type:Array,
            required:true
        },
        selected:{
          type: Array,
          default: () => []
        }
    },
    setup(props,{ emit }){
        const selectedItems =reactive( new Set()) //JS set,which allows us to store uique values of any types,whether primitive values or object references
     const selectOne = (item) => {
        selectedItems.clear();
        selectedItems.add(item);
        emit('select-change',selectedItems);
     }  
      const selectMultiple = (item) => {
        if (selectedItems.has(item)){
           selectedItems.delete(item); 
        } else {
           selectedItems.add(item); 
        }
        emit('select-change',selectedItems);
      }
      const isSelected = (item) => selectedItems.has(item) || props.selected.length && props.selected[0].id === item.id;

      const clearSelected = () => {
        selectedItems.clear(); //for clearing items\
        // console.log("clearSelected");
        emit(' select-change ',selectedItems)
      }
      return{selectOne,selectMultiple,isSelected, clearSelected};
    },
    emits:['select-change']
}
</script>
