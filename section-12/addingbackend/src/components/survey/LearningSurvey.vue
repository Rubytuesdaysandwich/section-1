<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      chosenRating: null,
      invalidInput: false,
    };
  },
  emits: ["survey-submit"],
  methods: {
    submitSurvey() {
      if (this.enteredName === "" || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }else
      this.invalidInput = false;

      //! no longer needed this.$emit("survey-submit", {
      //!   userName: this.enteredName,
      //!   rating: this.chosenRating,
      //! });
      //built in browser support for grabing and sending data.
      //sending https request to firebase to manage data ▼
      fetch(
        "https://learing-vue-js-backend-default-rtdb.firebaseio.com/surveys.json",
        {
          //get,post,delete,update, available options
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          //chosen from the emit method
          body: JSON.stringify({
            name: this.enteredName,
            rating: this.chosenRating,
          }),
        }
      );
      //or you could use axios
      this.enteredName = "";
      this.chosenRating = null;
    },
  },
};
//sending https request to firebase to manage data ▲
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
