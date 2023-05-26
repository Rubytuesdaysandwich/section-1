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
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});
//using Vuex to keep your components lean and store your data in one place to avoid replicating the data!

const app = createApp(App);

app.use(store);
app.mount("#app");
