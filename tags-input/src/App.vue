<script>
import TagsInput from './components/TagsInput.vue';
export default{
  data: () =>({
    jsFrameworks: ["react.js","angular","python"]
  }),
  mounted () {
    setTimeout(() => {
this.jsFrameworks.push("svelte.js")
    },3000)
  }
}
</script>

<template>
  <div>
    <h1> Hello world </h1>

<tags-input :selected-tags="jsFrameworks"/>

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
