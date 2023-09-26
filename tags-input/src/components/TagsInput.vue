<template>
  <!-- <div> {{tags }}</div> -->
  <!-- <div> {{ tags.length }}</div> -->
  <div>
    <div v-for="(tag, index) in tags" :key="index">
      {{ index + " :" + tag }}
    </div>
    <hr/>
    {{ newTag }}
    <div>
      <input type="text"
        v-model.trim="newTag"
       
        v-on:keydown.enter="addNewTag"
       v-on:keydown.tab.prevent="addNewTag"
       
      
        />
      <!-- or in above , writing v-bind , we can only use :value , it also gives op-->
      <!-- @input ="newTag = $event.target.value" ,on line 16 , insted od this use two way data binding -->
       <!-- :value="newTag"  on line 13 , this is two way data binding  -->

       <!-- v-on:keydown.enter="tags.push($event.target.value)"
       v-on:keydown.tab.prevent="tags.push($event.target.value)" Use only when atrribute binding -->

      
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
  data: () => ({
    tags: ["vue", "react", "angular"],
    newTag: "Ganpati Bappa Morya!!",
  }),
methods: {
    addNewTag () {
        if (this.newTag) {
        this.tags.push(this.newTag)
        
    }
}

}
};
</script>
