<template>
  <!-- coach registration -->
  <section>
    <h2>Register as a coach now!</h2>
    <coach-form></coach-form>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/";

export default {
  components: {
    CoachForm,
  },
  computed: {},
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
