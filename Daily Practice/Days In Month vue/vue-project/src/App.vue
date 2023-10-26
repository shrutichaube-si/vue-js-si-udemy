<!-- <template>
  <div>
    <h1>Days Calculator</h1>

    <label for="year">Select a Year:</label>
    <select v-model="selectedYear">
      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
    </select>

    <label for="month">Select a Month:</label>
    <select v-model="selectedMonth">
      <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
    </select>

    <label for="Days" aria-placeholder="Day">Day:</label>
    <select v-model="selectedMonth">
      <option v-for="(day, index) in days" :key="index" :value="index">{{ day }}</option>
    </select>

    <button @click="calculateDays">Calculate</button>

    <p id="result">{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: new Date().getFullYear(),
      selectedMonth: 0,
      selectedday: 0,
      result: '',
      startYear:'2000',
      endYear:'2018',
      years: [],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    };
  },
  methods: {
    // getYears(){
    //   years.push();
    // },
    calculateDays() {
      const date = new Date(this.selectedYear, this.selectedMonth + 1, 0);
      const daysInMonth = date.getDate();
      this.result = `There are ${daysInMonth} days in ${this.months[this.selectedMonth]} of ${this.selectedYear}.`;
    }
  },
  created() {
    // this.getYears()
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 1000; i--) {
      this.years.push(i);
    }
  }
};
</script>

<style scoped>
  select {
    width: 100px;
    padding: 5px;
  }
</style> -->

<template>
  <div>
    <h1>Days in a Month Calculator</h1>
    <label for="year">Select a Year:</label>
    <select v-model="selectedYear">
      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
    </select>

    <label for="month">Select a Month:</label>
    <select v-model="selectedMonth">
      <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
    </select>

    <label for="day">days are </label>
    <select v-model="selectedDay">
    <!-- <p id="result"> -->
      There are {{ getDaysInMonth(selectedYear, selectedMonth) }} days in {{ months[selectedMonth] }} of {{ selectedYear }}.
    <!-- </p> -->
  </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: new Date().getFullYear(),
      selectedMonth: 0,
      years: [],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      startyear: 2000,
      currentyear: '*',
      endyear: 2019,
    };
  },
  methods: {
    getDaysInMonth(year, month) {
      const date = new Date(year, month + 1, 0);
      return date.getDate();
    }
  },
  created() {
    // Populate the years dropdown from 2000 to 2019
    for (let i = 2000; i <= 2019; i++) {
      this.years.push(i);
    }
  }
};
</script>

<style scoped>
  select {
    width: 100px;
    padding: 5px;
  }
</style>
