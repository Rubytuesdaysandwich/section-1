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
    <button @click="$emit('delete', id)">Delete</button>
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
  //? we will be using this method through out the rest of the course for emits
  emits: ["toggle-favorite", "delete"],
  //*passing emits a object allows us to write a function on our custom events similar to props.
  //* we are talking to the parent items from the child when we are using emits similar to event listeners on buttons
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing!");
  //       return false;
  //     }
  //   },
  // },

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
