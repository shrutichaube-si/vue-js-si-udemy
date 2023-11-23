<template>
    <div>
      <div id="add_country">
        <h1>Add New Country</h1>
      Country Id
      <input v-model="id" placeholder="Country Id" type="text">
      <br>
      Country Rank
      <input  v-model="rank" placeholder="Country Rank" type="text">
      <br>
      Country Name
      <input v-model = "name" placeholder="Country Name" type="text">
      <br>
      <input placeholder="Country Image" type="file" @change="imageUpload">
      <br>
      <button @click="sendDataToServer">POST</button>
      </div>
  
      <br>
      <div>
      <select v-model="selectedContinent" @change="fetchCountries">
        <option v-for="continent in continents" >{{ continent.name }}</option>
      </select>
  
      <select v-model="selectedCountry" @change ="filterCountriesByCountryName">
        <option v-for="country in selectedCountries" :key="country.id" :value="country.id">{{ country.name }}</option>
      </select>
    </div>
 
  <br>
      <!-- Displaying Country Details -->
      <div class="card" style="width: 18rem;" >
        <img :src="selectedCountryImage" class="card-img-top" alt="Country Image">
        <div class="card-body">
          <h5 class="card-title">Country Details:</h5>
          <p class="card-text">NAME: {{ selectedCountryName }}</p>
          <p class="card-text">ID: {{selectedCountryId }}</p>
          <p class="card-text">Rank: {{ selectedCountryRank }}</p>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        continents: [],
        countriesList: [],
        selectedContinent: null,
        selectedCountries: '', 
        selectedCountry: '',
        newCountryName: "",
        selectedCountryImage:"",
        selectedCountryName:"",
        selectedCountryId:"",
        selectedCountryRank:"",
        id: '',
        rank: '',
        name: '',
        image: ''

      };
    },
  
    created() {
      this.fetchContinents();
    },
  
    computed: {
      filterByCountries() {
        if (!this.selectedContinent) {
          return [];
        }
        const continent = this.continents.find((c) => c.id === this.selectedContinent);
        console.log('Continent' + continent)
     
        return continent ? continent.countries : [];

      },
    
    },
  
    methods: {
    filterCountriesByCountryName(e) {
        
        const selectedCountry = this.selectedCountries
.find(country=>country.id==this.selectedCountry)
       
        this.selectedCountryImage = selectedCountry.image;
        this.selectedCountryName = selectedCountry.name;
        this.selectedCountryId = selectedCountry.id;
        this.selectedCountryRank = selectedCountry.rank;

      },
      fetchContinents() 
      {
        axios
          .get("http://localhost:8080/continents")
          
          .then((response) => {

            this.continents = response.data;
            this.selectedContinent = this.continents[0].name; 
            
          })
          .catch((error) => {
            console.error('Error fetching continents:', error);
          });
      },
  
      fetchCountries() {
      
        if (this.selectedContinent) {
          const continent = this.continents.find((c) => c.name === this.selectedContinent);
          console.log('Hii' + continent)
          if (continent) {
            console.log(continent.countries)
            this.selectedCountries = continent.countries;
            
          } else {
            this.selectedCountries = [];
          }
        } else {
          this.selectedCountries = [];
        }
       
      },
      

      sendDataToServer(){
      const formData = new FormData();
       formData.append("image", this.image);
       formData.append("id",this.id);
       formData.append("name",this.name);
       formData.append("rank",this.rank);
       formData.append("selectedContinent",this.selectedContinent);
       console.log(this.image)
        axios.post("http://localhost:8080/addContinents",formData
        
        ).then((res)=>{
        console.log(res)
      }).catch((err)=>{console.log(err)})
    },

   
    imageUpload(event){
     this.image = event.target.files[0];
    }
   
     
    },
  
}
  
  </script>
  
  <style>
  </style>
  