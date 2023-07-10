<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from "./UserAlert.vue";
import AlertMixin from "./mixins/alert.js";
export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      alertTitle:'Delete user?',
      alertIsVisible:true//mixins loose to the main component if there is a clash between truth and falsy values
    };
  },
  mixins: [AlertMixin],
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
};
</script>
