<template>
  <div>
 
 <carousel  :slides = "slides" controls></carousel>
</div>
</template>

<script>
import Carousel from './components/carousel/Carousel.vue';
// import CarouseltemVue from './components/caraousel/Carouseltem.vue';
export default
  {

  components:{
    
    Carousel
  },
  data:()=>({
       
    slides:[
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
      "https://picsum.photos/id/1037/900/400",
    ]
    })
  }

</script>
<style>
</style>
