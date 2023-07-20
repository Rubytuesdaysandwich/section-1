<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import { ref } from "vue";
import UserAlert from "./UserAlert.vue";
import UseAlert from "../hooks/alert.js";

export default {
  components: {
    UserAlert,
  },
  setup() {
    const alertTitlte = ref("Delete User?");
    const [alertIsVisible, showAlert, hideAlert] = UseAlert(true); //<--- custom hooks

    return { alertIsVisible, showAlert, hideAlert, alertTitlte };
  },
};
//mixins can make things harder to manage because you bring in data from different places. a problem more common in bigger projects.
// Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.
// Code reusability: Mixins are useful when a programmer wants to share functionality between different classes. Instead of repeating the same code over and over again, the common functionality can simply be grouped into a mixin and then included into each class that requires it.
//=========
//hooks operate much like mixins but are much more managable for large projects
//The main difference between the two is that dependencies are explicit with Hooks versus implicit with Mixins
</script>
