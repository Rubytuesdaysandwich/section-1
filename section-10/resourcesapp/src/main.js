import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/learning-resources/UI/BaseCard.vue";
import BaseButton from "./components/learning-resources/UI/BaseButton.vue";
import BaseDialog from "./components/learning-resources/UI/BaseDialog.vue";
const app = createApp(App);
app.component("base-card", BaseCard); //registered globally all pages may access this component
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.mount("#app");
