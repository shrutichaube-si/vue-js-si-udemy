const cardmarkup = `
                <div class="col">
                <div class="card">
                    <img class="card-img-top" src="{{IMAGE_NAME}}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">{{PLAYER_NAME}}</h5>
                      <p class="card-text">
                        <h6>Matches  :{{MATCHES}}</h6>
                        <h6>Runs     :{{RUNS}}</h6>
                        <h6>50/100   :{{50s}}/{{100s}}</h6>
                        <h6>Highest Scores  :{{HIGHEST_SCORES}}</h6>
                        <h6>Team Name :{{TEAM_NAME}}</h6>
                        <h6>Best Bowling Figures:{{BEST_BOWLING_FIGURES}}</h6>
                      </p>
                    </div>
`

const batsman    = document.querySelector('.batsman-row')
const bowler     = document.querySelector('.bowler-row')
const allrounder = document.querySelector('.all-rounder-row')
const dropdown   = document.querySelector ('#team')
const selectedTeam = "all"

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
let filteredPlayers = [...players]
const filterPlayersByTeam = () => {
  if(selectedTeam === "all")return players;
  return players.filter(player =>player.team_name === selectedTeam  .toLowerCase())
};

const changeTeam = () => {
  filteredPlayers = filterPlayersByTeam()
  populatePlayers()
}

const getElement = (role) => {
  switch(role){
    case 2: return batsman;
    case 3: return allrounder;
    case 4: return bowler;
  }
}

const populatePlayers = () => {
  batsman.innerHTML = ''
  bowler.innerHTML = ''
  allrounder.innerHTML = ''
  filteredPlayers.forEach(playerinfo => {

    let {image,name,matches,runs,highest_score,team_name,best_bowling_figures,role} = playerinfo;
      let fifties  = playerinfo["50s"];
      let hundreds = playerinfo["100s"];
    
  
    let playermarkup = cardmarkup
    .replace('{{IMAGE_NAME}}',image)
    .replace('{{PLAYER_NAME}}',name)
    .replace('{{MATCHES}}',matches)
    .replace('{{RUNS}}',runs)
    .replace('{{50s}}',fifties)
    .replace('{{100s}}',hundreds)
    .replace('{{HIGHEST_SCORES}}',highest_score)
    .replace('{{TEAM_NAME}}',team_name)
    .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
  
    const element = getElement(role);
    element.innerHTML = element.innerHTML + playermarkup
  })

}
populatePlayers()

let selectedValue = dropdown.options[dropdown.selectedIndex].text;
// players.forEach((playerinfo) => {
//   // console.log(playerinfo)
 
//   if(playerinfo.role == 2 && (playerinfo.team_name == selectedValue || selectedValue == "ALL"))
//   {
//     let {image,name,matches,runs,highest_score,team_name,best_bowling_figures} = playerinfo;
//     let fifties  = playerinfo["50s"];
//     let hundreds = playerinfo["100s"];
  

//   let playermarkup = cardmarkup
//   .replace('{{IMAGE_NAME}}',image)
//   .replace('{{PLAYER_NAME}}',name)
//   .replace('{{MATCHES}}',matches)
//   .replace('{{RUNS}}',runs)
//   .replace('{{50s}}',fifties)
//   .replace('{{100s}}',hundreds)
//   .replace('{{HIGHEST_SCORES}}',highest_score)
//   .replace('{{TEAM_NAME}}',team_name)
//   .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)

//   batsman.innerHTML = batsman.innerHTML+ playermarkup
  
//   }
 
//   if(playerinfo.role == 4 && (playerinfo.team_name == selectedValue || selectedValue == "ALL"))
//   {
//     let {image,name,matches,runs,highest_score,team_name,best_bowling_figures} = playerinfo;
//     let fifties  = playerinfo["50s"];
//     let hundreds = playerinfo["100s"];
  
//     if (image === '') {
//       image = 'https://www.icc-cricket.com/resources/prod/v8.32.0/i/elements/photo-missing.png';
//     }

//   let playermarkup = cardmarkup
//   .replace('{{IMAGE_NAME}}',image)
//   .replace('{{PLAYER_NAME}}',name)
//   .replace('{{MATCHES}}',matches)
//   .replace('{{RUNS}}',runs)
//   .replace('{{50s}}',fifties)
//   .replace('{{100s}}',hundreds)
//   .replace('{{HIGHEST_SCORES}}',highest_score)
//   .replace('{{TEAM_NAME}}',team_name)
//   .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)

//   bowler.innerHTML = bowler.innerHTML+ playermarkup
  
//   }

//   if(playerinfo.role == 3 && (playerinfo.team_name == selectedValue || selectedValue == "ALL"))
//   {
//     let {image,name,matches,runs,highest_score,team_name,best_bowling_figures} = playerinfo;
//     let fifties  = playerinfo["50s"];
//     let hundreds = playerinfo["100s"];
  
//     if (image === '') {
//       image = 'https://www.icc-cricket.com/resources/prod/v8.32.0/i/elements/photo-missing.png';
//     }

//   let playermarkup = cardmarkup
//   .replace('{{IMAGE_NAME}}',image)
//   .replace('{{PLAYER_NAME}}',name)
//   .replace('{{MATCHES}}',matches)
//   .replace('{{RUNS}}',runs)
//   .replace('{{50s}}',fifties)
//   .replace('{{100s}}',hundreds)
//   .replace('{{HIGHEST_SCORES}}',highest_score)
//   .replace('{{TEAM_NAME}}',team_name)
//   .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)

//   allrounder.innerHTML = allrounder.innerHTML+ playermarkup
  
//   }


//  //DROPDOWN
  


 





// })