import { createApp } from "vue";

import router from "./router.js";
import store from "./store/index.js"; //importing store/ index.js to be used in the project
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("base-card", BaseCard);
app.mount("#app"); //main app component of the app
