<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
//props can be put into the template or methods section
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  //errors where you are missing a required property will show up in console. this can help with debugging
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },

  data() {
    return {
      detailsAreVisible: false,
      //// friendIsFavorite: this.isFavorite,
      //// friend: {
      ////   id: "manuel",
      ////   name: "Manuel Lorenz",
      ////   phone: "0123 45678 90",
      ////   email: "manuel@localhost.com",
      //// },
    };
  },
  methods: {
    //this.name this.phoneNumer... we can access props this way
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    //!▼
    /*  uni directional data flow
      You can only transfer data from parent to child and
      not vice versa. This means that the child components cannot update
      or modify the data on their own, makeing sure that a clean data flow
      architecture is followed. This also means that you can control
      the data flow better.*/
    //!▲
    toggleFavorite() {
      //$emit is putting out a custom event that we can listen to as a property in App.vue @toggle-favorite="toggleFavoriteStatus"
      this.$emit("toggle-favorite", this.id); //set to true if false and false to true if false
    },
  },
};
</script>
