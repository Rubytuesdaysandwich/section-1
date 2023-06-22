<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" />
    </div>
    <div class="form-control">
      <label for=""></label>
      <input type="text" id="lastname" v-model.trim="lastName.val" />
    </div>
    <div class="form-control">
      <label for=""></label>
      <textarea
        name=""
        id="description"
        cols="30"
        rows="5
        "
        v-model.trim="description.val"
      ></textarea>
    </div>
    <div class="form-control">
      <label for=""></label>
      <input type="number" id="rate" v-model.number="rate.val" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" />
        <label for="career">Career Development</label>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
    // console.log();
  },
  methods: {
    validateForm() {},
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.desc,
      };
    },
  },
};
</script>

<style scoped></style>
