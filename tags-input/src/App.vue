<script>
import TagsInput from './components/TagsInput.vue';
export default{
  data: () =>({
    jsFrameworks: ["react.js","angular","python"],
    backendFrameworks :[]
  }),

  mounted () {
    setTimeout(() => {
this.jsFrameworks.push("svelte.js")
    },3000)
  },
  methods:{
    handleChange (tags){
      this.jsFrameworks = [...tags]
    }
  }
}
</script>

<template>
  <div>
    <h1> Your Favourite Frameworks </h1>
    <div>{{ jsFrameworks }}</div>
<tags-input :selected-tags="jsFrameworks" @change="handleChange"/>
<div>{{ backendFrameworks }}</div>
<tags-input :selected-tags="backendFrameworks" @change="backendFrameworks = [...$event]"/>


</div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
h1 {
  color : blue
}
</style>
