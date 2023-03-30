<template>
  <form @sbumbit.prevent="submbitData">
    <div>
      <label>Username:</label>
      <input type="text" v-model="enteredUsername" />
    </div>
    <div>
      <label>Age:</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <div><button>Add Active User</button></div>
  </form>

  <!-- UserData should output two input fields => for name and age -->
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>
