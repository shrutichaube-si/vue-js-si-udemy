<template>
     <div>
      <div><h1>STANDINGS</h1></div>
        <div class="table standings-table">
                                  <div class="table-head">
                                    <div class="table-row">
                                      <div class="table-data matches-position"><p class="text">#</p></div>
                                      <div class="table-data matches-team"><p class="text">Clubs</p></div>
                                      <div class="table-data matches-play"><p class="text">Played</p></div>
                                      <div class="table-data matches-won"><p class="text">Won</p></div>
                                      <div class="table-data matches-draw"><p class="text">Draw</p></div>
                                      <div class="table-data matches-lost"><p class="text">Lost</p></div>
                                      <div class="table-data matches-goal-for"><p class="text">GF</p></div>
                                      <div class="table-data matches-goal-against"><p class="text">GA</p></div>
                                      <div class="table-data matches-goal-difference"><p class="text">GD</p></div>
                                      <div class="table-data points"><p class="text">Points</p></div>
                                      <div class="table-data form-guide"><p class="text">Form</p></div>
                                      </div>
                                    </div>

    <div class="table-body" v-for = "(element,index) in playerstandings" :key ="index"  >
    
    <div id="row-0" class="table-row">
      <div class="waf-accordion-head">
        <div class="table-row table-row-head">
          <div div="" class="table-data matches-position">
            <div class="table-data-wrap">
              <p class="position">{{ element.position }}</p>
              <p class="position-indicator"></p>
            </div>
          </div>
          <div div="" class="table-data matches-team">
            <div class="table-data-wrap">
              <div class="team-name">
                <p class="name full-name">{{ element.team_name }}</p>
              </div>
            </div>
          </div>
          <div div="" class="table-data matches-play">
          <p class="count">{{ element.played }}</p>
          </div>
          <div div="" class="table-data matches-won">
            <p class="count">{{ element.wins }}</p>
          </div>
          <div div="" class="table-data matches-draw">
            <p class="count">{{ element.draws }}</p>
          </div>
          <div div="" class="table-data matches-lost">
            
            <p class="count">{{ element.lost }}</p>
          
          </div>
          <div div="" class="table-data matches-goal-for">
            <p class="count">{{ element.gf }}</p>
          </div>
          <div div="" class="table-data matches-goal-against">
            <p class="count">{{ element.ga }}</p>
          </div>
          <div div="" class="table-data matches-goal-difference">
            <p class="count">{{ element.gf-element.ga }}</p>
          </div>
          <div div="" class="table-data points">
            <p class="count">{{ element.points }}</p>
          </div>
          <div div="" class="table-data form-guide">
                                            
                                            <ul class="form-guide-listing">
                                              <li class="form-guide-item win">
                                                <p class="text">W</p>
                                              </li>
                                              <li class="form-guide-item win">
                                                <p class="text">W</p>
                                              </li>
                                              <li class="form-guide-item draw">
                                                <p class="text">-</p>
                                                <!---->
                                              </li>
                                              <li class="form-guide-item draw">
                                                <p class="text">-</p>
                                                <!---->
                                              </li>
                                              <li class="form-guide-item draw">
                                                <p class="text">-</p>
                                                <!---->
                                              </li>
                                            </ul>
                                           
                                          </div>
     </div>  
     </div>
     </div>
     </div>
     </div>
     </div>
                                
                                  
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return{
  playerstandings : {},
 
  }
},
 mounted () {
    axios.get('http://127.0.0.1:5501/JSON/standings.json')
    .then((resp) => {
     this.playerstandings =  resp.data.standings.groups[0].teams.team
     console.log(resp.data.standings.groups[0].teams.team)
    
      
    })
}
}
</script>
<style >
@import "./src/standings.css";
</style>