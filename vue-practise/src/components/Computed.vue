<template>
    <h1>FullName: {{ firstName }} {{ lastName }}</h1>
    <h2>FullName: {{ fullName }}</h2>

    <button @click="changeFullName">Change FullName</button>

    <!-- <h2>
        Total - {{ items.reduce((total,curr) => (total = total +curr.price),0)}}
    </h2> -->
    <button @click="items.push({id:4,title:'keyboard',price:50})">Add Item</button>
    <h2>Computed Total: {{ total }}</h2>
    <h2>Methods Total: {{ getTotal() }}</h2>
    <input type="text" v-model="Country"/>
    <template v-for="item in items" :key="item.id">
      <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
    </template>
    <h2 v-for="item in expensiveItems" :key="item.id">{{ item.title }} {{ item.price }}</h2>
</template>
<script>
export default {
    name:'App',
    data(){
        return{
           firstName: 'Bruce',
           lastName: 'Wayne',
           items:[
            {
                id:1,
                title:'TV',
                price:100,
            },
            {
                id:2,
                title:'phone',
                price:200
            },
            {
                id:3,
                title:'Laptop',
                price:300
            }
           ],
           Country:''
        }
    },
    methods:{
        getTotal(){
            console.log('getTotal Method')
            return this.items.reduce((total,curr) => (total = total+curr.price),0)
        },
        changeFullName(){
            this.fullName = 'Clark Kent';
        }
    },
    computed:{
        // fullName(){
        //     return `${this.firstName} ${this.lastName}`
        // },
        fullName:{
           get() {
            return `${this.firstName} ${this.lastName}`
           },
           set(value) {
            const names = value.split(' ');
            this.firstName = names[0];
            this.lastName = names[1]
           }
        },
        total(){
            console.log('Total computed property')
            return this.items.reduce((total,curr) => (total = total+curr.price),0)
        },
        expensiveItems(){
            return this.items.filter(item => item.price > 100)
        }
    }
}
</script>
<!-- Computed Properties -->
<!-- 1. Properties can be bound to the template like data properties -->
<!-- 2. They are used for composing new data from existing sources -->
<!-- 3. They are highly performant as they are cached calculations which only update when their dependencies change -->
<!-- Computed is the property which is an object..this object will have a key which is a computed property-->
<!-- computed properties are automatically recalculated if their dependencies change -->
<!-- whenever the dependencies change the property is computed and recalculated -->
<!-- Difference between computed and methods : Computed Properties are cached..this means that if something independent of the computed properties changes on the page 
and the ui is rerendered the cached result will be returned and the computed property will not be recalculated..this would improve the app performance by avoiding a potentially expensive operation -->
<!-- Main Difference -->
<!-- If there is a change in the ui which is independent of the computed property vue will reuse the already computed value instead of recalculating
    A method however will always be called when there is a change in the ui  if you have a really expensive peice of logic a computed property is the best approach -->

    <!-- if we have to conditionally render a list of items in the ui..computed properties is the way to go -->

    <!-- the get function will be called whenever we want to read the computed property value -->
    <!-- the set function on the other hand is the fucntion which will be called when you assign a new value to the computed property..so the function receives its value as its argument-->
    <!-- Use get and set when you come across the scenario where you want to both read and write values-->
    <!-- use computed properties when: 
    1. You need to compose new data from existing data sources
    2. you need to reduce the length of a variable -->