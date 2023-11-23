<template>
    <div class="carousel">
        <div class="carousel-inner"></div>
        <CarouselItem v-for="(slide,index) in slides" 
        :slide="slide"
        :key="`slide-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
         ></CarouselItem>
         <carousel-controls @prev="prev" @next="next"></carousel-controls>
         <carousel-indicators :count="slides.length" :active="currentSlide" @switch="switchSlide($event)"></carousel-indicators>
    </div>
    
</template>
<script>
import CarouselControls from './CarouselControls.vue';
import CarouselIndicators from './CarouselIndicators.vue';
import CarouselItem from './CarouselItem.vue';

export default{
    props:["slides"],
    components:{CarouselItem, CarouselControls, CarouselIndicators,},
    data:()=>({
        currentSlide:0,
        slideInterval: null,
        direction:'right',
    }),
    mounted(){
       this.startSlideTimer();
    },
    beforeUnmount(){
        this.stopSlideTimer();
        
    },
    methods:{
        switchSlide(index){
         const step=  index=this.currentSlide;
         if(step>0){
            this.next(step);
         }else{
            this.prev(step);
         }
        },
        stopSlideTimer(){
            clearInterval(this.slideInterval)
        },
        startSlideTimer(){
            this.stopSlideTimer();
           this.slideInterval=setInterval(()=>{
            this._next();
           },3000);
        },
       

        setCurrentSlide(index){
            this.currentSlide=index;
        },
        prev(step=-1){
        const index = this.currentSlide> 0?this.currentSlide+step : this.slides.length-1;
        this.setCurrentSlide(index);
        this.direction="left";
        this.startSlideTimer();
        },
        _next(step=1){
            const index = 
          this.currentSlide < this.slides.length -1 ? this.currentSlide+step : 0;
          this.setCurrentSlide(index);
          this.direction="right";
        },
        next(step){
          this._next(step);
          this.startSlideTimer();
        },
    }
    
}
</script>
<style scoped>
.carousel{
    display: flex;
    justify-content: center;

}.carousel-inner{
    position: relative;
    width:1000px;
    height:1000px;
    overflow: hidden;
}
</style>
