<template>
    <div>
        <div class="layout-wrapper">
                              <div class="waf-head">
                                <h3 class="title">Standings</h3>
                              </div>
        </div>
       <div class="table standings-table">
                                 <div class="table-head">
                                   <div class="table-row">
                                     <div class="table-data matches-position">
                                        <p class="text">#</p>
                                    </div>
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
                                   <div class="table-body" v-for="(team,index) in standing" :key="index">
   <div id="row-0" class="table-row">
     <div class="waf-accordion-head">
       <div class="table-row table-row-head">
         <div div="" class="table-data matches-position">
           <div class="table-data-wrap">
             <p class="position"></p>
             <p class="position-indicator"></p>
           </div>
         </div>
         <div div="" class="table-data matches-team">
           <div class="table-data-wrap">
             <div class="team-name">
               <p class="name full-name">{{ team.team_name }}</p>
             </div>
           </div>
         </div>
         <div div="" class="table-data matches-play">
         <p class="count">{{ team.Played }}</p>
         </div>
         <div div="" class="table-data matches-won">
           <p class="count">{{ team.wins }}</p>
         </div>
         <div div="" class="table-data matches-draw">
           <p class="count">{{ team.draws }}</p>
         </div>
         <div div="" class="table-data matches-lost">
           <p class="count">{{ team.lost }}</p>
         </div>
         <div div="" class="table-data matches-goal-for">
           <p class="count">{{ team.gf }}</p>
         </div>
         <div div="" class="table-data matches-goal-against">
           <p class="count">{{ team.ga }}</p>
         </div>
         <div div="" class="table-data matches-goal-difference">
           <p class="count">{{ team.gf-team.ga }}</p>
         </div>
         <div div="" class="table-data points">
           <p class="count">{{ team.points }}</p>
         </div>
         <div div="" class="table-data form-guide">
                                            
                                            <ul class="form-guide-listing">
                                                <div v-for="index in 5" :key="index"> 
                                                <div v-if="team.match_result.match[index-1] && team.match_result.match[index-1].result == 'W'" >
                                              <li class="form-guide-item win">
                                                <p class="text">W</p>
                                              </li>
                                            </div>
                                            <div v-else-if="team.match_result.match[index-1] && team.match_result.match[index-1].result == 'L'">
                                                <li class="form-guide-item lost">
                                                <p class="text">L</p>
                                                </li>
                                            </div>
                                            <div v-else-if="team.match_result.match[index-1] && team.match_result.match[index-1].result == 'D'">
                                                <li class="form-guide-item draw">
                                                <p class="text">D</p>
                                              </li>
                                            </div>
                                            <div v-else-if="team.match_result.match[index-1] && team.match_result.match[index-1].result == '-'" >
                                                <li class="form-guide-item draw">
                                                <p class="text">-</p>
                                                </li>
                                            </div>
                                            <div v-else >
                                                <li class="form-guide-item draw">
                                                <p class="text">-</p>
                                                </li>
                                            </div>
                                            </div>
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
import axios from 'axios';
export default {
    data : () =>({
        standing:[],
        
    }),
    
    mounted() {
        axios.get('http://127.0.0.1:5501/standing/standing.json')
        .then((resp) => {
            console.log(resp.data)
            this.standing = resp.data.standings.groups[0].teams.team
           

            

        })
    }
} 

</script>
