<template>
  <carousel :slides="slides" controls indicators :interval="3000" ></carousel>
  
</template>


<script>
import carousel from './components/carousel/carousel.vue';

export default {
  components: { carousel },
  data: () => ({
    slides:[
    "https://picsum.photos/536/354",
    "https://picsum.photos/id/6/367/267",
    "https://picsum.photos/id/26/367/267",
    "https://picsum.photos/id/4/367/267",
    ]
  })
  
};
</script>