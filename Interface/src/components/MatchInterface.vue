<template>
    <link rel="stylesheet" type="text/css" href="/src/styles/login.css"/>
    <link rel="stylesheet" type="text/css" href="/src/styles/matchcenter.css"/>
    <link rel="stylesheet" type="text/css" href="/src/styles/responsive.css"/>
    <link rel="stylesheet" type="text/css" href="/src/styles/fonts.css"/>

    <header class="site-header">
        		<div class="container-fluid clearfix">
        			<div class="pull-left">
        				<div class="site-logo">
        					<h1 class="logo">
        						<a href="#"><span>Sportz Interactive</span></a>
        					</h1>

        				</div>
        			</div>
        			<div class="pull-right right-wrap"><label>Match File Dashboard</label><span>
                        <button type="button" class="logout-btn" @click="logout"></button></span></div>
        		</div>
    	</header>
		<div class="si-match-schedule-container"></div>
		<div class="match-schedule-container"><div id="fixturesDiv" class="col-sm-12 col-md-8 col-lg-9 simc-site-leftcol">
	    <div class="si-subtab-content simc-international-content">
		<div class="simc-select-filter tab-col-5">
			<ul>
					<!-- <select class="filter-by-Sport" id="Sport">
					<option class="filter-by-sport" data-value="2" data-type="sport" value="2">Tennis</option>
				    </select> -->
				
					<select class="filter-by-Year" v-model="selectedYear" @click="changeYear" id="Year">
					<option class="filter-by-year">2022</option>
					<option class="filter-by-year">2023</option>
					</select>
					<select class="filter-by-Series" id="Series" v-model="Series">
					<option value="" disabled selected>All Series</option>
					<option class="filter-by-series" v-for="series in uniqueSeries" :key="series.series_id">{{ series.seriesname }}</option>
				    </select>

				<button type="button" class="export-as-csv" @click="downloadCsv" style="cursor:pointer;">Download CSV</button>
				<!-- <button type="button" class="reset-to-default" style="cursor:pointer;">Reset</button> -->
			</ul>
		</div>

	<div class="simc-result-data">
	<div class="simc-table simc-fixture-table">
	<div class="simc-table-tr"> 
	<div class="simc-table-th simc-tblDate"> <span>Date &amp; Time</span> </div> 
	<div class="simc-table-th simc-tblTeams"> <span>Teams</span> </div> 
	<div class="simc-table-th simc-tblMatch"> <span>Match</span> </div> 
	<div class="simc-table-th simc-tblStatus"> <span>Game Id</span> </div>
    </div>

    <div v-for="tennis in filteredSeries" :key="tennis" class="simc-table-tr manipulate matches-list" >
	<div class="simc-table-td simc-tblDate"> <span>{{ new Date (tennis.match_schedule_date).toDateString() }}</span> </div>
	<div class="simc-table-td simc-tblTeams"> <span>{{ tennis.teama_info[0].country_name }} vs {{ tennis.teamb_info[0].country_name }}</span> </div>
	<div class="simc-table-td simc-tblMatch"> <span class="simc-txt1"> {{ tennis.comp_type }}</span>  </div>
	<div class="simc-table-td simc-tblStatus match-with-mc">
	<div class="game-id-Wrap">
	
	<span class="game-id">{{ tennis.tour_id }}:7:{{ tennis.match_id }}</span>
	<button type="button" @click="copyId(tennis.tour_id,7,tennis.match_id)" class="copy-game-id" style="cursor:pointer;" title="Copy to Clipboard"></button>
	
	</div> 
	</div>
</div>
</div>
		</div>
		<div class="no-data-avail" style="text-align:center;display:none;">No Data Available</div>
		<div>
	</div>
</div>
</div></div>
</template>

<script>
import axios from 'axios';
import config from '../JS/config';

export default {
    data(){
        return{
			Series:'',
			gameId:[],
			FootBall:[],
			Cricket:[],
			Tennis:[],
			selectedSport:'',
			selectedYear:'',
			Year:[],
        }
    },
    methods:{
        logout(){
            sessionStorage.setItem("login","false")
            window.location.reload()
        },
		formatDate(date) {
      return moment(date).tz('Asia/Kolkata').format(this.newFormatString);
    },
		copyId(tourId,sportId,matchId){
			
			const gameIdtoCopy = `${tourId}:${sportId}:${matchId}`;
			const textarea = document.createElement('textarea');
			textarea.value = gameIdtoCopy
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			alert('Game Id has been copied in clipboard' +  gameIdtoCopy)
	
		},
		async changeYear(){
			try {
            let tourInfo = this.getSelectedYearTourInfo();
           if (!tourInfo) {
              console.error(`Tour information not found for year ${this.selectedYear}`);
              return;
            }
                  let res = {
                    matches: []
                  };

              const tourDataPromises = tourInfo.tourIds.map(async (tourId) => {
              const tourData = await axios.get(config.feedPath.replace("{{TOUR_ID}}", tourId));
             res.matches = res.matches.concat(tourData.data.calendar.matches);
              });
 
                await Promise.all(tourDataPromises);

                this.Tennis = res.matches;
                this.gameId = res.matches;
        }           
            catch (e) {
              console.error(e);
            }        
            },
		getSelectedYearTourInfo() {
                return config.years.find((yearInfo) => this.selectedYear == yearInfo.year);
           },


		   downloadCsv(){
			try {
				if(!this.Series){
					alert("Please select the series first")
				} else{
				const selectedSeriesData = this.filteredSeries;
				const csvContent =  "Date & Time,Teams,Match,GameId\n" + 
				selectedSeriesData.map(row => {
                    const dateAndTime = row.match_schedule_date;
                    const teams = `${row.teama_info[0].country_name} vs ${row.teamb_info[0].country_name}`;
                    const match = row.comp_type;
                    const gameId = `${row.tour_id}:7:${row.match_id}`;

                    return [dateAndTime, teams, match, gameId].join(",");
                }).join("\n");

				const blob = new Blob ([csvContent],{ type:"text/csv;charset=utf-8;"});
				 
				const link = document.createElement("a");
				link.href = URL.createObjectURL(blob);
				link.download = `data_${this.Series}.csv`;

				document.body.appendChild(link);
				link.click();

				document.body.removeChild(link);
			}
			} catch (error) {
				console.error("Error Downloading FIle",error)
			}
		   }
    },
	computed:{
		uniqueSeries(){
			const uniqueSeriesMap = new Map();
			this.Tennis.forEach((tennis) => {
				uniqueSeriesMap.set(tennis.series_id,{
					series_id:tennis.series_id,
					seriesname:tennis.seriesname
				})
			})
			return Array.from(uniqueSeriesMap.values())
		},
		filteredSeries(){
			if(!this.Series){
				return this.Tennis;
			}
			else
			{
				const FilteredData = this.Tennis.filter((tennis) => tennis.seriesname === this.Series)
				
				return FilteredData;
			}
		}
	},
	mounted: async function() {
        try {
    this.selectedYear = config.years.find((yearInfo) => yearInfo.isDefault).year;
	
    let tourObject = this.getSelectedYearTourInfo();
	const tourIds=tourObject.tourIds
	
    if (!Array.isArray(tourIds)) {
        throw new Error('Tour IDs are not in the expected format');
    }
    let res = {
        matches: []
    };
 
    const tourDataPromises = tourIds.map(async (tourId) => {
        try {
            const tourData = await axios.get(config.feedPath.replace("{{TOUR_ID}}", tourId));
            res.matches = res.matches.concat(tourData.data.calendar.matches);
           
        } catch (tourError) {
            console.error(`Error fetching data for tourId ${tourId}`, tourError);
        }
    });
    await Promise.all(tourDataPromises);
   
    this.Tennis = res.matches;
    this.gameId = res.matches;
    } 
	catch (error) {
    console.error("Error Occurred in mounted", error);
      }
	}
}
</script>

<style>
.site-logo .logo a {
	    display: block;
	    width: 250px;
	    height: 55px;
	    background-repeat: no-repeat;
	    background-size: auto 100%;
	    background-image: url(../Images/sportz-logo.png);
	    text-decoration: none;
	    text-indent: -9999px;
	}
	.right-wrap{
	    display: flex;
	    justify-content:flex-end;
	    align-items:center;
	  }
	  .logout-btn{		
	    background: url(../Images/logout.png) center no-repeat;
	    width: 30px;
	    height: 30px;
	    border: none;
	    background-size: contain;
	    color: rgba(0, 0, 0, 0);
	    cursor: pointer;
	    outline: none;
	  }
</style>