<template>
    <div>
      <navbar @updatePlayer="ChangeT($event)">
      </navbar>
      <h2>Batsman</h2>
      <div class="container">
      <div v-for="(player,key) in players" :key="key">
        <div class="card" v-if="player.role===1">
      <img :src=player.image alt="Avatar" style="width:100%">
      
          <h5 class="card-title">{{ player.name }} </h5>
          <h6>Matches :{{ player.matches }}</h6>
          <h6>Runs:{{ player.runs }}</h6>
          <h6>50/100s:{{ player['50s'] }}{{ player['100s'] }}</h6>
          <h6>Highest Scores:{{ player.highest_score }}</h6>
          <h6>Best Bowling figures:{{ player.best_bowling_figures }}</h6>
          <h6>Team Name: {{ player.team_name }}</h6>
      </div> 
      </div>
  </div>
      </div>
      <h2>Bowler</h2>
      <div class="container">
      <div v-for="(player,key) in players" :key="key">
        <div class="card" v-if="player.role===3">
        <img :src=player.image alt="Avatar" style="width:100%">
         <h5 class="card-title">{{ player.name }} </h5>
          <h6>Matches :{{ player.matches }}</h6>
          <h6>Runs:{{ player.runs }}</h6>
          <h6>50/100s:{{ player['50s'] }}{{ player['100s'] }}</h6>
          <h6>Highest Scores:{{ player.highest_score }}</h6>
          <h6>Best Bowling figures:{{ player.best_bowling_figures }}</h6>
           <h6>Team Name: {{ player.team_name }}</h6>
      </div>
      </div>
      </div>
      <h2>All rounder</h2>
      <div class="container">
      <div v-for="(player,key) in players" :key="key">
      <div class="card" v-if="player.role===2">
      <img :src=player.image alt="Avatar" style="width:100%">
          <h5 class="card-title">{{ player.name }} </h5>
          <h6>Matches :{{ player.matches }}</h6>
          <h6>Runs:{{ player.runs }}</h6>
          <h6>50/100s:{{ player['50s'] }}{{ player['100s'] }}</h6>
          <h6>Highest Scores:{{ player.highest_score }}</h6>
          <h6>Best Bowling figures:{{ player.best_bowling_figures }}</h6>
           <h6>Team Name: {{ player.team_name }}</h6>
      </div>
      </div>
      </div>
</template>

<script>
import navbar from './navbar.vue';

 export default{
    data:()=>({
     players:[]
    }),
    components:{navbar},
    methods:{
      ChangeT(players){
        this.players=players

      }
    }
 }
</script>

<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width:250px;
  margin:30px;
  display: inline-block;
  align-content: center;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  margin: 2px;
  padding:2px;
  display: flex;
}

h2{
  text-align: center;
}
</style>
