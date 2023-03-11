const app = Vue.createApp({
  data() {
    return {
      user1: false,
      user2: false,
      userInput: "",
    };
  },
  methods: {
    inputClass() {
      if (this.userInput === "user1") {
        this.user1 = true;
      } else if (this.userInput === "user2") {
        this.user2 = true;
      }
    },
  },
});
app.mount("#assignment");
