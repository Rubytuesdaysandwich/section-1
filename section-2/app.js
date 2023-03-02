const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      //   courseGoalB: "<h2>Master Vue and build amazing apps!</h2> adding html v-html outputGoal",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/guide/quick-start.html#using-vue-from-cdn",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
//this keyword is reffering to a globle "OBJECT" that can be used to access the properties in the data. CourseGoalA and CourseGoalB
//you cannot just call a property drom the data function in the createApp it's not seen
