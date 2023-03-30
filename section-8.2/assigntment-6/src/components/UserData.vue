<template>
  <div>
    <label>Username</label>
    <input type="text" v-model="enteredUsername" />
  </div>
  <div>
    <label>Age</label>
    <input type="int" v-model="enteredAge" />
  </div>
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
  methods: {},
};
</script>
