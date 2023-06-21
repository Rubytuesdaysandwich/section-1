import { createRouter, createWebHistory } from "vue-router";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./pages/coaches/CoachesList";
import CoachesRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsRecieved from "./pages/requests/RequestsRecieved.vue";
import NotFound from "./pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    { path: "/coaches", component: CoachesList }, //we see this page first when visiting the website
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props:true,
      children: [{ path: "contact", component: ContactCoach }], // coaches/c1/contact
    },
    { path: "/register", component: CoachesRegistration },
    { path: "/requests", component: RequestsRecieved },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
export default router;
