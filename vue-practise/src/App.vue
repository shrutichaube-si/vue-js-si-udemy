<template>
  <!-- <bindingText/>
  <conditionalRendering/>
  <listRendering/>
  <Methods/>
  <eventHandling/>
  <formHandling/>
  <Computed/> -->
  <Watchers/>
  
</template>

<script>
import bindingText from './components/bindingText.vue';
import conditionalRendering from './components/conditionalRendering.vue';
import listRendering from './components/listRendering.vue';
import Methods from './components/Methods.vue';
import eventHandling from './components/eventHandling.vue';
import formHandling from './components/formHandling.vue';
import Computed from './components/Computed.vue';
import Watchers from './components/Watchers.vue';
export default{
  components: { bindingText,conditionalRendering,listRendering,Methods,eventHandling,formHandling,Computed,Watchers },
  name: "App",
  data(){
    return{
    }
  }
}
</script>

<style>

</style>
<!-- Bonus Directives -->
<!-- 1. V-once: this renders the corrsponding HTML element only once. On subsequent re-renders,the element is treated as static content and skipped -->
<!-- 2. V-pre: Skips compilation for the corresponding element -->