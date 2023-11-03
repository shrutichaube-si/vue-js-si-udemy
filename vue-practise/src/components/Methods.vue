<template>
    <h2>{{ 2+3+5 }}</h2>
    <h2>Add method - {{ add(2,3,5) }}</h2>
    <h2>Add method - {{ add(10,15,20) }}</h2>
    <h2>Multiply Method: {{ multiply(10) }}</h2>
    <h2>Multiply Method: {{ multiply(baseValue) }}</h2>
</template>
<script>
export default {
    data(){
        return{
            baseMultiplier: 5,
            baseValue:2
        }
    },
    methods:{
       add(a,b,c){
        return a+b+c
       },
       multiply(num){
         return num * this.baseMultiplier;
       }
    }
}
</script>
<style scoped>

</style>
<!-- functions are good beacause they prevent code duplication and improve code maintainence,in vue we create such functions using the methods property -->
<!-- methods is a simple object within the object we can define one or mopre functions which we can use -->
<!-- IMP to not use arrow functions for methods..that is beacause vue binds the data object to this keyword within methods..if we use an arrow function 
that binding is lost -->
<!-- So to access a data property within a method use 'this' keyword but if you have to pass in a data property as an argument to the method you dont have to use this keyword -->