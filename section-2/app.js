const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/guide/quick-start.html#using-vue-from-cdn",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
    },
  },
});
app.mount("#user-goal");
