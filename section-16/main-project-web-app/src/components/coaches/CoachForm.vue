<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class={invalid: !firstName.isValid}>
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" />
      <p v-if="!firstName.isValid">Firstname must not be empty</p>
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
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
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
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === "") {
        //---firstName
        this.fristName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        //---lastName
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        //---description
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        //---rate
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.area.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

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
