export default (await import('vue')).defineComponent({
props: ["slides"],
components: {
CarouselItem,
CaraouselControls
},
data: () => ({
currentSlide: 0,
slideInterval: null,
direction: 'right'
}),

mounted() {
//   /* if (this.slides && this.slides.length > 0)*/{
//    this.slideInterval = setInterval(() =>
//    {
//     // const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
//     // this.setCurrentSlide(index);
//     this.next();
//    },3000);
// }
this.startSlideTime();
},

beforeUnmount() {

clearInterval(this.slideInterval);
},
methods: {
startSlideTime() {
this.slideInterval = setInterval(() => );
//    {
//     // const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
//     // this.setCurrentSlide(index);
//     this.next();
//    },3000);
},
setCurrentSlide(index) {
this.currentSlide = index;
},
prev() {
const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
this.setCurrentSlide(index);
this.direction = "left";
},
next() {
const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
this.setCurrentSlide(index);
this.direction = "right";

}
}
});
