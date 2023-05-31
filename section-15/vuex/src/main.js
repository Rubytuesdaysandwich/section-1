import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
// import { } from "core-js";

//the counter module and store used to be in this file

const app = createApp(App);

app.use(store);
app.mount("#app");
