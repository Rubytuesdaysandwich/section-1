import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import counterModule from "../../store.js";
import rootGetters from "./getters.js";

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
  mutations: rootMutations,
  //todo moved to mutations.js
  //mutations need to be synchronus
  //   setAuth(state, payload) {
  //     state.isLoggedIn = payload.isAuth;
  //   },
  actions: rootActions,
  getters: rootGetters,
});
//using Vuex to keep your components lean and store your data in one place to avoid replicating the data!
export default store;
