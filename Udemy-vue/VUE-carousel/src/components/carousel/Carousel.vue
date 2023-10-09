<template>
    <div class="carousel">
        <div class="carousel-inner"></div>
        <CarouselItem v-for="(slide,index) in slides" 
        :slide="slide"
        :key="`slide-${index}`"
        :current-slide="currentSlide"
        :index="index"
         ></CarouselItem>
    </div>
    
</template>
<script>
import CarouselItem from './CarouselItem.vue';
export default{
    props:["slides"],
    components:{CarouselItem },
    data:()=>({
        currentSlide:0
    })
    
}
</script>
<style scoped>
.carousel{
    display: flex;
    justify-content: center;

}.carousel-inner{
    position: relative;
    width:900px;
    height:400px;
    overflow: hidden;
}
</style>
