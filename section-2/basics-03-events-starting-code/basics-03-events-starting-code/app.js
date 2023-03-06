const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num; //we do not need to return this value because we are using it as a listener on a button
    },
    subtract(num) {
      //using the peramater we can allow any value in our html to be changed to add/sub any amount by simply changing the value in paranthesis
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      return (this.name = event.target.value + " " + lastName);
    },
    submitForm(event) {
      // event.preventDefault(); this can be replace by the attribut modifier called prevent in vue js
      alert("submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
