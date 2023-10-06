<template>
    <div>
    <h1>SPORTZ INTERACTIVE</h1>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Player Details</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <select id="team"  v-model="selectedTeam" @change="selectTeam">
                      <option selected>ALL</option>
                      <option value="IND">IND</option>
                      <option value="AUS">AUS</option>
                      <option value="PAK">PAK</option>
                      <option value="ENG">ENG</option>
                    </select>
                    <div class="container">
                      <div id="IND" class="team-row"></div>
                      <div id="AUS" class="team-row"></div>
                      <div id="PAK" class="team-row"></div>
                      <div id="ENG" class="team-row"></div>
                    </div>

                    <br><br>
                </ul> 
                <!--<button onClick="window.location.reload();">UPDATE</button>-->
                <!-- <div class="form-group">
                 <label for="key">Search Player:</label>
                <input class="form-control" type="text" id="key" v-model="searchKeyword" placeholder="Enter player/team name">
            </div> -->
            <form class="d-flex" role="search">
              <input class="form-control me-2" v-model="sText" type="search" placeholder="Search" id = "key" aria-label="Search">
              
            </form>
            <button class="btn btn-outline-success" @click="passText" type="submit">Search</button>
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
export default {
  data : () =>({
    selectedTeam: 'ALL',
    sText:""
  }),
  props: ['playersData'],
  methods:{
    passText(){
      this.$emit("searchText",this.sText)
    },
    selectTeam() {
      this.$emit('updateSelectedTeam', this.selectedTeam);
    },
  }
}
</script>



