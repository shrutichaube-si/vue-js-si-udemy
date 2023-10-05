const cardmarkup = `<div class="col">
<div class="card">
    <img class="card-img-top" src="{{IMAGE_NAME}}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{PLAYER_NAME}}</h5>
      <p class="card-text">
        <h6>Matches                 :{{MATCHES}}</h6>
        <h6>Runs                    :{{RUNS}}</h6>
        <h6>50/100                  :{{FIFTIES}}/{{HUNDREDS}}</h6>
        <h6>Highest Scores          :{{HIGHEST_SCORES}}</h6>
        <h6>Team Name               :{{TEAM_NAME}}</h6>
        <h6>Best Bowling Figures:   {{BEST_BOWLING_FIGURES}}</h6>
      </p>
    </div>
</div>
</div>`;

const batsman = document.querySelector('.batsman-row');
const bowler = document.querySelector('.bowler-row');
const allrounder = document.querySelector('.all-rounder-row');
const searchInput = document.querySelector('#key');
const dropdown = document.querySelector('#team')
// Data:
const players = [
    {
      name: 'Virat Kohli',
      matches: '101',
      role: 2,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: 0,
      team_id: 4,
      team_name: 'IND',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/164.png',
    },
    {
      name: 'Hardik Pandya',
      matches: '100',
      role: 3,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '1-23',
      team_id: 4,
      team_name: 'IND',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/2740.png',
    },
    {
      name: 'Jasprit Bumrah',
      matches: '100',
      role: 4,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '5-23',
      team_id: 4,
      team_name: 'IND',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/1124.png',
    },
    {
      name: 'David Warner',
      matches: '100',
      role: 2,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: 0,
      team_id: 1,
      team_name: 'AUS',
      image: 'https://resources.pulse.icc-cricket.com/players/210/170.png',
    },
    {
      name: 'Glen Maxwell',
      matches: '100',
      role: 3,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '1-23',
      team_id: 1,
      team_name: 'AUS',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/282.png',
    },
    {
      name: 'Pat Cummings',
      matches: '100',
      role: 4,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '5-23',
      team_id: 1,
      team_name: 'AUS',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/488.png',
    },
    {
      name: 'Babar Azam',
      matches: '100',
      role: 2,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: 0,
      team_id: 6,
      team_name: 'PAK',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/2759.png',
    },
    {
      name: 'Shaheen Afridi',
      matches: '100',
      role: 3,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '1-23',
      team_id: 6,
      team_name: 'PAK',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/4530.png',
    },
    {
      name: 'Haris Rauf',
      matches: '100',
      role: 4,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '5-23',
      team_id: 6,
      team_name: 'PAK',
      image: '',
    },
    {
      name: 'Jhonny Bairstow',
      matches: '100',
      role: 2,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: 0,
      team_id: 5,
      team_name: 'ENG',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/506.png',
    },
    {
      name: 'Ben Stokes',
      matches: '100',
      role: 3,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '1-23',
      team_id: 5,
      team_name: 'ENG',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/1154.png',
    },
    {
      name: 'James Anderson',
      matches: '100',
      role: 4,
      runs: '10234',
      '50s': '23',
      '100s': '46',
      highest_score: '183',
      best_bowling_figures: '5-23',
      team_id: 5,
      team_name: 'ENG',
      image: 'https://resources.pulse.icc-cricket.com/players/130x150/900.png',
    },
  ];

  function showSearch(){
    
    
    var searchT = players.filter(name=>name.team_name.toUpperCase().includes(searchInput.value.toUpperCase()))
    var searchP = players.filter(fname=>fname.name.toUpperCase().includes(searchInput.value.toUpperCase()));
    var search  = [... new Set(searchT.concat(searchP))];

    if(search.length==0){
      alert("no such player found")
      return
    }
    clearScreen();

    search.forEach((playerInfo,i)=>{

        if(playerInfo.role==1){
         let {name,matches,runs,highest_score,best_bowling_figures,team_name,image}=playerInfo;
         let fifties = playerInfo['50s'];
         let hundreds = playerInfo['100s'];
    
         let playermarkup = cardmarkup
         .replace('{{IMAGE_NAME}}',image)
         .replace('{{PLAYER_NAME}}',name)
         .replace('{{MATCHES}}',matches)
         .replace('{{RUNS}}',runs)
         .replace('{{50s}}',fifties)
         .replace('{{100s}}',hundreds)
         .replace('{{HIGHEST_SCORE}}',highest_score)
         .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
         .replace('{{TEAM_NAME}}',team_name);
    
         batsman.innerHTML=batsman.innerHTML+ playermarkup
        }
        if(playerInfo.role==3){
          let {image,name,matches,runs,highest_score,best_bowling_figures,team_name}=playerInfo;
          let fifties =playerInfo['50s'];
          let hundreds = playerInfo['100s'];
    
          if (image === '') {
            image = 'https://resources.pulse.icc-cricket.com/players/130x150/4530.png';
          }
       
          let playermarkup = cardmarkup
          .replace('{{IMAGE_NAME}}',image)
         .replace('{{PLAYER_NAME}}',name)
         .replace('{{MATCHES}}',matches)
         .replace('{{RUNS}}',runs)
         .replace('{{50s}}',fifties)
         .replace('{{100s}}',hundreds)
         .replace('{{HIGHEST_SCORE}}',highest_score)
         .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
         .replace('{{TEAM_NAME}}',team_name);
    
         bowler.innerHTML = bowler.innerHTML+ playermarkup
    
          
        }
        if(playerInfo.role==2){
          let {name,matches,runs,highest_score,best_bowling_figures,team_name,image}=playerInfo;
          let fifties =playerInfo['50s'];
          let hundreds = playerInfo['100s'];
    
          let playermarkup = cardmarkup
        .replace('{{IMAGE_NAME}}',image)
         .replace('{{PLAYER_NAME}}',name)
         .replace('{{MATCHES}}',matches)
         .replace('{{RUNS}}',runs)
         .replace('{{50s}}',fifties)
         .replace('{{100s}}',hundreds)
         .replace('{{HIGHEST_SCORE}}',highest_score)
         .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
         .replace('{{TEAM_NAME}}',team_name);
    
         allrounder.innerHTML = allrounder.innerHTML+playermarkup
    
        }
      })
    }
    
    function clearScreen(){
      batsman.innerHTML="<h1>Batsman</h1>";
      bowler.innerHTML="<h1>Bowler</h1>";
      allrounder.innerHTML="<h1>Allrounder</h1>";
    }
  
    document.addEventListener('DOMContentLoaded',(event)=>{
      ShowTeam();
    })
    function ShowTeam(){
      clearScreen();
  
      let selectedTeam = dropdown.options[dropdown.selectedIndex].text;
  


// Dropdown:
const teamSelector = document.getElementById('team');
teamSelector.addEventListener('change', function () {
const selectedTeam = teamSelector.value;


  batsman.innerHTML = '';
  bowler.innerHTML = '';
  allrounder.innerHTML = '';

  players.forEach((playerinfo) => {
    if (
      (playerinfo.role === 2 || playerinfo.role === '2') &&
      (selectedTeam === 'ALL' || playerinfo.team_name === selectedTeam)
    ) {
      let { image, name, matches, runs, highest_score, team_name, best_bowling_figures } = playerinfo;
      let fifties = playerinfo['50s'];
      let hundreds = playerinfo['100s'];

    
      let playermarkup = cardmarkup
        .replace('{{IMAGE_NAME}}', image)
        .replace('{{PLAYER_NAME}}', name)
        .replace('{{MATCHES}}', matches)
        .replace('{{RUNS}}', runs)
        .replace('{{FIFTIES}}', fifties)
        .replace('{{HUNDREDS}}', hundreds)
        .replace('{{HIGHEST_SCORES}}', highest_score)
        .replace('{{TEAM_NAME}}', team_name)
        .replace('{{BEST_BOWLING_FIGURES}}', best_bowling_figures);

      batsman.innerHTML += playermarkup;
    }

    if (
      (playerinfo.role === 4 || playerinfo.role === '4') &&
      (selectedTeam === 'ALL' || playerinfo.team_name === selectedTeam)
    ) {
      let { image, name, matches, runs, highest_score, team_name, best_bowling_figures } = playerinfo;
      let fifties = playerinfo['50s'];
      let hundreds = playerinfo['100s'];

      if (playerinfo.image === '') {
        image = 'https://www.icc-cricket.com/resources/prod/v8.32.0/i/elements/photo-missing.png';
      }

      
      let playermarkup = cardmarkup
        .replace('{{IMAGE_NAME}}', image)
        .replace('{{PLAYER_NAME}}', name)
        .replace('{{MATCHES}}', matches)
        .replace('{{RUNS}}', runs)
        .replace('{{FIFTIES}}', fifties)
        .replace('{{HUNDREDS}}', hundreds)
        .replace('{{HIGHEST_SCORES}}', highest_score)
        .replace('{{TEAM_NAME}}', team_name)
        .replace('{{BEST_BOWLING_FIGURES}}', best_bowling_figures);

      bowler.innerHTML += playermarkup;
    }

    if (
      (playerinfo.role === 3 || playerinfo.role === '3') &&
      (selectedTeam === 'ALL' || playerinfo.team_name === selectedTeam)
    ) {
      let { image, name, matches, runs, highest_score, team_name, best_bowling_figures } = playerinfo;
      let fifties = playerinfo['50s'];
      let hundreds = playerinfo['100s'];

      
      let playermarkup = cardmarkup
        .replace('{{IMAGE_NAME}}', image)
        .replace('{{PLAYER_NAME}}', name)
        .replace('{{MATCHES}}', matches)
        .replace('{{RUNS}}', runs)
        .replace('{{FIFTIES}}', fifties)
        .replace('{{HUNDREDS}}', hundreds)
        .replace('{{HIGHEST_SCORES}}', highest_score)
        .replace('{{TEAM_NAME}}', team_name)
        .replace('{{BEST_BOWLING_FIGURES}}', best_bowling_figures);

      allrounder.innerHTML += playermarkup;
    }
  });
})
    }