<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>

      <p v-else-if="!isLoading && error">{{ error }}</p>

      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found.
      </p>

      <!-- v-else-if="!isLoading && results && results.length > 0" -->
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ["results"],
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(
        "https://learing-vue-js-backend-default-rtdb.firebaseio.com/surveys.json"
      )
        .then(function (response) {
          if (response.ok) {
            return response.json(); //parsing data
          }
        })
        .then((data) => {
          this.isLoading = false;
          console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch(() => {
          console.log(this.error);
          this.isLoading = false;
          this.error = "failed to fetch data-please try again later.";
        });
      //// {
      //?The DEFAULT method is GET so we don't need the headers,body or method for carrying data from the database
      //*get,post,delete,update, available options
      //* method: "GET",
      //* headers: {
      //*   "Content-Type": "application/json",
      //* },
      //chosen from the emit method
      //* body: JSON.stringify({
      //*   name: this.userName,
      //*   rating: this.chosenRating,
      //* }),
      // }
    },
  },
  mounted() {
    //automatically load in the data without pressing the button
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
