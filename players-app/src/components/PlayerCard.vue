    <template>
  <div class="col">
    <div class="card">
      <img :src="playerInfo.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ playerInfo.name }}</h5>
        <p class="card-text">Matches: {{ playerInfo.matches }}</p>
        <p class="card-text">Runs: {{ playerInfo.runs }}</p>
        <p class="card-text">50/100s: {{ playerInfo['50s'] }}/{{ playerInfo['100s'] }}</p>
        <p class="card-text">Highest Score: {{ playerInfo.highest_score }}</p>
        <p class="card-text">Team Name: {{ playerInfo.team_name }}</p>
        <p class="card-text">Best Bowling Figures: {{ playerInfo.best_bowling_figures }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playerInfo: Object,
  },
};
</script>

<style scoped>

</style>


