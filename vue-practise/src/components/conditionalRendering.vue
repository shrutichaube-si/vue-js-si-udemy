<template>
   <h2 v-if="num === 0">The number is Zero</h2> 
   <h2 v-else-if="num < 0">The number is negative</h2>
   <h2 v-else-if="num > 0">The number is positive</h2>
   <h2 v-else>Not a number</h2>
<template v-if="display"> 
    <h2>Dhruv</h2>
   <h2>Solanki</h2>
   <h2>Buisnessman</h2>
</template>

<h2 v-show="showElement">Using V-Show</h2>
<h2 v-if="showElement">Using V-if</h2>
</template>
<script>
export default {
    data(){
        return{
           num: 5,
           display:true,
           showElement:false
        }
    }
}
</script>
<style scoped>

</style>
<!-- The difference between v-if and v-show -->
<!-- v-if will mount the element onto the dom if the condition evaluates to true & remove the element from the dom if the condition
evaluates to false. An element with v-show directive,however will always be rendered and remain in the dom,only the display css property
is toggled to show or hide the element. So if you have an element that is going to be toggled back and forth in the ui using v-show is the right 
approach beacause mounting and unmounting elements onto the dom can be expensive -->