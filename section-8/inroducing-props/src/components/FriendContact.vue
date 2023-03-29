<template>
  <li>
    <h2>{{ name }}{{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
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
      type: String,
      required: false,
      default: "0",
      validator: function (value) {
        return value === "1" || value === "0";
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite: this.isFavorite,
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
      if (this.friendIsFavorite === "1") {
        this.friendIsFavorite = "0";
      } else {
        this.friendIsFavorite = "1";
      }
    },
  },
};
</script>
