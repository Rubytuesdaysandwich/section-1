import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
// import { } from "core-js";

const counterModule = {
  namespaced: true,
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
      console.log(state);
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit("increment");
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit("increase", payload);
    },
  },
  getters: {
    testAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
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
};

const store = createStore({
  //storing data globally to be accessed anywhere using $store.state.....
  //state, mutations,actions,getters
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      // counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    //mutations need to be synchronus

    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    // Vuex actions are functions that are dispatched from your components to perform asynchronous operations and commit mutations to update the
    // state. Actions can be thought of as the intermediary between your Vue components and the Vuex store,
    // ensuring that your components remain decoupled from the state management logic
    increment(context) {
      setTimeout(function () {
        context.commit("increment");
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.state;
      context.commit("increase", payload);
    },
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    //* getters, rootState, rootGetters
    testAuth(state) {
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});
//using Vuex to keep your components lean and store your data in one place to avoid replicating the data!

const app = createApp(App);

app.use(store);
app.mount("#app");
