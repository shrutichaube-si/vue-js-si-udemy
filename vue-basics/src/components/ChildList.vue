<!-- <template>
    <h1>Child Component</h1>
    <button @click="updateTitle">Click to update parent</button>
    <h2>{{ tags }}</h2>
</template>
<script>
export default{
   data:()=>({
     tags:['shruti'],
   }),
   methods:{
    updateTitle(){
       // console.log("button clicked");
       this.$emit('changeTitle',"title is changed")
    }
   }
}
</script> -->
