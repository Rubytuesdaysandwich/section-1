import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import UsersFooter from "./pages/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(), //keep track of what the last page url was
  routes: [
    { path: "/", redirect: "/teams" },
    // {path:'/' , alias:}
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true }, //routing metadata
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        //children cannnot be registered in the main router-view using nested routes
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        }, //dynamic data routing
      ],
      // alias: "/",
    },
    {
      path: "/users",
      components: { default: UsersList, footer: UsersFooter },

      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next();
      },
    },

    { path: "/:notfound(.*)", component: NotFound },
  ], //our-domain.com/team => ...
  linkActiveClass: "active",
  //changes the defauly active-router-link class
  //tells what component should be loaded per component
  scrollBehavior(_, _2, savedPosition) {
    //SCROLL TO TOP OF CONTENT WHEN USER CLICKS A GROUP.
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, right: 0 };
  },
});

//navigation gaurds▼redirect the user from anywhere you don't want them during authentication
router.beforeEach(function (to, from, next) {
  console.log("global beforeEach");
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log("Needs auth!");
    //you can use the meta data to authenticate pages globally based on the route
    next();
  } else {
    next();
  }
  // if (to.name === "team-members") {
  next();
  // } else {
  // next({ name: "team-members", params: { teamId: "t2" } });
  // }
});

router.afterEach(function (to, from) {
  //at this point the user has gained access to the page after routing. the gaurds need to be implemented on the BeforeEach() gaurd
  //sending analytics data
  console.log("Global afterEach");
  console.log(to, from);
});

export default router;
//! routing code within this file only!
