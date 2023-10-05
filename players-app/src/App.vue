
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
            <select v-model="selectedTeam">
              <option value="ALL">ALL</option>
              <option value="India">IND</option>
              <option value="Pakistan">PAK</option>
              <option value="Australia">AUS</option>
              <option value="England">ENG</option>
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
import PlayerList from "./components/PlayerList.vue";
export default {
  data() {
    return {
      selectedTeam: "ALL",
      search: "",
      originalPlayers: [
      {
        name: 'Virat Kohli',
        matches: '101',
        role: 2,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: 0,
        team_id: 4,
        team_name: 'IND',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/164.png',
      },
      {
        name: 'Hardik Pandya',
        matches: '100',
        role: 3,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '1-23',
        team_id: 4,
        team_name: 'IND',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/2740.png',
      },
      {
        name: 'Jasprit Bumrah',
        matches: '100',
        role: 4,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '5-23',
        team_id: 4,
        team_name: 'IND',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/1124.png',
      },
      {
        name: 'David Warner',
        matches: '100',
        role: 2,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: 0,
        team_id: 1,
        team_name: 'AUS',
        image: 'https://resources.pulse.icc-cricket.com/players/210/170.png',
      },
      {
        name: 'Glen Maxwell',
        matches: '100',
        role: 3,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '1-23',
        team_id: 1,
        team_name: 'AUS',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/282.png',
      },
      {
        name: 'Pat Cummings',
        matches: '100',
        role: 4,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '5-23',
        team_id: 1,
        team_name: 'AUS',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/488.png',
      },
      {
        name: 'Babar Azam',
        matches: '100',
        role: 2,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: 0,
        team_id: 6,
        team_name: 'PAK',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/2759.png',
      },
      {
        name: 'Shaheen Afridi',
        matches: '100',
        role: 3,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '1-23',
        team_id: 6,
        team_name: 'PAK',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/4530.png',
      },
      {
        name: 'Haris Rauf',
        matches: '100',
        role: 4,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '5-23',
        team_id: 6,
        team_name: 'PAK',
        image: '',
      },
      {
        name: 'Jhonny Bairstow',
        matches: '100',
        role: 2,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: 0,
        team_id: 5,
        team_name: 'ENG',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/506.png',
      },
      {
        name: 'Ben Stokes',
        matches: '100',
        role: 3,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '1-23',
        team_id: 5,
        team_name: 'ENG',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/1154.png',
      },
      {
        name: 'James Anderson',
        matches: '100',
        role: 4,
        runs: '10234',
        '50s': '23',
        '100s': '46',
        highest_score: '183',
        best_bowling_figures: '5-23',
        team_id: 5,
        team_name: 'ENG',
        image: 'https://resources.pulse.icc-cricket.com/players/130x150/900.png',
      },
      ],
      players: [],
    };
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
