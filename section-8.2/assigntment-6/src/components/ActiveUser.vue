<template>
  <li><h2>Username:</h2></li>
  <li><h3>Age:</h3></li>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },
  methods: {},
};
</script>
