<template>
  <h1>Hello world</h1>
  <select v-model="selectedContinent" @click="getCountryByContinent" >
    <option selected="Asia" v-for="continent in continents" :key="continent">
      {{ continent.name }}
    </option>
    <br>
  </select> 
  <select v-model="selectedCountry" @click="getCountryByCountryName">
    <option v-for="country in newCountry " :key="country">
      {{country.name}}
    </option>
  </select>
  <br>
  <div class="card" style="width: 18rem;" >
  <img class="card-img-top" :src= this.selectedCountryName.image alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Country Name: {{ this.selectedCountryName.name }}</h5>
    <p>id: {{ this.selectedCountryName.id }}</p>
    <p>image:{{ this.selectedCountryName.image}}</p>
    <p>Rank:{{ this.selectedCountryName.rank }}</p>
  </div>
</div>
<br>

<form action="" method="post" enctype="multipart/form-data">
  <div class="row">
    <div class="col">
      <input type="text" v-model="id" class="form-control" placeholder="Country id">
    </div>
    <br>
    <div class="col">
      <input type="text" v-model="name" class="form-control" placeholder="Country name">
    </div>
    <br>
    <div class="col">
      <input type="text" v-model="rank" class="form-control" placeholder="Country rank">
    </div>  
    <div>
      <br>
      <input type="file" accept="image/png, image/jpeg" @change="uploadImage">
    </div>
  </div>
  <button type="button" @click="updateData" class="btn btn-primary">Add Data</button>
</form>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id:null,
      name:null,
      rank:null,
      image:null,
      continent:"",
      continents: [],
      selectedContinent :null,  
      selectedCountry:null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      countries: [],
      newCountry:[],
      selectedCountryName :[]
    }
  },
  computed:{
    updateData(){

       const formData = new FormData();
       formData.append("image", this.image);
       formData.append("id",this.id);
       formData.append("name",this.name);
       formData.append("rank",this.rank);
       formData.append("selectedContinent",this.selectedContinent);
       console.log(this.image)
      axios.post("http://localhost:8080/post",formData,
    ).then((res)=>{
          console.log(res)
      }).catch((err)=>{console.log(err)})
    },


      getCountryByContinent(){
      if(!this.selectedContinent){
        this.newCountry = null
      }
      else{
      this.newCountry = this.continents.filter(element=>element.name === this.selectedContinent);
      this.newCountry = this.newCountry[0].countries;
      }
    },
    getCountryByCountryName(){
      this.selectedCountryName =this.newCountry.filter(element=>element.name===this.selectedCountry);
      this.selectedCountryName = this.selectedCountryName[0];
    },
    
  },
  methods:{
    uploadImage(event){
      this.image = event.target.files[0];
    } 
  },
 
  mounted: async function () {
    try{
      
      const cont = await axios.get("http://localhost:8080/getData");
      const count = await axios.get("http://localhost:8080/getCountry");      
     
      this.continents = cont.data;
      this.countries = count.data;
     
      console.log("contitnet data",this.continents);
      console.log("country data",this.countries);
     
    }catch(error){
      console.error("Error occured",error);
    }
   
  }
};
</script>
<style scoped></style>





