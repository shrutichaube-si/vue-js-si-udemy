<template>
  <div class="carousel">
  <div class="carousel-inner">
    <carousel-indicators  
     v-if="indicators"
     :count ="slides.length"
     :active="currentSlide"
     @switch ="switchSlide($event)"
     ></carousel-indicators>
   <carousel-item  
   v-for = "(slide,index) in slides " 
   :slide ="slide" 
   :key="`slide-${index}`"
   :current-slide = "currentSlide"
   :index ="index"
   :direction="direction"
   @mouseenter="stopSlideTimer"
   @mouseout="startSlideTimer"
  
   ></carousel-item>
   <caraousel-controls 
   v-if="controls"
   @prev="prev"
   @next="next" ></caraousel-controls> 
  
  </div>
 </div>
</template>
<script>
import CarouselItem from "./Carouseltem.vue"
import CaraouselControls from "./CaraouselControls.vue"
import CarouselIndicators from './CarouselIndicators.vue';

export default {
    // props: ["slides"], 

    props:{
       slides:{
          type:Array,
          required: true
       },
       controls:{
           type:Boolean,
           default:false
       },
       indicators:{
           type:Boolean,
           default:false
       },
       interval:{
        type:Number,
        default: 5000
       }

    },
    components :{
        CarouselItem,
        CaraouselControls,
        CarouselIndicators

    },
    data: () =>({
       
        currentSlide: 0,
        slideInterval : null,
        direction:'right'
    }),

    mounted () {
    //   /* if (this.slides && this.slides.length > 0)*/{
    //    this.slideInterval = setInterval(() =>
    //    {

    //     // const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
    //     // this.setCurrentSlide(index);
    //     this.next();
      
    //    },3000);
    // }
    this.startSlideTimer()
    },

    beforeUnmount(){
    
        this.startSlideTimer()
    },
    methods:
    {

      switchSlide(index){
         const step = index - this.currentSlide;
         if (step  > 0)
         {
          this.next(step);
         }
         else{
          this.prev(next);
         }
      },
     
     stopSlideTimer(){
        clearInterval(this.slideInterval);
      },

     startSlideTimer(){
      this.stopSlideTimer()
      this.slideInterval = setInterval(() =>
       {
        this.next();
       },this.interval);
        
      },
     setCurrentSlide(index){
        this.currentSlide =  index;
     },
     prev(step = -1){
        const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length -1; 
        this.setCurrentSlide(index);
        this.direction ="left";
        this.startSlideTimer();
     },
     _next(step = 1){
       
       if (this.slides && this.slides.length > 0){
        const index = this.currentSlide < this.slides.length - 1? this.currentSlide + step : 0;
         this.setCurrentSlide(index);
         this.direction ="right"
       }
     },
     next(step = 1){
        // const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
        //  this.setCurrentSlide(index);
        //  this.direction ="right"
         this._next(step);
         this.startSlideTimer();

     }
    }
};
</script>
<style scoped >
.carousel{

  display: flex;
  justify-content: center;
  /* align-items: center;
  height: 100vh; */
}
.carousel-inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
</style>