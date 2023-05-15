<template>
  <learning-survey></learning-survey>
  <!-- @survey-submit="storeSurvey" we no longer need -->
  <user-experiences></user-experiences>
  <!-- :results="savedSurveyResults" No longer need -->
</template>

<script>
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  //!since the data base firebase is being used we do not need this▼
  //?However it is optional to keep local data stored as well and database
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },

  // methods: {
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       id: new Date().toISOString(),
  //     };
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
  //!▲
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
