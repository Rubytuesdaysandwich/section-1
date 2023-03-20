const app = Vue.createApp({
  data() {
    //first template
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      //console.log(this.$refs.userText); //Vue provided property built in vue dollar sign is identifier of this
    },
  },
});

app.mount("#app");

///...VANILA JAVASCRIPT proxies

let message = "hello";

let longMessage = message + "world!";

console.log(longMessage);

message = "Hello!!!!";

console.log(longMessage);

//...
//? we want message to change when longMessage changes.
//*we want track one property and change another when that property changes
const data = {
  message: "Hello!",
  longMessage: "Hello world!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "world";
    }
    target.message = value;
    // console.log(target);
    // console.log(key);
    // console.log(value);
  },
};
const proxy = new Proxy(data, handler);
proxy.message = " Hello!!!!";
//! You can have multiple apps but they cannot grab variables from eachother

//!==================

const app2 = Vue.createApp({
  template: `<p>{{favoriteMeal}}</p>`, //second template
  data() {
    return {
      favoriteMeal: "pizza",
    };
  },
});

app2.mount("#app2");
