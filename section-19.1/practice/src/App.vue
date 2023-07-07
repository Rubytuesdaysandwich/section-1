<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Donl't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalVisibility">{{ goal }}</h3>
  <!-- <h3>{{ goal }}</h3> -->
  <!-- Task 2: Toggle (show/hide) the goal with help of the button -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => separate refs -->
  <!-- =>ref object -->
  <!-- reactive Object -->
  <!-- Task4: Also solve the assignment with the options API -->
</template>

<script>
export default {
  data() {
    return {
      goal: "Finish the course!",
      goalVisibility: false,
    };
  },
  methods: {
    toggleGoalVisibility() {
      this.goalVisibility = !this.goalVisibility;
    },
  },
};

//import { reactive } from "vue";
//export default {
//setup() {
//setup only runs once
//You need refs on items you need to add changes to
// const courseGoal = ref("Finish the course, and get a coding Job!");
// const goalIsVisible = ref(false);
// const courseData = ref({
//   goal: "Finish the Course!",
//   goalVisibility: false,
// });
// const courseData = reactive({
//   goal: "Finish the Course!",
//   goalVisibility: false,
// });

//function toggleGoalVisibility() {
// goalIsVisible.value = !goalIsVisible.value;
// courseData.value.goalVisibility = !courseData.value.goalVisibility;
// courseData.goalVisibility = !courseData.goalVisibility; //with reactive
//}
// return {
// goal: courseData.value.goal,
// goal: courseData.goal,
//courseData,
// goalIsVisible: goalIsVisible,
// toggleGoalVisibility: toggleGoalVisibility,
//};
//},
//};
</script>

<style></style>
