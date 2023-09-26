<template>
<div>{{ tags }}
     </div>
     <div>{{ title }}</div>
</template>
<script>
export default{
    data:()=>({
     tags:["vue","react","angular"]
      
   }),
   name:"PersonComp",
   props:{
     title:{
          type:String,
          default:"name"
     }
   }
}
</script>
<style>
</style>
