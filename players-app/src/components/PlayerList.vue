<template>
    <div class="container">
      <div class="row">
        <PlayerCard v-for="player in players" :key="player.name" :playerInfo="player" />
      </div>
    </div>
  </template>
  
  <script>
  import PlayerCard from "./PlayerCard.vue"
  
  export default {
    props: {
      players: Array,
    },
    components: {
      PlayerCard,
    },
  };
  </script>
  