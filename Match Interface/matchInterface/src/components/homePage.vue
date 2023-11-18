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

    <!-- <div class="match-schedule-container">
        <div id="fixturesDiv" class="col-sm-12 col-md-8 col-lg-9 simc-site-leftcol">
            <div class="si-subtab-content simc-international-content">
                <div class="simc-select-filter tab-col-5">
                    <ul>
                        <li class="simc-filterDropDown Sport">
                            <div class="simc-listcontent">
                                <span>Sport</span>
                                <div class="simc-select-drop">
                                    <div class="simc-content-wrap">
                                        <ul id="Sport"></ul>
                                    </div>
                                    </div>
                            </div>
                        </li>
                        <select class="filter-by-Sport" id="Sport">
                            <option class="filter-by-sport" data-value="2" data-type="sport" value="2">
                                Football
                            </option>
                            <option class="filter-by-sport" data-value="1" data-type="sport" value="2">
                                Cricket
                            </option>
                        </select>

                        <li class="simc-filterDropDown  Year">
					<div class="simc-listcontent "><span>Year</span>
					<div class="simc-select-drop">
					<div class="simc-content-wrap"> 
						<ul id="Year">
							
								<li class='filter-by2017' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>2017</span></div>
								</li>
							
								<li class='filter-by2018' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>2018</span></div>
								</li>
							
								<li class='filter-by2020' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>2020</span></div>
								</li>
							
								<li class='filter-by2021' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>2021</span></div>
								</li>
							
								<li class='filter-by2022' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>2022</span></div>
								</li>
							
								<li class='filter-by2023' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>2023</span></div>
								</li>
							
								<li class='filter-by2024' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>2024</span></div>
								</li>
							
						</ul> 
					</div> 
					</div> 
					</div>
					</li>
                        <select class="filter-by-Year" id="Year">
                            <option class="filter-by-year" data-value="2017" data-type="year" value="2017">
                                2017
                            </option>
                            <option class="filter-by-year" data-value="2018" data-type="year" value="2018">
                                2018
                            </option>
                            <option class="filter-by-year" data-value="2020" data-type="year" value="2020">
                                2020
                            </option>
                            <option class="filter-by-year" data-value="2021" data-type="year" value="2021">
                                2021
                            </option>
                            <option class="filter-by-year" data-value="2022" data-type="year" value="2022">
                                2022
                            </option>
                            <option class="filter-by-year" data-value="2023" data-type="year" value="2023">
                                2023
                            </option>
                            <option class="filter-by-year" data-value="2024" data-type="year" value="2024">
                                2024
                            </option>
                        </select>

                         <li class="simc-filterDropDown  Month">
					<div class="simc-listcontent "><span>Month</span>
					<div class="simc-select-drop">
					<div class="simc-content-wrap"> 
						<ul id="Month">
							
								<li class='filter-byJanuary' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>January</span></div>
								</li>
							
								<li class='filter-byFebruary' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>February</span></div>
								</li>
							
								<li class='filter-byMarch' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>March</span></div>
								</li>
							
								<li class='filter-byApril' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>April</span></div>
								</li>
							
								<li class='filter-byMay' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>May</span></div>
								</li>
							
								<li class='filter-byJune' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>June</span></div>
								</li>
							
								<li class='filter-byJuly' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>July</span></div>
								</li>
							
								<li class='filter-byAugust' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>August</span></div>
								</li>
							
								<li class='filter-bySeptember' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>September</span></div>
								</li>
							
								<li class='filter-byOctober' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>October</span></div>
								</li>
							
								<li class='filter-byNovember' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>November</span></div>
								</li>
							
								<li class='filter-byDecember' data-value="2017" data-type="year">
									<div class="simc-list-content"><span>December</span></div>
								</li>
					<li class="simc-filterDropDown  Series">
					<div class="simc-listcontent "><span>Series</span>
					<div class="simc-select-drop">
					<div class="simc-content-wrap"> 
						<ul id="Series">
							
						</ul> 
					</div> 
					</div> 
					</div>
					</li> 
					</li> 
					<select class="filter-by-Month" id="Month"><option class="filter-by-month" data-value="01" data-type="month" value="01">January</option><option class="filter-by-month" data-value="02" data-type="month" value="02">February</option><option class="filter-by-month" data-value="03" data-type="month" value="03">March</option><option class="filter-by-month" data-value="04" data-type="month" value="04">April</option><option class="filter-by-month" data-value="05" data-type="month" value="05">May</option><option class="filter-by-month" data-value="06" data-type="month" value="06">June</option><option class="filter-by-month" data-value="07" data-type="month" value="07">July</option><option class="filter-by-month" data-value="08" data-type="month" value="08">August</option><option class="filter-by-month" data-value="09" data-type="month" value="09">September</option><option class="filter-by-month" data-value="10" data-type="month" value="10">October</option><option class="filter-by-month" data-value="11" data-type="month" value="11">November</option><option class="filter-by-month" data-value="12" data-type="month" value="12">December</option></select>
				
					<li class="simc-filterDropDown  Series">
					<div class="simc-listcontent "><span>Series</span>
					<div class="simc-select-drop">
					<div class="simc-content-wrap"> 
						<ul id="Series">
							
						</ul> 
					</div> 
					</div> 
					</div>
					</li>
                        <select class="filter-by-Series" id="Series">
                            <option value="">Series</option>
                            <option class="filter-by-series" data-value="494" data-type="series" value="494"
                                data-sport="football">
                                DFB-Pokal, 2023/24
                            </option>
                            <option class="filter-by-series" data-value="496" data-type="series" value="496"
                                data-sport="football">
                                Saudi King's Cup, 2023/24
                            </option>
                            <option class="filter-by-series" data-value="454" data-type="series" value="454"
                                data-sport="football">
                                Saudi Professional League, 2023/24
                            </option>
                            <option class="filter-by-series" data-value="439" data-type="series" value="439"
                                data-sport="football">
                                German Bundesliga, 2023/24
                            </option>
                            <option class="filter-by-series" data-value="476" data-type="series" value="476"
                                data-sport="football">
                                UEFA Champions League, 2023-24
                            </option> loginnn :sessionStorage.getItem("login")==='true'?true:false
                            <option class="filter-by-series" data-value="478" data-type="series" value="478"
                                data-sport="football">
                                UEFA Europa Conference League, 2023/24
                            </option>
                            <option class="filter-by-series" data-value="477" data-type="series" value="477"
                                data-sport="football">
                                UEFA Europa League, 2023/24
                            </option>
                            <option class="filter-by-series" data-value="409" data-type="series" value="409"
                                data-sport="football">
                                UEFA European Championship Qualification, 2023/24
                            </option>
                        </select>

                        <button type="button" class="export-as-csv" style="cursor: pointer">
                            Download CSV
                        </button>
                        <button type="button" class="reset-to-default" style="cursor: pointer">
                            Reset
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    </div>-->
    


</template>

<script>
import "../style/homepage.css";

export default {
    data: () => ({}),
    methods: {
        logout() { 
            sessionStorage.setItem("login",false)
        },
    },
};
</script>12:22:33 AM [vite] hmr update /src/components/loginPage.vue (x6)