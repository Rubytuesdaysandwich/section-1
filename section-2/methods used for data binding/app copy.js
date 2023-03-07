const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  watch: {
    //watch automatically gets access to the name data attrirbute
    // watch looks for change in the name data attribute and if there is a change it will run
    name() {
      this.fullname = value + " " + "strange";
    },
  },

  computed: {
    // dont call computed properties just point at it fullname.
    // fullname(event, lastName) {
    //   console.log("running again");
    //   if (this.name === "") {
    //     return "";
    //   } else {
    //     return this.name + " " + "strange";
    //   }
    // },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num; //we do not need to return this value because we are using it as a listener on a button
    },
    subtract(num) {
      //using the peramater we can allow any value in our html to be changed to add/sub any amount by simply changing the value in paranthesis
      this.counter = this.counter - num;
    },
    // setName(event, lastName) {
    //   //this could work however the code is still ran everytime a action is done within the vue app  which wastes resources. We can use computed properties for this instead
    //   if (this.name === "") {
    //     return "";
    //   } else {
    //     return (this.name = event.target.value + " " + lastName);
    //   }
    // },
    submitForm(event) {
      // event.preventDefault(); this can be replace by the attribut modifier called prevent in vue js
      alert("submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
