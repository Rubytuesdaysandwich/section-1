<template>
  <section>
    Filter
    <!-- filter -->
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul>
      List Of Coaches
    </ul>
    <!-- List of coaches -->
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters.coaches
    },
  },
};
</script>
