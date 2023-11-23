<template>
    <link rel="stylesheet" href="../../css/mainpage.css">
  
<header class="site-header">
        		<div class="container-fluid clearfix">
        			<div class="pull-left">
        				<div class="site-logo">
        					<h1 class="logo">
        						<a><span>Sportz Interactive</span></a>
        					</h1>

        				</div>
        			</div>
        			<div class="pull-right right-wrap"><label>Match File Dashboard</label>
                        <span>  
							<button type="button" class="logout-btn" @click="logout()"></button>
                    </span>
                </div>
        		</div>
    	</header>
        <div class="si-match-schedule-container"></div>
		<div class="match-schedule-container"><div id="fixturesDiv" class="col-sm-12 col-md-8 col-lg-9 simc-site-leftcol">
	<div class="si-subtab-content simc-international-content">
		<div class="simc-select-filter tab-col-5">
			<ul>
				
				<select v-model="selectedYear" @click="changeYear" class="filter-by-Year" id="Year">
						<option class="filter-by-year" data-value="2023" data-type="year" value="2023">2023</option>
						<option class="filter-by-year" data-value="2022" data-type="year" value="2022">2022</option>
					</select>

				<select   class="filter-by-Series" v-model ="selectedSeries" id="Series">
				    <option value="" disabled selected>All Series</option>
					<option v-for = "series in seriesData" class="filter-by-series" >{{ series}}</option>
				</select>

               <!--Download CSV -->
				<button type="button" @click ="downloadCSV" class="export-as-csv" style="cursor:pointer;">Download CSV</button>
		
			</ul>
		</div>

		<div class="simc-result-data">
			<div class="simc-table simc-fixture-table"><div class="simc-table-tr"> 
	<div class="simc-table-th simc-tblDate"> <span>Date &amp; Time</span> </div> 
	<div class="simc-table-th simc-tblTeams"> <span>Teams</span> </div> 
	<div class="simc-table-th simc-tblMatch"> <span>Match</span> </div> 
	<div class="simc-table-th simc-tblStatus"> <span>Game Id</span> </div>
</div>

<div  v-for = "match in filterBySeries"  :key = match class="simc-table-tr manipulate matches-list" data-match_type="" data-year="2017" data-month="12" data-series="112" data-teama="5193" data-teamb="2242" data-venues="1" data-sport="football">
	<div class="simc-table-td simc-tblDate"> <span>{{ new Date (match.match_schedule_date ).toDateString()}} <em>23:30</em> (IST)</span> </div>
	<div class="simc-table-td simc-tblTeams"> <span>{{ match.teama_info[0].country_name }} vs {{ match.teamb_info[0].country_name }}</span> </div>
	<div class="simc-table-td simc-tblMatch"> <span class="simc-txt1">{{ match.tourname }}</span>  </div>
	<div class="simc-table-td simc-tblStatus match-with-mc">
	<div class="game-id-Wrap">
	
	<span class="game-id">{{match.tour_id +':' + 7 + ':' + match.match_id }}</span>

	<!--Clip Board-->
	<button type="button" @click = "copytoClipBoard(match)"  data-copy="25463" class="copy-game-id" style="cursor:pointer;" title="Copy to Clipboard"></button>
		<input type="text" id="25463" value="25463:2:chlg" style="opacity:0;width:1px">
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
import config from "../../config/config"
import axios from "axios";
import * as FileSaver from "file-saver";



export default{
    data(){
        return {
         
            sports :[],
            selectedYear:null,
            selectedSeries:null,
			series :[],
			seriesData :[],
		


        }
    },
	computed :{
		filterBySeries(){
          try{
	
			if  (this.selectedSeries === null || this.selectedSeries === "")
			{
				return this.sports
			}
			else 
			{
			const filterSeries = this.sports.filter((data)=>data.seriesname === this.selectedSeries )
			return filterSeries
			}
		}
			
		  catch(error)
		  {
			console.log("Error" ,error)
		  }
		
	
		
	}
},
    methods :{      
        logout(){
            console.log('HELLO')
            this.$router.push("/");
        }
        ,
		copytoClipBoard(data){
			try{
                   const gameid = data.tour_id + ':' +  data.series_id + ':' + data.match_id 
                   navigator.clipboard.writeText(gameid)
				   alert("Text copied to clipboard: " + gameid)
			}
			catch (err){
				console.error('Error fetching data:', err);
				alert("Copy to clipboard failed.");
			}
		},

		async changeYear() {
        try {
        const tourIds = this.selectedtourId();
        const res = {
          matches: [],
        };
          const tourDataPromises = tourIds.map(async (tourId) => {
          return axios.get(config.path.replace("{{TOUR_ID}}", tourId));
        });
        const responseArray=await Promise.all(tourDataPromises);
		console.log(responseArray,'responseArray');
      } catch (e) {

        console.log(e);
      }
    },
		downloadCSV(){
			try {
                const csvContent = this.generateCSV();
                const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
                FileSaver.saveAs(blob, "data.csv");

            } catch (err) {
                console.error("Error generating CSV:", err);
            }

		},
		generateCSV() {
            const header = "Date & Time,Teams,Match,Game Id";
            const rows = this.sports.map(match => {
                const date = new Date(match.match_schedule_date).toDateString() + " 23:30 (IST)";
                const teams = `${match.teama_info[0].country_name} vs ${match.teamb_info[0].country_name}`;
                const tournament = match.tourname;
                const gameId = `${match.tour_id}:${7}:${match.match_id}`;
                return `${date},${teams},${tournament},${gameId}`;
            });

            return `${header}\n${rows.join("\n")}`;
        },
		selectedtourId() {
        return  config.years.find((yearData) => this.selectedYear == yearData.year).tourIds;
	
     },
    },

      

	
	mounted: async function () {
            try {
                this.selectedYear = config.years.find(yearData=>yearData.isDefault).year
                let tourIds = this.selectedtourId();
                let res = {
                    matches:[]
                }
                    const tourDataPromises = tourIds.map(async(tourId)=>{
                    const tourData = await axios.get(config.path.replace("{{TOUR_ID}}",tourId));
                    res.matches = res.matches.concat(tourData.data.calendar.matches);
                });
                const matchesArray = await Promise.all(tourDataPromises);

                this.sports = res.matches;

				//Series
                this.series = res.matches;
                this.seriesData = this.series.map(value => value.seriesname)
                this.seriesData = [...new Set(this.seriesData)];
            } catch (error) {
                console.error("Error occured", error)
            }
        }
}


</script>
