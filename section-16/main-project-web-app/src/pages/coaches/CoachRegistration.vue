<template>
  <!-- coach registration -->
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data); //name space action name
      this.$router.replace("/coaches"); //using replace prevents the user from going back to the form which may cause issues in data if the user were able to resubmit  the same form
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
}
</style>
