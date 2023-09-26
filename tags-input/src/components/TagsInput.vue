<template>
    <div>
        <!-- 
<div> 
    selectedTags:{{ selectedTags }}
</div>
   -->
    <div class="tags-input-wrapper">
        <span class="tag-item" v-for="(tag,index) in tags" :key="index">
            {{ index +" : " + tag }}
        <a class="remove-tag" @click.prevent="removeTag (index)" href="#">&times;</a>
        </span>
        <hr/>
        {{ newtags }}
   <!-- <div v-text="tags"></div> -->
    <div v-if="!tags.length">
    Please enter something in the array!
    </div>
    <!--
    <div>{{ tags[0].toLocaleUpperCase() }}</div>
    -->
   <!-- <button v-on:click="">OK</button> -->
    <input class="tag-input" type = "text" v-model.trim="newtags"
    @keydown.enter="addNewtags"
    @keydown.delete="removeLastTag"
    @keydown.tab.prevent="addNewtags"
    :class="{'tag-exists':isTagExists}"
    
    />
    </div>
    
</div>
</template>

<script>
export default {
  data () {
    return{
      tags: [...this.selectedTags],
      newtags: "preact",
  }
  },

  props: {
    selectedTags:{
type: Array,
default: () => []

    }
  },

watch:{
newtags(newVal) {
    if(newVal.indexOf(",") > -1){
       this.newtags= this.newtags.slice(0,-1)
        this.addNewtags();
    }
}
},
  computed:{
isTagExists(){
    return this.tags.includes(this.newtags)
}
  },
  emits:["change"],
  methods: {
addNewtags() {
    if(this.newtags && !this.isTagExists ){
        this.tags.push(this.newtags)
        this.newtags=""
        this.$emit('change',this.tags);
    }

},
removeTag (index) {
this.tags.splice(index,1);
this.$emit('change',this.tags);
  },
  removeLastTag() {
    if(this.newtags.length===0){
        this.removeTag(this.tags.length - 1)
    }
  }
  }

}

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