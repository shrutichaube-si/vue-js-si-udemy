<template>
    <div>
      <div class = "all-class">
      <h1>Batsman</h1>
      
      <div class="col">
        <div class="card" v-for="(player, index) in filteredPlayer(1)" :key="index">
          <img :src="player.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ player.name  }}</h5>
            <p class="card-text">Matches: {{ player.matches }}</p>
            <p class="card-text">Runs: {{ player.runs }}</p>
            <p class="card-text">50/100s: {{ player['50s'] }}/{{ player['100s'] }}</p>
            <p class="card-text">Highest Score: {{ player.highest_score }}</p>
            <p class="card-text">Team Name: {{ player.team_name }}</p>
            <p class="card-text">Best Bowling Figures: {{ player.best_bowling_figures }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class ="all-class">
    <h1>Bowler</h1>
    <div class="col">
      <div class="card" v-for="(player, index) in filteredPlayer(3)" :key="index">
        <img :src="player.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ player.name  }}</h5>
          <p class="card-text">Matches: {{ player.matches }}</p>
          <p class="card-text">Runs: {{ player.runs }}</p>
          <p class="card-text">50/100s: {{ player['50s'] }}/{{ player['100s'] }}</p>
          <p class="card-text">Highest Score: {{ player.highest_score }}</p>
          <p class="card-text">Team Name: {{ player.team_name }}</p>
          <p class="card-text">Best Bowling Figures: {{ player.best_bowling_figures }}</p>
        </div>
      </div>
    </div>
    </div>
    <div class ="all-class" >
    <h1>Allrounder</h1>
    <div class="col">
      <div class="card" v-for="(player, index) in filteredPlayer(2)" :key="index">
        <img :src="player.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ player.name  }}</h5>
          <p class="card-text">Matches: {{ player.matches }}</p>
          <p class="card-text">Runs: {{ player.runs }}</p>
          <p class="card-text">50/100s: {{ player['50s'] }}/{{ player['100s'] }}</p>
          <p class="card-text">Highest Score: {{ player.highest_score }}</p>
          <p class="card-text">Team Name: {{ player.team_name }}</p>
          <p class="card-text">Best Bowling Figures: {{ player.best_bowling_figures }}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  </template>
  
  <script>
 

  export default {
    props: ['playersData'],
  
    computed: {
      filteredPlayer() {

        // console.log(this.playersData);
         return (role) => {
        
          return this.playersData.filter((player) => player.role === role);
        }; 
      },
    },
    
  };
 
  

  </script>
  
  <style>
  /* Your CSS styles */
  </style>
  

<!-- <template>
    <div>
      <div v-for="(player, index) in playersData" :key="index">
        <h1 v-if="player.role === 2">Batsman</h1>
        <h1 v-else-if="player.role === 4">Bowler</h1>
        <h1 v-else-if="player.role === 3">Allrounder</h1>
  
        <div class="col">
          <div class="card">
            <img :src="player.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ player.name }}</h5>
              <p class="card-text">Matches: {{ player.matches }}</p>
              <p class="card-text">Runs: {{ player.runs }}</p>
              <p class="card-text">50/100s: {{ player['50s'] }}/{{ player['100s'] }}</p>
              <p class="card-text">Highest Score: {{ player.highest_score }}</p>
              <p class="card-text">Team Name: {{ player.team_name }}</p>
              <p class="card-text">Best Bowling Figures: {{ player.best_bowling_figures }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['playersData'],
  };
  </script>
  
  <style>
  /* Your CSS styles */
  </style>
   -->
   