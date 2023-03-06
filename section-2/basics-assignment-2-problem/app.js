const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    alertUser() {
      // event.preventDefault(); this can be replace by the attribut modifier called prevent in vue js
      alert("This is an alert");
    },
  },
});
