//import { defineAsyncComponent } from "vue"; //* calling Asynchronous Components locally for this file. We imporve loading time of our app by using these to reduce the number of itmes that need to load into the server
import { createRouter, createWebHistory } from "vue-router";

// import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
// import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
// import ContactCoach from "./pages/requests/ContactCoach.vue";
// import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";
// import UserAuth from "./pages/auth/UserAuth.vue";
import store from "./store/index";

const CoachDetail = () => import("./pages/coaches/CoachDetail.vue");
const CoachRegistration = () => import("./pages/coaches/CoachRegistration.vue");
const ContactCoach = () => import("./pages/requests/ContactCoach.vue");
const RequestsReceived = () => import("./pages/requests/RequestsReceived.vue");
const UserAuth = () => import("./pages/auth/UserAuth.vue");
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
      metat: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      metat: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, metat: { requiresUnAuth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
router.beforeEach(function (to, _, next) {
  //navigation gaurd keeps the user from going to pages they are not allowed without being logged in
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresAuth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
//* Note: Async Components & Routing
//* It turns out, that it's NOT recommended to use async components for routing (you may use them to conditionally load and fetch component code when working with v-if etc. though).

//* For routing, simply change the syntax from

//* const CoachDetail = defineAsyncComponent(() =>
//*   import('./pages/coaches/CoachDetail.vue')
//* );
//* to

//* const CoachDetail = () => import('./pages/coaches/CoachDetail.vue');
//* (for all routes)

//!before building
//todo you do not touch the dist folder when adding updates to the project if any are to be added. You should update the normal files then push a rebuild
