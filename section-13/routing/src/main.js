import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from './components/teams/TeamMembers.vue'
//since these components are being loaded in via routing they do not need to registered locally or globally
const router = createRouter({
  history: createWebHistory(), //keep track of what the last page url was
  routes: [
    {
      path: "/teams",
      component: TeamsList,
    },
    { path: "/users", component: UsersList },
    {path: '/teams/:teamId',component:TeamMembers}//dynamic data routing
    
  ], //our-domain.com/team => ...
  linkActiveClass: "active",//changes the defauly active-router-link class
  //tells what component should be loaded per component
});
const app = createApp(App);

app.use(router); //connect third party packages

app.mount("#app");
