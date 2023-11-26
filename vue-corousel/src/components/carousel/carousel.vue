<template>
    <div class="carousel">
  <div class="carousel-inner">
   <caraouselItem v-for="(slide,index) in slides" :slide="slide" :key="index" :current-slide="currentSlide" :index="index" :direction="direction" @mouseenter="stopSlideTimer" @mouseout="startSlideTimer"></caraouselItem>
   <carouselindicators :count="slides.length" :active="currentSlide" @switch="switchSlide($event)"></carouselindicators>
   <carouselControls @prev="prev" @next="next"></carouselControls>
  </div>
 </div>
  
</template>
<script>
import caraouselItem from './caraouselItem.vue'; 
import carouselControls from './carouselControls.vue';
import Carouselindicators from './carouselindicators.vue';
import carouselindicators from './carouselindicators.vue'
export default{
    props:["slides"],
     components:{caraouselItem,carouselControls, Carouselindicators},
     data:()=>({
        currentSlide:0,
        slideInterval:null,
        direction:'right'
     }),
     mounted(){
    //     this.slideInterval = setInterval(()=>{
    //     const index = this.currentSlide < this.slides.length-1 ? this.currentSlide + 1 : 0;
    //     this.setCurrentSlide(index);
    //     this.next();
    //     },4000)
    this.startSlideTimer();
     },
     beforeUnmount(){
        // clearInterval(this.slideInterval)
        this.stopSlideTimer();
     },
     methods:{
        switchSlide(index){
          const step = index - this.currentSlide;
          if(step > 0){
            this.next(step);
          }else{
            this.prev(step);
          }
        },
        startSlideTimer(){
            this.stopSlideTimer();
            this.slideInterval = setInterval(()=>{
    //     const index = this.currentSlide < this.slides.length-1 ? this.currentSlide + 1 : 0;
    //     this.setCurrentSlide(index);
           this._next();
       
         },2000)
        },
        stopSlideTimer(){
            clearInterval(this.slideInterval);
        },
        setCurrentSlide(index){
            this.currentSlide = index;
        },
        prev(step = -1){
            const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
            this.setCurrentSlide(index);
            this.direction = "Left";
            this.startSlideTimer();
        },
        _next(step = 1){
            const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0;
            this.setCurrentSlide(index);
            this.direction = "right";
        },
        next(step = 1){
            this._next(step);
            // const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
            // this.setCurrentSlide(index);
            // this.direction = "right";
            this.startSlideTimer();
        }
     }
};
</script>
<style scoped>
.carousel{
    display: flex;
    justify-content: center;
}
.carousel-inner{
    position: relative;
    width: 900px;
    height: 400px;
    overflow: hidden;
}
</style>