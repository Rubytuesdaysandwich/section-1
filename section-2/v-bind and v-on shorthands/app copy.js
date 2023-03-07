const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      lastName: "",
      // fullname: "",
    };
    //! You do not want to use a computed property anda data attribute with the same name
  },
  watch: {
    //watch automatically gets access to the name data attrirbute
    // watch looks for change in the name data attribute and if there is a change it will run
    //!watchers automatically have access  to the latest value automatically passed in by vue
    //* to watch two items you need two watchers for two dependencies
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.lastName + " " + value;
    //   }
    // },
  },

  computed: {
    // dont call computed properties just point at it fullname.
    fullname(event, lastName) {
      console.log("running again");
      if (this.name === "" || this.lastName === "") {
        //check if either of the variables are empty
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
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
      this.lastName = "";
    },
  },
});

app.mount("#events");
