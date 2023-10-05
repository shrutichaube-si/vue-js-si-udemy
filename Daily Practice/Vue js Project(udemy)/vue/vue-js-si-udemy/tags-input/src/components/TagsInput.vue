<template>
  <!-- <div> {{tags }}</div> -->
  <!-- <div> {{ tags.length }}</div> -->
  <div> selected tags :{{  selectedTags }}
  
  <div class= "tags-input-wrapper">
    <span class="tag-item" v-for="(tag, index) in tags" :key="index">
      <a @click.prevent="removeTag(index)" href="#">&times;</a>
      {{ index + " :" + tag }}
    </span>
    <hr/>
    {{ newTag }}
    <div>
      <input class=" tag-input"
       type="text"
        v-model.trim="newTag"
       
        v-on:keydown.enter="addNewTag"
       v-on:keydown.tab.prevent="addNewTag"
      
      
       v-bind:class=" tags.includes(newTag) ? 'tag-exists' : '' "
      
        />
      <!-- or in above , writing v-bind , we can only use :value , it also gives op-->
      <!-- @input ="newTag = $event.target.value" ,on line 16 , insted od this use two way data binding -->
       <!-- :value="newTag"  on line 13 , this is two way data binding  -->

       <!-- v-on:keydown.enter="tags.push($event.target.value)"
       v-on:keydown.tab.prevent="tags.push($event.target.value)" Use only when atrribute binding -->

      
      </div>
  </div>
  </div>
</template>

<script>
export default {
  //     data() {
  //         return {
  //             tags: ["vue", " react", "angular"]
  //         }
  // }
  // data: () => ({
  //   tags: ["vue", "react", "angular"],
  //   newTag: "Ganpati Bappa Morya!!",
  // }), for normal functions .. hardcoded value

  data (){
    return {
      tags:this.selectedTags,
      newTag : "",
    }
  },
  props: {
    selectedTags: {
      type: Array,
      required : true,
      default: () => [],
    }
  },

  
  // watch: {
  //   newTag(newVal) {
  //     if(newVal.indexof(",") > -1) {
  //       this.newTag=this.newTag.slice(0, -1)
  //       this.addNewTag();
  //     }
  //   },

  // },
  computed: {
    isTagExists () {
      return this.tags.includes(this.newTag)
    }
  },
  //emits:["change"],

methods: {
    addNewTag () {
        if (this.newTag && !this.isTagExists) { // here we are adding a computed property
        this.tags.push(this.newTag)
        this.newTag =""
       // this.$emit('change',this.tags);
        
    }
},

removeTag(index) {
  this.tags.splice(index, 1);
  //this.$emit('change',this.tags);
},
removeLastTag () {
  if (this.newTag.length === 0) {
    this.removeTag(this.tag.length -1)
  }
  
}

}
};
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
