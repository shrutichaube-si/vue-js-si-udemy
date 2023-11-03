<template>
    <h2>Volume Tracker (0-20)</h2>
    <h3>Current Volume - {{ volume }}</h3>
    <div>
        <button @click="volume +=2">Increase</button>
        <button @click="volume -=2">Decrease</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            volume:0
        }
    },
    watch:{
        volume(newValue,oldValue){
           if(newValue > oldValue && newValue === 16){
            alert('listening to a high volume for a long time may damage you ears')
           }
        }
    }
}
</script>
<!-- Watchers allows us to watch any data or computed property and execute some code in response to changes in the value -->
<!-- Watchers simply provide a more generic way to react to data changes -->
<!-- Its not recommended to mimic a computed property as a watcher -->
<!-- you have to check if a property has changed to a favourable value to know if you are ready to perform an action -->
<!-- a practical use of watch is when you have to call an API response to cheange in application data -->
<!-- if you have to apply transitions -->