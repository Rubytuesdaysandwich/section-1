<template>
  <li>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>userNamea:</strong>
        <h2>{{ Username }}</h2>
      </li>
      <li>
        <strong>Email:</strong>
        <h3>{{ Age }}</h3>
      </li>
    </ul>
    <button @click="$emit('delete', id)"></button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  emits: ["delete"],
  data() {
    return {};
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
