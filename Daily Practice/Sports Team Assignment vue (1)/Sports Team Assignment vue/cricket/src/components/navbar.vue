<template>
    <div>
        <nav>
            <label for="cars">Choose a team:</label>
            <select @click="dropPlayers"  name="cars" id="cars" selected="selected" v-model="dropText">
                <option selected>ALL</option>
                <option value="IND">India</option>
                <option value="ENG">England</option>
                <option value="PAK">Pakistan</option>
                <option value="AUS">Australia</option>
            </select>
            <input type="text" @change="updatePlayers" placeholder="Search.." name="search" v-model="searchText">
            <button @click="updatePlayers"><i class="fa fa-search"> Search</i></button>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data: () => ({
        players: [],
        // players: [
            // {
            //     "name": "Virat Kohli",
            //     "matches": "100",
            //     "role": 1,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": 0,
            //     "team_id": 4,
            //     "team_name": "IND",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/164.png"
            // },
            // {
            //     "name": "Hardik Pandya",
            //     "matches": "100",
            //     "role": 2,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "1-23",
            //     "team_id": 4,
            //     "team_name": "IND",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/2740.png"
            // },
            // {
            //     "name": "Jasprit Bumrah",
            //     "matches": "100",
            //     "role": 3,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "5-23",
            //     "team_id": 4,
            //     "team_name": "IND",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/1124.png"
            // },
            // {
            //     "name": "David Warner",
            //     "matches": "100",
            //     "role": 1,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": 0,
            //     "team_id": 1,
            //     "team_name": "AUS",
            //     "image": "https://resources.pulse.icc-cricket.com/players/210/170.png"
            // },
            // {
            //     "name": "Glen Maxwell",
            //     "matches": "100",
            //     "role": 2,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "1-23",
            //     "team_id": 1,
            //     "team_name": "AUS",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/282.png"
            // },
            // {
            //     "name": "Pat Cummings",
            //     "matches": "100",
            //     "role": 3,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "5-23",
            //     "team_id": 1,
            //     "team_name": "AUS",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/488.png"
            // },
            // {
            //     "name": "Babar Azam",
            //     "matches": "100",
            //     "role": 1,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": 0,
            //     "team_id": 6,
            //     "team_name": "PAK",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/2759.png"
            // },
            // {
            //     "name": "Shaheen Afridi",
            //     "matches": "100",
            //     "role": 2,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "1-23",
            //     "team_id": 6,
            //     "team_name": "PAK",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/4530.png"
            // },
            // {
            //     "name": "Haris Rauf",
            //     "matches": "100",
            //     "role": 3,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "5-23",
            //     "team_id": 6,
            //     "team_name": "PAK",
            //     "image": "https://static-files.cricket-australia.pulselive.com/headshots/288/3928-camedia.png"
            // },
            // {
            //     "name": "Jhonny Bairstow",
            //     "matches": "100",
            //     "role": 1,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": 0,
            //     "team_id": 5,
            //     "team_name": "ENG",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/506.png"
            // },
            // {
            //     "name": "Ben Stokes",
            //     "matches": "100",
            //     "role": 2,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "1-23",
            //     "team_id": 5,
            //     "team_name": "ENG",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/1154.png"
            // },
            // {
            //     "name": "James Anderson",
            //     "matches": "100",
            //     "role": 3,
            //     "runs": "10234",
            //     "50s": "23",
            //     "100s": "46",
            //     "highest_score": "183",
            //     "best_bowling_figures": "5-23",
            //     "team_id": 5,
            //     "team_name": "ENG",
            //     "image": "https://resources.pulse.icc-cricket.com/players/130x150/900.png"
            // }
        // ],
        uPlayer: [],
        searchText: '',
        dropText:'',
    }),
    mounted(){
        axios.get('http://127.0.0.1:5501/Sports%20Team%20Assignment%20vue/player.json/player.json')
        .then((resp)=>{
            console.log(resp.data)
            this.players = resp.data.players
            this.uPlayer = [].concat(this.players)
            this.passEvent()
        })
    },

    computed: {
        updatePlayers() {
            // console.log(this.searchText),
            this.uPlayer = this.players.filter(player => (player.name.toUpperCase().includes(this.searchText.toUpperCase()))||(player.team_name.toUpperCase().includes(this.searchText.toUpperCase())))
            this.passEvent()
        },
        dropPlayers() {
            console.log(this.dropText)
            this.uPlayer=this.players.filter(player=>(player.team_name.includes(this.dropText)) || this.dropText=="ALL");
            this.passEvent()
        }
    },
    methods: {
        passEvent() { this.$emit('updatePlayer', this.uPlayer) },
    },
    // mounted: function () {
    //     this.$nextTick(function () {
            

    //     })
    // }
}
</script>