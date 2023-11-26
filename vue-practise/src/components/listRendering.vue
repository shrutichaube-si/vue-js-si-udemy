<template>
    <h2 v-for="(name, index) in names" :key="name">{{ index}} {{ name }}</h2>
    <h2 v-for="name in Fullnames" :key="name.first">{{ name.first }} {{ name.last }}</h2>
    <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2> 
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
    </div>
    <h2 v-for="(value,key,index) in myInfo" :key="value">{{index }} {{ key }} {{ value }}</h2>

<template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <hr/>
</template>

<template v-for="d in DC" :key="d">
<h2 v-if="d === 'Bruce'">{{ d }}</h2>
</template>
</template>
<script>
export default {
    data(){
        return{
          names: ['Bruce','Clark','Diana'],
          Fullnames:[
            {first: 'Bruce',last: 'Wayne'},
            {first: 'Clark',last: 'Kent'},
            {first: 'Princess',last: 'Diana'}
          ],
          actors:[
            {
                name:'Christian Bale',
                movies:['Batman','The Prestige']
            },
            {
                name:'Di-Caprio',
                movies:['Shutter Island','Titanic']
            }
          ],
          myInfo:{
            name:'Dhruv',
            surname:'Solanki'
          },
          DC:['Bruce','Clark','Diana']
        }
    }
}
</script>
<style scoped>

</style>
<!-- In list rendering we have -->
<!-- An Array of Strings, Array of Objects, Array of Arrays, Block of HTML elements,Object key value Pairs -->
<!-- Key is a special attribute which is primarily used as a hint for Vue's virtual DOM algorithm to identify nodes when diffing the new DOM tree with the old DOM tree -->
<!-- the key attribute helps Vue identify which items in a list have changed,are added or removed and plays a crucial role in handling UI updates correct and efficiently -->
<!-- We should not mix v-for with v-if..the reason for that is vue evaluates the v-if expression before the v-for directive-->