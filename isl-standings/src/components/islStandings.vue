<template>
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/src/standings.css"/>
  </head>
  <body class="- load-bg-pattern" data-n-head="%7B%22class%22:%7B%22ssr%22:%22%22%7D%7D">
    <div data-server-rendered="true" id="__myapp">
      <div>
        <div>
          <main class="main-wrap">
            <section class="body-wrap">
              <section class="waf-row">
                <div class="waf-view">
                  <div class="container-fluid">
                    <div class="row sticky-container">
                      <div class="col-lg-12">
                        <section
                          data-mobile="widget_layout_10"
                          data-template="widget_layout_10"
                          data-component="SI-standings"
                          data-tooltip="SI-standings / widget_layout_10"
                          id="2164b259-97c6-46a1-a283-b8c94a6ad989"
                          data-title="SI-widget_layout_10/widget_layout_10"
                          class="site-content"
                        >
                          <div
                            widget-id="si-standings-widget-layout-10"
                            pattern="standings_10_1"
                            selector="2164b259-97c6-46a1-a283-b8c94a6ad989"
                            class="waf-component waf-standings widget-layout-10 si-waf-widget waf-shape-head"
                          >
                            <div class="layout-wrapper">
                              <div class="waf-head">
                                <h3 class="title">Standings</h3>
                                <ul class="head-tab">
                                  <li class="active"><a href="">more</a></li>
                                  <li><a href="">Features</a></li>
                                </ul>
                                <div class="dropdown-wrap">
                                  <label class="dropdown-label">Select option</label>
                                  <div class="waf-select-box">
                                    <button aria-label="" aria-expanded="false" class="selected-title">
                                      <span class="btn-text">Selected title</span>
                                    </button>
                                    <div class="select-box-wrap">
                                      <span class="dropdown-close">Close</span>
                                      <div class="select-list">
                                        <button class="list-item">1st Inn</button> <button class="list-item">2nd Inn</button>
                                        <button class="list-item">3rd Inn</button>
                                      </div>
                                      <div class="select-list">
                                        <a href="#" class="list-item">1st Inn</a> <a href="#" class="list-item">2nd Inn</a>
                                        <a href="#" class="list-item">3rd Inn</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="waf-body">
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
                                  <div class="table-body" v-for="team in teams" :key="team.team_id"> 
                                    <div id="row-0" class="table-row">
                                      <div class="waf-accordion-head">
                                        <div class="table-row table-row-head">
                                          <div div="" class="table-data matches-position">
                                            <div class="table-data-wrap">
                                              <p class="position">{{ team.position }}</p>
                                              <p class="position-indicator"></p>
                                            </div>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-team">
                                            <!---->
                                            <div class="table-data-wrap">
                                              <div class="team-image">
                                                <img src="/static-assets/images/club/1874.png?v=100.19" data-src="" alt="" class="team-logo" />
                                              </div>
                                              <div class="team-name">
                                                <p class="name full-name">{{ team.team_name }}</p>
                                                <p class="name short-name">{{ team.team_short_name }}</p>
                                              </div>
                                            </div>
                                            <!---->
                                            <!---->
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-play">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.played }}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-won">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.wins }}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-draw">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.draws }}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-lost">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.lost }}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-goal-for">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.gf }}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-goal-against">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.ga }}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data matches-goal-difference">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.score_diff}}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data points">
                                            <!---->
                                            <!---->
                                            <!---->
                                            <p class="count">{{ team.points }}</p>
                                            <!---->
                                          </div>
                                          <div div="" class="table-data form-guide">
                                            <!---->
                                            <!---->
                                            <ul class="form-guide-listing">
  <li v-for="index in 5" :key="index" class="form-guide-item" :class="{
      'win': team.match_result.match[index - 1]?.result === 'W',
      'draw': team.match_result.match[index - 1]?.result === 'D',
      'lost': team.match_result.match[index - 1]?.result === 'L'
    }"
  >
    <p class="text">
      {{ team.match_result.match[index - 1] && team.match_result.match[index - 1].result ? team.match_result.match[index - 1].result : '-' }}
    </p>
  </li>
</ul>

                                            <!---->
                                            <!---->
                                          </div>
                                        </div>
                                      </div>
                                      
                                    </div>
                                    
                                    
                                  </div>
                                </div>
                              </div>
                              <div class="waf-footer">
                                <button aria-haspopup="false" aria-expanded="false" aria-label="" data-expanded="true" class="accordion-btn">
                                  <span class="btn-text">standings</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
    </div>
  </body>
</html>
 
</template>
<script>
import axios from 'axios'
export default{
    data(){
    return{
        teams : {},
        // match: [
        //     { result: 'win' },
        //     { result: 'draw' },
        //     { result: 'lost' },
        //     // Include the remaining matches here
        //   ]
     }
   },
   mounted: async function()
   {
          try {
            const resp = await axios.get('http://127.0.0.1:5500/data/standings.json')
            //console.log(resp.data.standings)
            this.teams = resp.data.standings.groups[0].teams.team; 
            console.log(this.teams);
          } catch (error) {
            console.error('Error Fetching Data:',error)
          }
   }
}
</script>
