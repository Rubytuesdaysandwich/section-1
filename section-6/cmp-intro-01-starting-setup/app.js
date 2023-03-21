const app = Vue.createApp({
  data() {
    return {
      displayContnet: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    toggleDetails() {
      this.displayContnet = !this.displayContnet;
    },
  },
});

//connecting the vuejs app to index.html page through the app ID.

app.mount("#app");
