<template>
<h2>{{ age }}</h2>

<name-list v-for="(name,key) in names"  :name="name" :key="key" ></name-list>
</template>
<script>
import NameList from './NameList.vue';
export default{
    components:{NameList},
   props: ['names']
}
</script>

