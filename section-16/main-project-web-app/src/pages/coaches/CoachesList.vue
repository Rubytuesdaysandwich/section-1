<template>
  <div>
    <section>
      Filter
      <!-- filter -->
    </section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.fistName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :area="coach.areas"
        ></coach-item>
        <!-- <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li> -->
      </ul>
      <h3 v-else>No Coaches Found.</h3>
      <!-- List of coaches -->
    </section>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
export default {
  components: {
    CoachItem,
  },

  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>