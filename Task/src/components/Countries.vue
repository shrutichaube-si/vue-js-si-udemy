<template>
    <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="continents">Choose a Continent: {{ selectedContinent }}</label>
          <select id="continents" class="form-control" v-model="selectedContinent">
            <option v-for="continent in continents" :key="continent.name">{{ continent }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="countries">Choose a Country: {{ selectedCountry }}</label>
          <select id="countries" class="form-control" v-model="selectedCountry">
            <option v-for="country in filteredCountries" :key="country">{{ country }}</option>
          </select>
        </div>
      </div>

      <div class="col-md-6">
        <div v-if="getCountryData" class="card" style="width: 18rem;">
            <h3 class="card-title">Country Details</h3>
          <img class="card-img-top" :src="getCountryData.image" alt="Country Image">
          <div class="card-body">
            <h4 class="card-subtitle mb-2 text-muted">{{ getCountryData.name }}</h4>
            <p class="card-text">Rank: {{ getCountryData.rank }}</p>
          </div>
        </div>

        <!-- <div v-if="getCountryData" class="mt-4">
          <h2>The list of All Selected Countries</h2>
          <h4>Country Names: {{ getCountryData.name }}</h4>
          <p>ID: {{ getCountryData.id }}</p>
          <img :src="getCountryData.image" alt="Country Image" class="img-fluid"/>
          <p>Rank: {{ getCountryData.rank }}</p>
        </div> -->
      </div>
    </div>

    <hr class="my-4">

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Enter the id:</label>
          <input type="text" class="form-control" v-model="id"/>
        </div>

        <div class="form-group">
          <label>Enter the Name of the country:</label>
          <input type="text" class="form-control" v-model="countryName"/>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label>Input the image:</label>
          <input type="file" class="form-control-file" @change="onFileChange"/>
        </div>

        <div class="form-group">
          <label>Enter the Rank:</label>
          <input type="text" class="form-control" v-model="rank"/>
        </div>

        <button type="submit" class="btn btn-primary" @click="addCountry">Add Country</button>
      </div>
    </div>
  </div>
  </template>
<script>
import axios from 'axios';

export default {
    name: "App",
    data() {
        return {
            continents: [],
            continentsWithCountry:[],
            countries:[],
            countryData:[],
            PostCountry:[], 
            selectedContinent:'',
            selectedCountry:'',
            id: '',
            countryName: '',
            imageUrl: '',
            file:null,
            rank: ''
        };
    },
    computed: {
    filteredCountries() {
        console.log(this.countries,'this.countries')
        console.log(this.selectedContinent,'this.selectedContinent')
        // console.log(country,'country')

        // clg
        if (!this.selectedContinent) {
            return this.countries;
        } else {
            console.log(this.continentsWithCountry,'this.continentsWithCountry')
            const selectedContinentObject=Object.keys(this.continentsWithCountry).find((continent)=>{
                console.log('continent-------------',this.continentsWithCountry[continent])
                // console.log('continent-------------',this.continentsWithCountry[continent])

                return this.continentsWithCountry[continent].name==this.selectedContinent
            })
            console.log(selectedContinentObject,'+++++')
            return this.continentsWithCountry[selectedContinentObject].countries.map((country)=>{
                return country.name
            })
            //  return this.continentsWithCountry.filter((country) => country.name === this.selectedContinent);
        }
    },
    getCountryData(){
        console.log(this.selectedCountry,'---this.selectedCountry')
        const countryFound= this.countryData.find((country) => country.name === this.selectedCountry)
        console.log(countryFound,'---countryFound')
        return countryFound
    }
},
    mounted: async function() {
    try {
        const Continentresponse = await axios.get('http://localhost:8080/continents'); 
        const Countryresponse = await axios.get('http://localhost:8080/countries');
        
        const CountryData = await axios.get('http://localhost:8080/countriess')
        this.countryData = CountryData.data;

        this.continentsWithCountry=Continentresponse.data;
    
        this.continents = Continentresponse.data.map((continent) => continent.name); 
        
        this.countries = Countryresponse.data;

      
        console.log(this.continents);
        console.log(this.countries);
   
        
    } catch (error) {
        console.error('Error Fetching Data:', error);
    }
},
methods:{
    onFileChange(e){
        this.file = e.target.files[0];
    },
    addCountry(){
        console.log(this.file,'drftgyhuji')
        const newCountryData = {
            id: this.id,
            name: this.countryName,
            image: this.file,
            rank: this.rank
        };
        this.PostCountryData(newCountryData);
    },
    PostCountryData(newCountryData){

        console.log("country: "+JSON.stringify(newCountryData))
        axios.post('http://localhost:8080/countries',newCountryData)
        .then((response) => {
          console.log('Country added successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error adding country:', error);
        });

    }
}

};

</script>