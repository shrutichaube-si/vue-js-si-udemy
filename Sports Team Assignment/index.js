 const cardMarkup =`<div class="col">
<div class="card">
  <img class="card-img-top"src="{{IMAGE_NAME}}" />
  <div class="card-body">
    <h5 class="card-title">Player Name: {{PLAYER_NAME}}</h5>
    <p class="card-text">
     <h6>Matches :{{MATCHES}}</h6>
     <h6>Runs:{{RUNS}}</h6>
     <h6>50/100s:{{50s}}/{{100s}}</h6>
    
     <h6>Highest Scores:{{HIGHEST_SCORE}}</h6>
    <h6>Best Bowling figures:{{BEST_BOWLING_FIGURES}}</h6>
     <h6>Team Name:{{TEAM_NAME}}</h6>
    </p>
  </div>
</div>
</div>`

const BatsmanRow = document.querySelector('.batsman-row');
const BowlerRow = document.querySelector('.bowler-row');
const AllRounderRow = document.querySelector('.all-rounder-row');
const dropdown = document.querySelector('#teams');
const searchInput = document.querySelector('#search-input');

const players=[
    {
      "name": "Virat Kohli",
      "matches":"100",
      "role":1,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":0,
      "team_id":4,
      "team_name":"IND",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/164.png"
    },
    {
      "name": "Hardik Pandya",
      "matches":"100",
      "role":2,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"1-23",
      "team_id":4,
      "team_name":"IND",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/2740.png"
    },
    {
      "name": "Jasprit Bumrah",
      "matches":"100",
      "role":3,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"5-23",
      "team_id":4,
      "team_name":"IND",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/1124.png"
    },
    {
      "name": "David Warner",
      "matches":"100",
      "role":1,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":0,
      "team_id":1,
      "team_name":"AUS",
      "image":"https://resources.pulse.icc-cricket.com/players/210/170.png"
    },
    {
      "name": "Glen Maxwell",
      "matches":"100",
      "role":2,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"1-23",
      "team_id":1,
      "team_name":"AUS",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/282.png"
    },
    {
      "name": "Pat Cummings",
      "matches":"100",
      "role":3,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"5-23",
      "team_id":1,
      "team_name":"AUS",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/488.png"
    },
    {
      "name": "Babar Azam",
      "matches":"100",
      "role":1,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":0,
      "team_id":6,
      "team_name":"PAK",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/2759.png"
    },
    {
      "name": "Shaheen Afridi",
      "matches":"100",
      "role":2,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"1-23",
      "team_id":6,
      "team_name":"PAK",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/4530.png"
    },
    {
      "name": "Haris Rauf",
      "matches":"100",
      "role":3,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"5-23",
      "team_id":6,
      "team_name":"PAK",
      "image":"https://static-files.cricket-australia.pulselive.com/headshots/288/3928-camedia.png"
    },
    {
      "name": "Jhonny Bairstow",
      "matches":"100",
      "role":1,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":0,
      "team_id":5,
      "team_name":"ENG",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/506.png"
    },
    {
      "name": "Ben Stokes",
      "matches":"100",
      "role":2,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"1-23",
      "team_id":5,
      "team_name":"ENG",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/1154.png"
    },
    {
      "name": "James Anderson",
      "matches":"100",
      "role":3,
      "runs":"10234",
      "50s":"23",
      "100s":"46",
      "highest_score":"183",
      "best_bowling_figures":"5-23",
      "team_id":5,
      "team_name":"ENG",
      "image":"https://resources.pulse.icc-cricket.com/players/130x150/900.png"
    }
  ];
  
  function showSearch(){
    
    
    let searchT = players.filter(playerInfo=> playerInfo.team_name.toUpperCase().includes(searchInput.value.toUpperCase()) || playerInfo.name.toUpperCase().includes(searchInput.value.toUpperCase()))
    // var searchP = players.filter(fname=>fname.name.toUpperCase().includes(searchInput.value.toUpperCase()));
    // var search  = [... new Set(searchT.concat(searchP))];
    let search = searchT

    if(search.length==0){
      // BatsmanRow.innerHTML="<h1> No such player or team found</h1>";
      // BowlerRow.innerHTML="";
      // AllRounderRow.innerHTML="";
      alert("no such player found")
      return
    }
    clearScreen();
    search.forEach((playerInfo,i)=>{

      if(playerInfo.role==1){
       let {name,matches,runs,highest_score,best_bowling_figures,team_name,image}=playerInfo;
       let fifties = playerInfo['50s'];
       let hundreds = playerInfo['100s'];
  
       let playerMarkup = cardMarkup
       .replace('{{IMAGE_NAME}}',image)
       .replace('{{PLAYER_NAME}}',name)
       .replace('{{MATCHES}}',matches)
       .replace('{{RUNS}}',runs)
       .replace('{{50s}}',fifties)
       .replace('{{100s}}',hundreds)
       .replace('{{HIGHEST_SCORE}}',highest_score)
       .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
       .replace('{{TEAM_NAME}}',team_name);
  
       BatsmanRow.innerHTML=BatsmanRow.innerHTML+playerMarkup
      }
      if(playerInfo.role==3){
        let {image,name,matches,runs,highest_score,best_bowling_figures,team_name}=playerInfo;
        let fifties =playerInfo['50s'];
        let hundreds = playerInfo['100s'];
  
        if (image === '') {
          image = 'https://resources.pulse.icc-cricket.com/players/130x150/4530.png';
        }
     
        let playerMarkup = cardMarkup
        .replace('{{IMAGE_NAME}}',image)
       .replace('{{PLAYER_NAME}}',name)
       .replace('{{MATCHES}}',matches)
       .replace('{{RUNS}}',runs)
       .replace('{{50s}}',fifties)
       .replace('{{100s}}',hundreds)
       .replace('{{HIGHEST_SCORE}}',highest_score)
       .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
       .replace('{{TEAM_NAME}}',team_name);
  
       BowlerRow.innerHTML = BowlerRow.innerHTML+playerMarkup
  
        
      }
      if(playerInfo.role==2){
        let {name,matches,runs,highest_score,best_bowling_figures,team_name,image}=playerInfo;
        let fifties =playerInfo['50s'];
        let hundreds = playerInfo['100s'];
  
        let playerMarkup = cardMarkup
      .replace('{{IMAGE_NAME}}',image)
       .replace('{{PLAYER_NAME}}',name)
       .replace('{{MATCHES}}',matches)
       .replace('{{RUNS}}',runs)
       .replace('{{50s}}',fifties)
       .replace('{{100s}}',hundreds)
       .replace('{{HIGHEST_SCORE}}',highest_score)
       .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
       .replace('{{TEAM_NAME}}',team_name);
  
       AllRounderRow.innerHTML = AllRounderRow.innerHTML+playerMarkup
  
      }
    })
  }
  
  function clearScreen(){
    BatsmanRow.innerHTML="<h1>Batsman</h1>";
    BowlerRow.innerHTML="<h1>Bowler</h1>";
    AllRounderRow.innerHTML="<h1>Allrounder</h1>";
  }

  document.addEventListener('DOMContentLoaded',(event)=>{
    ShowTeam();
  })
  function ShowTeam(){
    clearScreen();

    let selectedTeam = dropdown.options[dropdown.selectedIndex].text;

    
  players.forEach((playerInfo,i)=>{

    if(playerInfo.role==1 && (playerInfo.team_name == selectedTeam || selectedTeam == "ALL")){
     let {name,matches,runs,highest_score,best_bowling_figures,team_name,image}=playerInfo;
     let fifties = playerInfo['50s'];
     let hundreds = playerInfo['100s'];


     let playerMarkup = cardMarkup
     .replace('{{IMAGE_NAME}}',image)
     .replace('{{PLAYER_NAME}}',name)
     .replace('{{MATCHES}}',matches)
     .replace('{{RUNS}}',runs)
     .replace('{{50s}}',fifties)
     .replace('{{100s}}',hundreds)
     .replace('{{HIGHEST_SCORE}}',highest_score)
     .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
     .replace('{{TEAM_NAME}}',team_name);

     BatsmanRow.innerHTML=BatsmanRow.innerHTML+playerMarkup
    }
    if(playerInfo.role==3 && (playerInfo.team_name == selectedTeam || selectedTeam == "ALL")){
      let {image,name,matches,runs,highest_score,best_bowling_figures,team_name}=playerInfo;
      let fifties =playerInfo['50s'];
      let hundreds = playerInfo['100s'];

      if (image === '') {
        image = 'https://resources.pulse.icc-cricket.com/players/130x150/4530.png';
      }
   
      let playerMarkup = cardMarkup
      .replace('{{IMAGE_NAME}}',image)
     .replace('{{PLAYER_NAME}}',name)
     .replace('{{MATCHES}}',matches)
     .replace('{{RUNS}}',runs)
     .replace('{{50s}}',fifties)
     .replace('{{100s}}',hundreds)
     .replace('{{HIGHEST_SCORE}}',highest_score)
     .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
     .replace('{{TEAM_NAME}}',team_name);

     BowlerRow.innerHTML = BowlerRow.innerHTML+playerMarkup

      
    }
    if(playerInfo.role==2 && (playerInfo.team_name == selectedTeam || selectedTeam == "ALL")){
      let {name,matches,runs,highest_score,best_bowling_figures,team_name,image}=playerInfo;
      let fifties =playerInfo['50s'];
      let hundreds = playerInfo['100s'];

      let playerMarkup = cardMarkup
    .replace('{{IMAGE_NAME}}',image)
     .replace('{{PLAYER_NAME}}',name)
     .replace('{{MATCHES}}',matches)
     .replace('{{RUNS}}',runs)
     .replace('{{50s}}',fifties)
     .replace('{{100s}}',hundreds)
     .replace('{{HIGHEST_SCORE}}',highest_score)
     .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
     .replace('{{TEAM_NAME}}',team_name);

     AllRounderRow.innerHTML = AllRounderRow.innerHTML+playerMarkup

    // console.log()
    }
  })
}