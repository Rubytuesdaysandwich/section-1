<template>
  <h2>My Friends</h2>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "manuel Lorenz",
          phone: "0123 45678 90",
          email: "mauel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
