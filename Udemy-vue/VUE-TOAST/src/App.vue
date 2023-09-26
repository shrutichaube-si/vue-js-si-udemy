<template>
  <button @click="showToast = true">Show Toast</button>
  <Toast message="message has been sent" title="yes" :show="showToast" @hide="showToast=false" type="warning"></Toast>
</template>

<script>
import Toast from "./components/toast/Toast.vue";
export default{
 components:{Toast},
data:()=>({
 showToast:false
})
}
</script>
<style>
#app{
  font-family: Avenir, Arial, Helvetica, sans-serif;
}

</style>
