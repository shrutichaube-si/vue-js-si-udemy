<template>
    <header class="site-header">
        <div class="container-fluid clearfix">
            <div class="pull-left">
                <div class="site-logo">
                    <h1 class="logo">
                        <a><span>Sportz Interactive</span></a>
                    </h1>
                </div>
            </div>
            <div class="pull-right right-wrap">
                <label>Match File Dashboard</label><span><button @click="logout" type="button"
                        class="logout-btn"></button></span>
            </div>
        </div>
    </header>
    <div class="simc-select-filter tab-col-5">
        <ul>
            <select v-model="selectedYear" @change="changeYear()" placeholder="select year" class="filter-by-Year"
                id="Year">
                <option class="filter-by-year">2022</option>
                <option class="filter-by-year">2023</option>
            </select>
            <select v-model="selectedSeries" class="filter-by-Series" id="Series">
                <option value="series">All series</option>
                <option v-for="series in seriesnameArray" :key="series" class="filter-by-series">{{ series }} </option>
            </select>
            <button @click="downloadCSV" type="button" class="export-as-csv" style="cursor:pointer;">Download CSV</button>
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
            <div v-for="match in getDataBySeries" :key="match" class="simc-table-tr manipulate matches-list">
                <div class="simc-table-td simc-tblDate"> <span>{{ new Date(match.match_schedule_date).toDateString() }} {{
                    match.matchtime_gmt }} </span></div>
                <div class="simc-table-td simc-tblTeams"> <span>{{ match.teama_info[0].country_name }} vs {{
                    match.teamb_info[0].country_name }}</span> </div>
                <div class="simc-table-td simc-tblMatch"> <span class="simc-txt1">{{ match.comp_type }}</span> </div>
                <div class="simc-table-td simc-tblStatus match-with-mc">
                    <div class="game-id-Wrap">
                        <span class="game-id"> {{ match.tour_id }}:7:{{ match.series_id }} </span>
                        <button @click="copyDataById(match)" type="button" class="copy-game-id" style="cursor:pointer;"
                            title="Copy to Clipboard"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../style/homepage.css";
import axios from 'axios'
import config from '../../config/config';
export default {
    data: () => ({
        selectedYear: null,
        selectedSeries: 'series',
        matchInfo: [],
        seriesInfo: [],
        seriesnameArray: [],
        selectedYearData: [],
        selectedSeriesData: [],
    }),
    methods: {
        logout() {
            //this.$emit("emitStatus",'logout');
            sessionStorage.setItem("status", "logout");
            window.location.reload();
        },
        copyDataById(match) {
            const dataToCopy = `${match.tour_id}:${match.series_id}:${match.match_id}`;
            try {
                navigator.clipboard.writeText(dataToCopy);
            } catch (error) {
                console.error("Error copying data", error);
            }
        },
        async changeYear() {
            try {
                let tourIds = this.getSelectedYearTourIds();
                let res = {
                    matches: []
                }
                const tourDataPromises = tourIds.map(async (tourId) => {
                    const tourData = await axios.get(config.feedPath.replace("{{TOUR_ID}}", tourId));
                    res.matches = res.matches.concat(tourData.data.calendar.matches);
                });
                const matchesArray = await Promise.all(tourDataPromises);
                this.matchInfo = res.matches;
                this.seriesInfo = res.matches;
                this.seriesnameArray = this.seriesInfo.map(element => element.match.seriesname)
                this.seriesnameArray = [...new Set(this.seriesnameArray)];
            } catch (e) {
                console.log(e)
            }
        },
        getSelectedYearTourIds() {
            return config.years.find(yearInfo => this.selectedYear == yearInfo.year).tourIds
        },
        convertToCSV(jsonData) {
            try {
                const csvArray = [];
                const header = Object.keys(jsonData[0]);
                csvArray.push(header.join(','));
                jsonData.forEach(item => {
                    const values = header.map(key => item[key]);
                    csvArray.push(values.join(','));
                });
                return csvArray.join('\n')
            } catch (error) {
                console.error("Error Occured", error)
            }
        },
        async downloadCSV() {
            try {
                const jsonData = this.getDataBySeries.map((data) => { return { Date: data.matchdate_gmt, Time: data.matchtime_gmt, Match: data.teama_info[0].name + " vs " + data.teamb_info[0].name, Match: data.comp_type, Tourid: data.tour_id + ":" + "7" + ":" + data.series_id } });
                console.log(jsonData);
                const csvData = this.convertToCSV(jsonData);
                const blob = new Blob([csvData], { type: 'text/csv' });
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'data.csv';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error("Error occured", error)
            }
        },
    },
    computed: {
        getDataBySeries() {
            try {
                this.selectedSeriesData = this.seriesInfo.filter(element => this.selectedSeries == 'series' || element.seriesname == this.selectedSeries)
                return this.selectedSeriesData;
            } catch (error) {
                console.log('Error occured', error)
            }
        },
    },
    mounted: async function () {
        try {
            this.selectedYear = config.years.find(yearInfo => yearInfo.isDefault).year
            let tourIds = this.getSelectedYearTourIds();
            let res = {
                matches: []
            }
            const tourDataPromises = tourIds.map(async (tourId) => {
                const tourData = await axios.get(config.feedPath.replace("{{TOUR_ID}}", tourId));
                res.matches = res.matches.concat(tourData.data.calendar.matches);
            });
            const matchesArray = await Promise.all(tourDataPromises);
            this.matchInfo = res.matches;
            this.seriesInfo = res.matches;
            this.seriesnameArray = this.seriesInfo.map(element => element.seriesname)
            this.seriesnameArray = [...new Set(this.seriesnameArray)];
        } catch (error) {
            console.error("Error occured", error)
        }
    }
};
</script>