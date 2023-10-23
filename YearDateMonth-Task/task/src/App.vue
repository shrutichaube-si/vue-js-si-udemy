<template>
  <div>
    <div>
      <h1>Start Year: {{ startYear }}</h1>
      <h1><label>End Year: </label></h1>
      <button @click="generateYearOptions">Click</button>
      <select id="year">
        <option v-for="(year, index) in years" :key="index">{{ year }}</option>
      </select>
    </div>

    <h1>
      <label>Select a Month:</label>
      <select id="month" v-model="selectedMonth" @change="updateDays">
        <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
      </select>
    </h1>

    <h1>
      <label>Number of Days:</label>
      <select id="days">
        <option v-for="day in daysInSelectedMonth" :key="day">{{ day }}</option>
      </select>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startYear: 2000,
      endYear: '',
      currentYear: 2023,
      years: [],
      selectedMonth: null,
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      daysInMonth: [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
      ],
      daysInSelectedMonth: []
    };
  },
  methods: {
    generateYearOptions() {
      this.years = [];
      for (let year = 2000; year <= 2023; year++) {
        this.years.push(year);
      }
    },
    updateDays() {
      const month = parseInt(this.selectedMonth);
      const daysInMonth = this.daysInMonth[month];

     
      this.daysInSelectedMonth = [];
      for (let day = 1; day <= daysInMonth; day++) {
        this.daysInSelectedMonth.push(day);
      }
    }
  }
};
</script>
