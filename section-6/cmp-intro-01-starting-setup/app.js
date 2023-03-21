const app = Vue.createApp({
  data() {
    return {
      //   detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    //todo: moved to app.component: completed
    // toggleDetails() {
    //   this.detailsAreVisible = !this.detailsAreVisible;
    // },
  },
});

//should contain a - dash to avoid clashing with html elements
//identifier = friend contact custom html tag
// components are reusable pieces of html and logic and work stand alone. they can communicate with eachother encapsulate the code so you can work with smaller sections and have it be reusable. You can also choose to have these share
app.component("friend-contact", {
  template: `
    <ul>
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">
            {{detailsAreVisible ? 'Hide' : "Show"}}
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
      </ul>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
//part of the parent app but secluded

app.mount("#app");
//connecting the vuejs app to index.html page through the app ID.
