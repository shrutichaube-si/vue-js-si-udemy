<template>
 <carousel :slides="slides"></carousel>
</template>

<script>
import carousel from './components/carousel/carousel.vue';
export default{
  components:{
     carousel
  },
  data:() => ({
    slides : [
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
      "https://picsum.photos/id/1037/900/400"
    ]
  })
};
</script>

