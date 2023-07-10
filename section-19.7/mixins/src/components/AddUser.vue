<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import UserAlert from "./UserAlert.vue";
import AlertMixin from "./mixins/alert.js";
export default {
  components: {
    UserAlert,
  },
  mixins: [AlertMixin],
  // components: {
  //   UserAlert,
  // },
  // data() {
  //   return {
  //     alertIsVisible: false,
  //   };
  // },
  // methods: {
  //   showAlert() {
  //     this.alertIsVisible = true;
  //   },
  //   hideAlert() {
  //     this.alertIsVisible = false;
  //   },
  // },
};

//mixins have a down side for larger teams and projects of making things harder to find but vue js has a solution to this problem  Custom Hooks / Composables & The Composition API
</script>
