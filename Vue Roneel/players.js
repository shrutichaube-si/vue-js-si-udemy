const cardMarkup = `<div class="col">
<div class="card">
    <img src="{{IMAGE_NAME}}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{PLAYER_NAME}}</h5>
        <p class="card-text">Matches: {{MATCHES}}</p>
        <p class="card-text">Runs: {{RUNS}}</p>
        <p class="card-text">50/100s: {{50s}}/{{100s}}</p>
        <p class="card-text">Highest Score: {{HIGHEST_SCORE}}</p>
        <p class="card-text">Team Name: {{TEAM_NAME}}</p>
        <p class="card-text">Best Bowling Figures: {{BEST_BOWLING_FIGURES}}</p>
    </div>
</div>
</div>`;

const originalPlayers = [
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

let players = [...originalPlayers]; // Create a copy for filtering
const dropdown = document.querySelector('#team_name');
const batsmanRow = document.querySelector('.batsman-row');
const bowlerRow = document.querySelector('.bowler-row');
const allrounderRow = document.querySelector('.all-rounder-row');
let Teams = dropdown.options[dropdown.selectedIndex].value;

function renderPlayers() {
    // Clear existing player rows
    batsmanRow.innerHTML = '';
    bowlerRow.innerHTML = '';
    allrounderRow.innerHTML = '';

    

    players.forEach((playerInfo,i) => {
        if(playerInfo.role == 2 && (playerInfo.team_name == Teams || Teams == "ALL"))
        {
          let{image,name,matches,runs,highest_score,team_name,best_bowling_figures} = playerInfo;
          let fifties = playerInfo['50s'];
          let hundreds = playerInfo['100s'];
         /*
         In JavaScript when object properties have special characters spaces or start with a number, 
         you can use square brackets and a string to access those properties. 
         In this case, you are accessing properties with names "50s" and "100s," 
         which appear to represent the number of fifties and hundreds scored by a cricket player, 
         respectively.
          */
        let playerMarkup = cardMarkup 
        .replace('{{IMAGE_NAME}}',image)
        .replace('{{PLAYER_NAME}}',name)
        .replace('{{MATCHES}}',matches)
        .replace('{{RUNS}}',runs)
        .replace('{{50s}}',fifties)
        .replace('{{100s}}',hundreds)
        .replace('{{HIGHEST_SCORE}}',highest_score)
        .replace('{{TEAM_NAME}}',team_name)
        .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
        batsmanRow.innerHTML = batsmanRow.innerHTML +playerMarkup;
        }
        
        if(playerInfo.role == 4 && (playerInfo.team_name == Teams || Teams == "ALL")){
            let{image,name,matches,runs,highest_score,team_name,best_bowling_figures} = playerInfo;
            let fifties = playerInfo['50s'];
            let hundreds = playerInfo['100s'];
            if(image === ''){
                image = 'https://www.icc-cricket.com/resources/prod/v8.32.0/i/elements/photo-missing.png';
            }
          let playerMarkup = cardMarkup
          .replace('{{IMAGE_NAME}}',image)
          .replace('{{PLAYER_NAME}}',name)
          .replace('{{MATCHES}}',matches)
          .replace('{{RUNS}}',runs)
          .replace('{{50s}}',fifties)
          .replace('{{100s}}',hundreds)
          .replace('{{HIGHEST_SCORE}}',highest_score)
          .replace('{{TEAM_NAME}}',team_name)
          .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
          bowlerRow.innerHTML = bowlerRow.innerHTML + playerMarkup;
        }
        if(playerInfo.role == 3 && (playerInfo.team_name == Teams || Teams == "ALL"))
        {
        let {image,name,matches,runs,highest_score,team_name,best_bowling_figures} = playerInfo;
        let fifties = playerInfo['50s']
        let hundreds = playerInfo['100s']
        
         let playerMarkup = cardMarkup
         .replace('{{IMAGE_NAME}}',image)
         .replace('{{PLAYER_NAME}}',name)
         .replace('{{MATCHES}}',matches)
         .replace('{{RUNS}}',runs)
         .replace('{{50s}}',fifties)
         .replace('{{100s}}',hundreds)
         .replace('{{HIGHEST_SCORE}}',highest_score)
         .replace('{{TEAM_NAME}}',team_name)
         .replace('{{BEST_BOWLING_FIGURES}}',best_bowling_figures)
         allrounderRow.innerHTML = allrounderRow.innerHTML + playerMarkup;
        }        
        })

          }

          // Initial rendering of players
renderPlayers();

// Function to filter players by name and team
function searchPlayers() {
    const searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();
    Teams = dropdown.options[dropdown.selectedIndex].value;
    players = originalPlayers.filter((player) => {
        const playerName = player.name.toLowerCase();
        const playerTeam = player.team_name.toLowerCase();
        return playerName.includes(searchQuery) && (Teams == "ALL" || playerTeam.includes(Teams.toLowerCase()));
    });

    // Re-render the players based on the search results
    renderPlayers();
}
