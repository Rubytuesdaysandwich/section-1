import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { createRouter, createWebHistory } from "vue-router";
// import TeamsList from "./pages/TeamsList.vue";
// import UsersList from "./pages/UsersList.vue";
// import TeamMembers from "./components/teams/TeamMembers.vue";
// import NotFound from "./pages/NotFound.vue";
// import TeamsFooter from "./pages/TeamsFooter.vue";
// import UsersFooter from "./pages/UsersFooter.vue";
//since these components are being loaded in via routing they do not need to registered locally or globally

const app = createApp(App);

app.use(router); //connect third party packages

app.mount("#app");
