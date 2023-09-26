<template>

    <!-- <input type="text" value ="shruti"/> -->

    <!-- <input type="text" :value="newTags"> -->
    <!-- <div> {{ tags }}</div> 
    <div>{{ tags.length }}</div>    
    <div>{{ 2+3 }}</div> 
    <div>{{ tags[0].toUpperCase() }}</div> -->

    <!-- Directives -->
     <!-- <div v-for="(tag,index) in tags">{{ index+":"+tag }}</div> -->
     <div>{{ tags }}</div>
     <!-- <button  v-on:click="tags.push(newTags)">ok</button> -->
    <input type="text" v-bind="newTags" v-on:keydown.prevent="tags.push($event.target.value)" />
<input type ="text"/>

    <!-- <button v-on:click="tags.push(newTags)">ok</button> -->


    
    <!-- <input type="text"/>
    <button v-on:click="tags.push(newTags)">ok</button> -->
    <!-- <button v-on:click="tags.push(newTags)">OK</button> -->
<!-- <input type="text" v-model="newTags" 
@:keydown.enter="tags.push($event.target.value)"/> -->
    
    <!-- <div v-text="tags.length()"></div> -->
    <!-- <div v-if="!tags.length">You dont have any tags. Enter the input</div> -->
    <!-- <div v-for="(tag,index) in tags">{{index+":"+ tag }}</div> -->
   
</template>
<script>
export default{
   data:()=>({
     tags:["vue","react","angular"],
     newTags:"Shruti",
     
   }),
}
</script>
<style>

</style>
