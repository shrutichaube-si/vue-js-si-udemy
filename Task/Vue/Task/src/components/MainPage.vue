<template>
      <select v-model="selectedContinent" >
        <option v-for="continent in continents" :key="continent.id" >{{continent.name }}</option>
      </select>
  
      <select v-model="selectedCountries" >
        <option  v-for="country in countriesList" :key="country.id">{{ country.name }}</option>
      </select>
      <img :src="selectedCountryImage" alt="">

      <br>
      <br>
      <h1>Add New Country</h1>
      Country Name
      <input placeholder="Country Name" type="text">
      <br>
      Country Rank
      <input type="text" placeholder="Country Rank">
      <br>
      <input placeholder="Country Rank" type="file">
      <br>
      <button onclick="sendDataToServer()">POST</button>
</template>
<script>
import axios from "axios";
export default{

  
    data (){
        return{
            continents: [],
            countriesList: [],
            selectedContinent: '' ,
            selectedCountries:'',
            selectedCountryImage:''
        }

    },
    mounted(){
        this.fetchContinentData()
        //    this.fetchCountryData()
    }
 ,
    methods:
    {

    fetchContinentData(){
        axios
        .get("http://localhost:8080/continents")
        .then((response) => {
            
        this.continents = response.data;
        this.selectedContinent = this.continents[0].name;    
        this.populateCountryArray()
        })
        .catch((error) => {
        console.error('Error fetching continents:', error);
        });

          
      },
      populateCountryArray(){
        try{
            this.countriesList =  this.continents.find(continent=>continent.name == this.selectedContinent).countries;
            this.selectedCountries = this.countriesList[0].name;
            this.selectedCountryImage = this.countriesList[0].image;
        }catch(e){
            return false;
        }
      },
      sendDataToServer(){
        try{
            // Make the post call here
        }catch(e){
            console.log('ERROR WHILE MAKING THE POST CALL')
        }
      }



},
computed:{

    filterByContinent(){

    }

}




    }
    


</script>
