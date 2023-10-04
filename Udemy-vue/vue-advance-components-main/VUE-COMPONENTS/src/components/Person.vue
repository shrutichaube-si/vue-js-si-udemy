<template>
    <h1>This is alert component</h1>
    <p><strong>Full Name</strong>:{{ fullName }}</p>
</template>
<script>
export default{
    data:()=>({
        props:['firstname','lastname','age'],
    }),
    computed:{
        fullName(){
            return this.firstname+" "+this.lastname
        }
    }

}
</script>
<style scoped>

</style>