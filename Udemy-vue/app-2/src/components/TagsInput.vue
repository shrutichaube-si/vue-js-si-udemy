<template>
   
  
 
     <!--Basics-->
     <!-- <div>{{ tags }}</div>
     <div>{{ tags.length }}</div>
     <div>{{ tags[0].toUpperCase() }}</div> -->

      <!-- Directives -->
     <!-- <div v-text="tags.length"></div>
     <div v-for="tag in tags">{{ tag }}</div> -->
     <!-- <div v-for="(tag,index) in tags">{{ index+":"+tag }}</div> -->
     <!-- <input type="text" v-bind:value="newTags"/> -->
     <!-- <input type="text" :value="newTags"/> -->

     <!-- Events
      <input type="text" :value="newTags"/>
      <div v-for="(tag,index) in tags">{{ index+":"+tag }}</div>
      <button v-on:click="tags.push(newTags)">ok</button>
      <input type="text" :value="newTags" v-on:keydown.enter="tags.push(newTags)"/>
      <input type="text" :value="newTags" 
      v-on:keydown.enter="tags.push($event.target.value)"
      v-on:keydown.tab="tags.push($event.target.value)"/> -->
  
       
       <!-- Two way data binding
       <input type="text" v-model="newTags"
       @keydown.enter="tags.push($event.target.value)"
       @keydown.tab.prevent="tags.push($event.target.value)"
       /> -->
     
       <!-- methods
        Add Tag -->
       

       <!-- <input type="text" v-model="newTags"
       @keydown.enter="addNewTag"/>    -->
    
       <!-- <div v-for="(tag,index) in tags" :key="index">
        {{ tag }}
         <a @click.prevent ="removeTag(index)" href="#">&times;</a></div>
          -->
       
       

         <!-- Styling binding
         <input type="text" v-model="newTags"
         @keydown.enter="addNewTag" 
         :style="tags.includes(newTags) ? {color:'red','text-decoration':'line-through'} :''"
         />  -->

         <!--class binding-->

         <!-- <input type="text" v-model="newTags"
         @keydown.enter="addNewTag"
         :class = "tags.includes(newTags)?'tags-exits':''"/> -->

         <!-- <input type="text" v-model="newTags"
         @keydown.enter="addNewTag"
         :class="{'tags-exits':tags.includes(newTags)}"/> -->
       
       <!-- Computed properties
       <input type="text" v-model="newTags"
         @keydown.enter="addNewTag"
         :class="{'tags-exits':isTagExist}"/>  -->

         
        <!-- <div v-for="(tag,index) in tags" :key="index">{{index+":"+ tag }}</div> -->

        <div>
            selected tags:{{ selectedTags }}
        </div>

        <!-- Styling -->
        <div class="tags-input-wrapper">
        <span class="tag-item" v-for="(tag,index) in tags" :key="index">
        {{ tag }}
         <a class="remove-tag" @click.prevent ="removeTag(index)" href="#">&times;</a></span>
        
         <input 
         class="tag-input"
         type="text" 
         v-model="newTags"
         @keydown.enter="tags.push($event.target.value)"
         @keydown.tab.prevent="tags.push($event.target.value)"
         :class="{'tags-exist':isTagExist}"
         />
        </div>
</template>

<script>
export default {
    data :()=>({
       tags:["react","vue","angular"],
       newTags:"shruti"
    }),
    props:["selectedTags"],

    watch:{
        newTags(newval,oldval){
          console.log(newval,oldval)
        }
    },
    computed:{
        isTagExist(){
           return this.tags.includes(this.newTags)
        }
    },
     methods:{
       addNewTag(){
        if(this.newTags && !this.isTagExist){
            this.tags.push(this.newTags)
            this.newTags=""
        }
    },
    removeTag(index){
          this.tags.splice(index,1)
       }
     }}
    
</script>

<style scoped>
.tag-input.tag-exists {
  color: red;
  text-decoration: line-through;
}
.tags-input-wrapper {
  background: #fff;
  padding: 0.5em;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 36px;
  box-sizing: border-box;
}

.tag-item {
  color: #212529;
  background-color: #eee;
  margin-right: 0.3em;
  padding: 0.25em 0.4em;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1.25em;
  padding-left: 0.6em;
}

.tag-input {
  color: #495057;
  flex: 1;
  background: transparent;
  border: none;
}

.tag-input:focus {
  outline: none;
}
a.remove-tag {
  text-decoration: none;
}
</style>
