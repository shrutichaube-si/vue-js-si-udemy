<template>
<div>
<div>
    <!-- selected tags : {{ selectedTags }} -->
</div>
<div class="tags-input-wrapper">
<!--<div>{{ tags }}</div>
<div>{{ 2 + 2 }}</div>
<div v-text ="tags.length"></div>
<div v-if="!tags.length">You have no tags.Enter it in  the iput</div>-->

<!--<div v-for="tag in tags">{{tags }}</div>-->
<span class="tag-item" v-for="(tag, index) in tags" :key="index" >
    
    {{ tag }}

<a class  ="remove-tag" @click.prevent="removeTag(index)" href ="#">&times;</a>

</span>


<hr/>
<!-- {{ newtag }}  -->
<input 
class ="tag-input"
type="text" 
 v-model.trim="newtag"
 @keydown.enter="addNewTag" 
 @keydown.tab.prevent="addNewTag"  
 :class = "{'tag-exists': isTagExists}"
 />
<!-- <button v-on:click="tags.push(newtag)"></button> -->

<!-- 
    <div> @keydown.enter="tags.push(newtag)" 
 @:keydown.tab.prevent="tags.push(newtag)
 
 <@keydown.enter="tags.push($event.target.value)" 
 @:keydown.tab.prevent="tags.push($event.target.value)
  @keydown.delete="removeLastTag"
  :style="tags.includes(newtag) ? {color:'red', 'text-decoration': 'line-through'} : '' "
 :class="tags.includes(newtag) ? 'tag-exists' : '' "
 "</div>-->
</div> 
</div>
</template>

<script>
export default {
 
    //we can also write it in the form of arrow function:

    // data: () => ({
           
    //      tags:  ["vue","react","angular"],
    
    //      newtag: ""
    // }),

    data (){

        return{
            tags: this.selectedTags,
            
            newTag: "",
 
        }
    },
    // props:["selectedTags"],

    //props defined using objects:

    props :{

        selectedTags :{

            type     : Array,
     
            default :() => []
        }
    },

    watch:{

        newtag(newval){

            if(newval.indexOf(",")> -1){

                this.newtag = this.newtag.slice(0,-1);
                this.addNewTag();
            }
        }
    },
    computed:{

        isTagExists(){

            return this.tags.includes(this.newtag)
        }
    },
    methods:
    {
        addNewTag(){
           
            if(this.newtag && !this.isTagExists){
            this.tags.push(this.newtag)
            this.newtag=""
            }
        },
        removeTag(index){
            this.tags.splice(index,1)
        },
        removeLastTag() {
            if(this.newtag.length === 0 && this.tags.length > 0){
            this.removeTag(this.tags.length - 1)
            }
        }
    }
}
</script>
<style scoped>
/* .tag-exists{

    color:red;
    text-decoration: line-through
} */
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