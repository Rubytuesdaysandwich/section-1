<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
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
    };
  },
  methods: {
    loadExperiences() {
      fetch(
        "https://learing-vue-js-backend-default-rtdb.firebaseio.com/surveys.json").then(function(response){
          if(response.ok){
           return response.json();//parsing data
          }
    }).then(function(data){
      console.log(data);
    })
        // {
          //?The DEFAULT method is GET so we don't need the headers,body or method for carrying data from the database
          //get,post,delete,update, available options
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
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
