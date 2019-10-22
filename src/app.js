import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data:{
      countries: []
    },
    mounted(){
      this.fetchCountries();
    },
    computed: {
      totalPopulations: function(){
        return this.countries.reduce((runningTotal, country) => runningTotal + country.population, 0)
      },
      filteredCountries: function(){
        return this.countries.filter((country) => {
          return country.population;
        })
      }
    },

    methods: {
      fetchCountries: function (){
          fetch("https://restcountries.eu/rest/v2/all")
          .then((response) => response.json())
          .then(data => this.countries = data)
          // .then(data.reduce((runningTotal, country) => runningTotal + country.population, 0))
      }
    }
  })
})

// filteredAccounts: function () {
//     return this.accounts.filter((account) => {
//       return account.balance >= this.filterAmount;
//     });
//   }
// },
