const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue); //push the entered value into the goals array list
      return (this.enteredGoalValue = "");
    },
  },
});

app.mount("#user-goals");
