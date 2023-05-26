import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
// import { } from "core-js";

const store = createStore({
  //storing data globally to be accessed anywhere using $store.state.....
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
    