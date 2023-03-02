Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "", //This value is entered into the v-model
    };
  },
  methods: {
    addGoal() {
      //connected to v-on:click button
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// vanilla javascript example ▼▼▼▼▼

// "use strict";

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }
// buttonEl.addEventListener("click", addGoal);
