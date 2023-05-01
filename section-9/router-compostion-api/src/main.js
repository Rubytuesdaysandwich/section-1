import { createApp } from "vue";

import App from "./App.vue";
// import TheHeader from "./components/TheHeader.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";
// import BadgeList from "./components/BadgeList.vue";//MOVED TO LOCALLY LOADED COMPONENTS
// import UserInfo from "./components/UserInfo.vue";

const app = createApp(App);
//registering as global components. The downside to this is that the page loads all of them in this instance which makes your page more data intensive. Keep you pages lean by using multiple components.
//we can load components locally we should do this for components like user-info and badge-list where they are being used only one time. This prevents them from being loaded without being needed on the page.
// app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
// app.component("badge-list", BadgeList);
// app.component("user-info", UserInfo);

app.mount("#app");
