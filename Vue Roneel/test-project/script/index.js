const cardMarkup = `<div class="col">
<div class="card">
  <img src="{{IMAGE_NAME}}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{{PLAYER_NAME}}</h5>
    <p class="card-text">Matches:{{MATCHES}}</p>
    <p class="card-text">Runs:{{RUNS}}</p>
    <p class="card-text">50/100s: {{50s}}/{{100s}}</p>
    <p class="card-text">Highest Score: {{HIGHEST_SCORE}}</p>
    <p class="card-text">Team Name: {{TEAM_NAME}}</p>
    <p class="card-text">Best Bowling Figures: {{BEST_BOWLING_FIGURES}}</p>
  </div>
</div>
</div>`;

const batsmanRow = document.querySelector('.batsman-row');
const bowlerRow = document.querySelector('.bowler-row');
const allRounderRow = document.querySelector('.all-rounder-row');

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

players.forEach((playerInfo, i) => {
  // For Batsman
  if (playerInfo.role == 2) {
    let { image, name, matches, runs, highest_score, team_name, best_bowling_figures } = playerInfo;
    let fifties = playerInfo['50s'];
    let hundreds = playerInfo['100s'];

    let playerMarkup = cardMarkup
      .replace('{{IMAGE_NAME}}', image)
      .replace('{{PLAYER_NAME}}', name)
      .replace('{{MATCHES}}', matches)
      .replace('{{RUNS}}', runs)
      .replace('{{50s}}', fifties)
      .replace('{{100s}}', hundreds)
      .replace('{{HIGHEST_SCORE}}', highest_score)
      .replace('{{TEAM_NAME}}', team_name)
      .replace('{{BEST_BOWLING_FIGURES}}', best_bowling_figures);

    batsmanRow.innerHTML = batsmanRow.innerHTML + playerMarkup;
  }

  // For Bowler
  if (playerInfo.role == 4) {
    let { image, name, matches, runs, highest_score, team_name, best_bowling_figures } = playerInfo;
    let fifties = playerInfo['50s'];
    let hundreds = playerInfo['100s'];

    if (image === '') {
      image = 'https://www.icc-cricket.com/resources/prod/v8.32.0/i/elements/photo-missing.png';
    }

    let playerMarkup = cardMarkup
      .replace('{{IMAGE_NAME}}', image)
      .replace('{{PLAYER_NAME}}', name)
      .replace('{{MATCHES}}', matches)
      .replace('{{RUNS}}', runs)
      .replace('{{50s}}', fifties)
      .replace('{{100s}}', hundreds)
      .replace('{{HIGHEST_SCORE}}', highest_score)
      .replace('{{TEAM_NAME}}', team_name)
      .replace('{{BEST_BOWLING_FIGURES}}', best_bowling_figures);

    bowlerRow.innerHTML = bowlerRow.innerHTML + playerMarkup;
  }

  // For All-Rounder
  if (playerInfo.role == 3) {
    let { image, name, matches, runs, highest_score, team_name, best_bowling_figures } = playerInfo;
    let fifties = playerInfo['50s'];
    let hundreds = playerInfo['100s'];

    let playerMarkup = cardMarkup
      .replace('{{IMAGE_NAME}}', image)
      .replace('{{PLAYER_NAME}}', name)
      .replace('{{MATCHES}}', matches)
      .replace('{{RUNS}}', runs)
      .replace('{{50s}}', fifties)
      .replace('{{100s}}', hundreds)
      .replace('{{HIGHEST_SCORE}}', highest_score)
      .replace('{{TEAM_NAME}}', team_name)
      .replace('{{BEST_BOWLING_FIGURES}}', best_bowling_figures);

    allRounderRow.innerHTML = allRounderRow.innerHTML + playerMarkup;
  }
});
