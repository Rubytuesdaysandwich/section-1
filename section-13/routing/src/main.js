import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
//since these components are being loaded in via routing they do not need to registered locally or globally
const router = createRouter({
  history: createWebHistory(), //keep track of what the last page url was
  routes: [
    { path: "/", redirect: "/teams" },
    // {path:'/' , alias:}
    {
      path: "/teams",
      component: TeamsList,
      children: [
        //children cannnot be registered in the main router-view using nested routes
        { path: ":teamId", component: TeamMembers, props: true }, //dynamic data routing 
      ],
      // alias: "/",
    },
    { path: "/users", component: UsersList },

    { path: "/:notfound(.*)", component: NotFound },
  ], //our-domain.com/team => ...
  linkActiveClass: "active", //changes the defauly active-router-link class
  //tells what component should be loaded per component
});
const app = createApp(App);

app.use(router); //connect third party packages

app.mount("#app");
