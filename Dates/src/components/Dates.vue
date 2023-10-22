<template>
    <div>
      <label class="Year">Select a Year</label>
      <select v-model="selectedYear" name="Year" id="year" @change="updateDays">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
  
      <label class="Month">Select a Month</label>
      <select v-model="selectedMonth" name="Month" id="month" @change="updateDays">
        <option v-for="(month, index) in months" :key="index" :value="month">{{ month }}</option>
      </select>
  
      <label class="Day">Select A Day</label>
      <select v-model="selectedDay" name="Day" id="day">
        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
      </select>

      <div v-if="selectedYear && selectedMonth && selectedDay">
        <p>Selected Date: {{ selectedYear }} - {{ selectedMonth }} - {{ selectedDay }}</p>
      </div>
      <div>
        <label>Get a Date</label>
        <input type="string">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        years: [],
        months: [
          "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        days: [],
        selectedYear: null,
        selectedMonth: null,
        selectedDay: null
      };
    },
    mounted() {
      this.Years();
      this.getDaysInMonth();
      this.updateDays();
    },
    methods: {
      Years() {
        for (let year = 1991; year <= 2023; year++) {
          this.years.push(year);
        }
      },
      getDaysInMonth(year, month) {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
          return 30;
        } else if (month === 2) {
          if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29;
          } else {
            return 28;
          }
        } else {
          return 31;
        }
      },
    updateDays(){
        if(this.selectedYear && this.selectedMonth){
            const year = this.selectedYear;
            const month = this.selectedMonth;
            const daysInMonth = this.getDaysInMonth(year,month);
            this.days = [];
            for(let i = 1;i<=daysInMonth;i++){
                this.days.push(i);
            }
        }
    }
    
    }
}
</script>