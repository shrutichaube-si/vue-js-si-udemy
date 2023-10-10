<template>
    <div class="carousel">
    <div class="carousel-inner" :style="dimension">
        <carousel-indicators
         v-if="indicators"
         :count="slides.length" 
         :active="currentSlide"
         @switch="switchSlide($event)"
         ></carousel-indicators>
        <carousel-item 
        v-for="(slide,index) in slides" 
        :slide="slide" 
        :key="`slides-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
        ></carousel-item>
        <carousel-control v-if="controls" @prev="prev" @next="next"> </carousel-control>

      
    </div>
  </div>

</template>

<script>
import carouselItem from './carouselItem.vue';
import CarouselControl from '../CarouselControl.vue';
import CarouselIndicators from './CarouselIndicators.vue';

export default {
    // props:["slides"],
    props: {
        slides:{
            type: Array,
            required : true
        },
        controls: {
            type: Boolean,
            default: false
        },
        indicators: {
            type: Boolean,
            default: false
        },
        interval :{
            type: Number ,
            default: 3000
        },
        width: {
            type: Number,
            default:600
        },
        height: {
            type: Number,
            default:1000
        },
    },
    computed: {
        dimension (){
            return {
                width: this.width + 'px',
                height: this.height + 'px',
            }
        }
    },
  components: { 'carousel-item': carouselItem, CarouselControl, CarouselIndicators },
  data: () => ({
    currentSlide : 0,
    slideInterval: null,
    direction: 'right'

  }),
  mounted () {
    this.startSlideTimer();
    
  },
  beforeUnmount () {
    this.stopSlideTimer();
    
  },
  methods : {

    switchSlide (index) {
        const step = index - this.currentSlide;
        if (step > 0) {
            this.next();
        }
        else {
            this.prev(step);
        }

    },
    stopSlideTimer() {
        clearInterval (this.slideInterval );
    },
    startSlideTimer(){
        this.stopSlideTimer();
        this.slideInterval =setInterval(() =>{
       this.next();
       this._next();

    }, this.interval);
    },
    setCurrentSlide(index) {
        this.currentSlide = index;
    },
    prev ( step= -1) {
    const index = this.currentSlide > 0 ? this.currentSlide + step : this.currentSlide -1;
         this.setCurrentSlide(index);
         this.direction= "left";
         this.startSlideTimer();

  },
  _next( step = 1){
    const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + step :0;
         this.setCurrentSlide(index);
         this.direction="right";
  },
  next( step) {
        this._next( step);
         this.startSlideTimer();
  }
 },
  
}
</script>

<style scoped>
.carousel{
    display: flex;
    justify-content: center;

}
.carousel-inner{
    position: relative;
    overflow: hidden;
}

</style>