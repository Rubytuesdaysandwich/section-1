const app = Vue.createApp({
  data() {
    return {
      registerUser: "",
      registerOnEnter: "",
    };
  },
  methods: {
    alertUser() {
      // event.preventDefault(); this can be replace by the attribut modifier called prevent in vue js
      alert("This is an alert");
    },
    userRegistration(event, lastName) {
      return (this.registerUser = event.target.value + " " + lastName);
    },
    userRegistrationOnEnter(event, lastName) {
      return (this.registerOnEnter = event.target.value + " " + lastName);
    },
  },
});
app.mount("#assignment");
