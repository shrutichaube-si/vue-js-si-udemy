<template>
    <div>
        <nav>
            <label for="cars">Choose a team:</label>
            <select @click="dropPlayers" name="teams" id="teams" v-model="dropText">
                <option selected value="ALL">All</option>
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
        uPlayer: [],
        searchText: '',
        dropText:'',

    }), 

    computed: {
        updatePlayers() {
            // console.log(this.searchText),
            this.uPlayer = this.players.filter(player => (player.name.toUpperCase().includes(this.searchText.toUpperCase()))||(player.team_name.toUpperCase().includes(this.searchText.toUpperCase())))
            this.passEvent()
        },
        dropPlayers(){
            console.log(this.dropText)
            this.uPlayer=this.players.filter(player=>(player.team_name.includes(this.dropText)) || this.dropText=="ALL");
            this.passEvent()
        }
    },

    methods: {
        passEvent() { this.$emit('updatePlayer', this.uPlayer) },
    },
   
//====================== Using Async await
    mounted:async function () {
            
            const res = await axios.get('http://127.0.0.1:5500/JSON/players.json')
            this.players = res.data.players;
            this.uPlayer = this.players;
            this.passEvent()
                
                
            }
        }
    
    //=========================== Using Promise
//     mounted : function(){
//         axios.get('http://127.0.0.1:5500/JSON/players.json').then((res)=>{
//             this.players = res.data.players;
//             this.uPlayer = this.players;
//             this.passEvent();
//         })
//     }
// }


</script>

<style scoped></style>
