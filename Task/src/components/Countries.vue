<template>
    <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="continents">Choose a Continent:</label>
          <select id="continents" class="form-control" v-model="selectedContinent">
            <option v-for="continent in continents" :key="continent.name">{{ continent }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="countries">Choose a Country: </label>
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
      </div>
    </div>
    <hr class="my-4">
    <form enctype="multipart/form-data" method="post">
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
      <button type="submit" class="btn btn-primary" @click.prevent="addCountry">Add Country</button>
    </div>
  </div>
</form>
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
        if (!this.selectedContinent) {
            return this.countries;
        } else {
            console.log(this.continentsWithCountry,'this.continentsWithCountry')
            const selectedContinentObject=Object.keys(this.continentsWithCountry).find((continent)=>{
                console.log('continent-------------',this.continentsWithCountry[continent])
                return this.continentsWithCountry[continent].name==this.selectedContinent
            })
            console.log(selectedContinentObject,'selectedContinentObject')
            return this.continentsWithCountry[selectedContinentObject].countries.map((country)=>{
                return country.name
            })
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
        console.log(this.file,'Check if its working!!')
        if(this.file){
          const fileType = /jpeg|jpg|png/;
          const mimeType = fileType.test(this.file.type);
          const extname = fileType.test(this.file.name.toLowerCase());
        if(mimeType && extname){
          const formData = new FormData();
        formData.append('id',this.id);
        formData.append('name',this.countryName);
        formData.append('image',this.file);
        formData.append('rank',this.rank);
        formData.append('selectedContinent',this.selectedContinent);  
        this.PostCountryData(formData);
        }else{
          alert(`Error: Image with ${fileType} Type & size upto 4 MB only allowed!`)
        }
        }else{
          alert("Error: Please Select an image file")
        }
    },
    PostCountryData(formData){
        console.log("country: "+JSON.stringify(formData))
        axios.post('http://localhost:8080/countries',formData)
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