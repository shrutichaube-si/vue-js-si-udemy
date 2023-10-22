<template>
  <div class="root">
    <h2>Start year :{{ startYear }}</h2>
    <input type="text" v-model="endYear" placeholder="Enter end year">
    <h2>End Year:{{ endYear }}</h2>
   <div class="month">
  
    <button @click="getyears">Click here</button>

<select name="cars" id="cars">
  <option  @click="getyears" v-for="year in years" :key="year">{{ year }}</option>
  
</select>

<select name="cars" id="cars">
  <option  v-for="month in months" :key="month">{{ month }}</option>
</select> 
  </div> 
  </div>
</template>
<script>
export default{
  data:()=>({
    startYear : 2000,
    endYear: null,
    currentYear:new Date().getFullYear(),
    years:[],
    months:["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","Dec"]
    
  }),
  methods:{
   
    getyears(){
      if(this.endYear==="*"){
      for (let i = this.startYear; i <= this.currentYear; i++) {
      this.years.push(i);
  }
   }else{
  for(let i =this.startYear;i<=this.endYear;i++){
   
    this.years.push(i);
  }
}
  }
}}

</script>
<style scoped>
.root{
  text-align: center;
  background: whitesmoke;
}
</style>

<!-- <template>
  <h1>start year : {{ startyear }}</h1>
  end year : <input v-model="endYear" type="text"/>
  <hr/>
  year : <select v-model="selectedyear">
    <option v-for="ind in diff" :key="ind">{{ ind+startyear-1 }}</option>
  </select>
  <hr/>
  month : <select v-model="selectedmonth">
    <option v-for="(item,ind) in months" :key="ind" >{{ item }}</option>
  </select>
  <hr/>
  day: <select>
    <option v-for="ind in days" :key="ind">{{ ind }}</option>
  </select>
</template>
<script>
// import func from 'vue-editor-bridge'
export default{
  data:()=>({
    selectedmonth : null,
    selectedyear : null, 
    endYear : 2000, 
    startyear : 2000,
    months : ["january","february","march","april","may","june","july","august","september","october","november","december"]
  }),

  computed : {
    diff: function(){
      if(this.endYear=="*"){
        return 2023-this.startyear+1
      }
      return this.endYear-this.startyear+1
    },

    days : function(){
      console.log(this.selectedyear)
      if(this.selectedmonth==="february"){
        if(this.selectedyear%4===0){
          return 29
        }
        else{
          return 28
        }
      }
      else if(this.selectedmonth==="january" || this.selectedmonth==="march" ||
      this.selectedmonth==="may" || this.selectedmonth === "july" ||
      this.selectedmonth==="august" || this.selectedmonth === "october"
      || this.selectedmonth === "december"){
        return 31
      }
      else{
        return 30
      }
    }
  }
}
</script> -->
