import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
  // state() {//!moved to auth index.js
  //   return {
  //     userId: "c3",
  //   };
  // },
  // getters: {//!moved to auth getters.js
  //   userId(state) {
  //     return state.userId;
  //   },
  // },
});

export default store;
