<template>
  <!-- <button @click="confirmInput">confirm</button> -->
  <button @click="savesChanges">save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      //do something
      this.$router.push("/teams"); //accomplish this before the user gets moved to the next page
      // this.$router.forward();
    },
    savesChanges() {
      this.savesChanges = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("UseresList Cmp beforeRouterEnter");
    console.log(to, from);
    next();
  },
  //you can user navigation gaurds to help the user not loose data, accidentally leave a page or to authenticate users to see data
  beforeRouteLeave(to, from, next) {
    //make sure they don't loose their input without saving
    console.log("UsersList Cmp beforeRouterLeave");
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        "Are you sure? YOu have unsaved changes!"
      );
      next(userWantsToLeave);
    }
  },

  unmounted() {
    //this is useful to keep the user from leaving a page where unsaved changes may be lost like important documents or forms not being submitted.
    console.log("unmounted");
  },
};

//global is always first route config level and then component level
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
