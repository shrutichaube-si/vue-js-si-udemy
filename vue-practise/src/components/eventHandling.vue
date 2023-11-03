<template>
    <h2>{{ name }}</h2>
    <div>
        <button @click="changeName($event),increment(1,$event)">Change Name</button>
    </div>
    <h2>{{ count }}</h2>
    <div>
        <button @click="increment(1,$event)">INCREMENT BY 1</button>
        <button @click="increment(5,$event)">INCREMENT BY 5</button>
        <button @click="decrement(1)">DECREMENT BY 1</button>
        <button @click="decrement(5)">DECREMENT BY 5</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'Dhruv',
            count: 0
        }
    },
    methods:{
        changeName(event){
            this.name = 'Batman'
            console.log('Event',event)
        },
        increment(num,event){
            this.count +=num
            console.log('Event',event)
        },
        decrement(num){
            this.count -=num
        }
    }
}
</script>
<!-- 
    <div>
        <button @click="name = 'Batman'">Change Name</button>
    </div>
    <div>
        <button @click="count ++">INCREMENT</button>
        <button @click="count --">DECREMENT</button>
    </div> This is an example of inline event handlers..the code to execute is present in the same line as the v-on directive-->
    <!--   methods:{
        increment(){
            this.count++
        },
        decrement(){
            this.count--
        }
    }  One more example of the same -->