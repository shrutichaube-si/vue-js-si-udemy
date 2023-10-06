
<template>
 <div id="app">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Sportz Interactive</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <select @click="dropPlayers" v-model="selectedTeam">
              <option value="ALL">ALL</option>
              <option value="IND">IND</option>
              <option value="PAK">PAK</option>
              <option value="AUS">AUS</option>
              <option value="ENG">ENG</option>
            </select>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              v-model="search"
            />
            <button
              class="btn btn-outline-success"
              type="button"
              @click="searchPlayers"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div class="container text-center">
      <div class="row batsman-row">
        <h1>Batsman</h1>
        <PlayerList :players="filteredPlayersByRole(2)" />
      </div>
      <div class="row bowler-row">
        <h1>Bowlers</h1>
        <PlayerList :players="filteredPlayersByRole(4)" />
      </div>
      <br />
      <div class="row all-rounder-row">
        <h1>All rounders</h1>
        <PlayerList :players="filteredPlayersByRole(3)" />
      </div>
    </div>
    <br />
  </div> 
</template>
<script>
import axios from 'axios';
import PlayerList from "./components/PlayerList.vue";
export default {
  data() {
    return {
      selectedTeam: "ALL",
      search: "",
      originalPlayers: [
      ],
      players: [],
    };
  },
mounted()
{
  axios.get('http://127.0.0.1:5500/players.json')
  .then((resp)=>{
    console.warn(resp.data.originalPlayers)
    this.originalPlayers = resp.data.originalPlayers
    this.dropPlayers()
  })
  
},
  components: {
    PlayerList,
    
  },
  computed: {
    filteredPlayers() {
      return this.players.filter((player) => {
        const playerName = player.name.toLowerCase();
        const playerTeam = player.team_name.toLowerCase();
        return (
          playerName.includes(this.search.toLowerCase()) &&
          (this.selectedTeam === "ALL" ||
            playerTeam.includes(this.selectedTeam.toLowerCase()))
        );
      });
    },
  },
  methods: {
    dropPlayers(){
      this.players = this.originalPlayers.filter(player=>(player.team_name.toLowerCase().includes(this.selectedTeam.toLowerCase()))||(this.selectedTeam=="ALL"))
    },

    searchPlayers() {
      this.players = this.originalPlayers.filter((player) => {
        const playerName = player.name.toLowerCase();
        const playerTeam = player.team_name.toLowerCase();
        const searchText = this.search.toLowerCase();
        return (
          (playerName.includes(this.search.toLowerCase()) &&
          (this.selectedTeam === 'ALL' ||
            playerTeam.includes(this.selectedTeam.toLowerCase()))
        )||playerTeam.includes(this.search.toLowerCase()));
      });
    },
    filteredPlayersByRole(role) {
      return this.players.filter((player) => player.role === role);
    },
  },
  created() {
    
    this.players = [...this.originalPlayers];
  }
};
  
</script>


<style scoped>

</style>
