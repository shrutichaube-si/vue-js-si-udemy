<template>
<div>
 <Navbar @searchText="change($event)" @updateSelectedTeam="updateSelectedTeam" />
 <Mainpage :playersData="uPlayer" />


</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Mainpage from './components/Mainpage.vue'
import axios from 'axios'


export default {
  components: {
    Navbar,
    Mainpage
  },
  data() {
    return {
     searchText:'',
     uPlayer:[],
     selectedTeam : 'ALL',
       player : [
    //   {
    //   name: 'Virat Kohli',
    //   matches: '101',
    //   role: 2,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: 0,
    //   team_id: 4,
    //   team_name: 'IND',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/164.png',
    // },
    // {
    //   name: 'Hardik Pandya',
    //   matches: '100',
    //   role: 3,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '1-23',
    //   team_id: 4,
    //   team_name: 'IND',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/2740.png',
    // },
    // {
    //   name: 'Jasprit Bumrah',
    //   matches: '100',
    //   role: 4,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '5-23',
    //   team_id: 4,
    //   team_name: 'IND',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/1124.png',
    // },
    // {
    //   name: 'David Warner',
    //   matches: '100',
    //   role: 2,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: 0,
    //   team_id: 1,
    //   team_name: 'AUS',
    //   image: 'https://resources.pulse.icc-cricket.com/players/210/170.png',
    // },
    // {
    //   name: 'Glen Maxwell',
    //   matches: '100',
    //   role: 3,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '1-23',
    //   team_id: 1,
    //   team_name: 'AUS',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/282.png',
    // },
    // {
    //   name: 'Pat Cummings',
    //   matches: '100',
    //   role: 4,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '5-23',
    //   team_id: 1,
    //   team_name: 'AUS',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/488.png',
    // },
    // {
    //   name: 'Babar Azam',
    //   matches: '100',
    //   role: 2,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: 0,
    //   team_id: 6,
    //   team_name: 'PAK',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/2759.png',
    // },
    // {
    //   name: 'Shaheen Afridi',
    //   matches: '100',
    //   role: 3,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '1-23',
    //   team_id: 6,
    //   team_name: 'PAK',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/4530.png',
    // },
    // {
    //   name: 'Haris Rauf',
    //   matches: '100',
    //   role: 4,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '5-23',
    //   team_id: 6,
    //   team_name: 'PAK',
    //   image: '',
    // },
    // {
    //   name: 'Jhonny Bairstow',
    //   matches: '100',
    //   role: 2,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: 0,
    //   team_id: 5,
    //   team_name: 'ENG',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/506.png',
    // },
    // {
    //   name: 'Ben Stokes',
    //   matches: '100',
    //   role: 3,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '1-23',
    //   team_id: 5,
    //   team_name: 'ENG',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/1154.png',
    // },
    // {
    //   name: 'James Anderson',
    //   matches: '100',
    //   role: 4,
    //   runs: '10234',
    //   '50s': '23',
    //   '100s': '46',
    //   highest_score: '183',
    //   best_bowling_figures: '5-23',
    //   team_id: 5,
    //   team_name: 'ENG',
    //   image: 'https://resources.pulse.icc-cricket.com/players/130x150/900.png',
    // },
    
    ],
      
    };
  },
   methods: {
    change(searchText) {
      this.searchText = searchText.toLowerCase();
      this.filterPlayers();
    },
    updateSelectedTeam(team) {
      this.selectedTeam = team;
      this.filterPlayers();
      
    },
    filterPlayers() {
      let filteredPlayers = this.player;
      
   
      if (this.searchText) {
        const searchText = this.searchText.toLowerCase();
        filteredPlayers = filteredPlayers.filter(player =>
          player.name.toLowerCase().includes(searchText) ||
          player.team_name.toLowerCase().includes(searchText)
        );
      }
      
    
      if (this.selectedTeam !== 'ALL') {
        filteredPlayers = filteredPlayers.filter(player => player.team_name === this.selectedTeam);
        console.log(this.selectedTeam)
      }
      
      this.uPlayer = filteredPlayers;
    },
  },
  mounted() {
  
  axios.get('http://127.0.0.1:5500/JSON/players.json')
    .then((resp) => {
      console.log(resp.data.player)
      this.player = resp.data.player
      this.uPlayer = this.player;
      this.filterPlayers();
      
      // Uncomment the line below if needed
      // this.uPlayer = [].concat(this.player)

      
    })
}

}
</script>





