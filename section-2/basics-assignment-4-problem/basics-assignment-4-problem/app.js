const app = Vue.createApp({
  data() {
    return {
      InputIsActive: "", //accepting user input and then taking that user input and outputing it into the class attribute on stlye me! user1 and user2 works this way
      toggleParagraphs: true,
      inputBackgroundColor: "", //accept user input for color selection and send this to the style tag already in place to choose any color css accepts based on user input
    };
  },
  computed: {
    toggleClasses() {
      return {
        user1: this.InputIsActive === "user1",
        user2: this.InputIsActive === "user2",
        visible: this.toggleParagraphs,
        hidden: !this.toggleParagraphs,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.toggleParagraphs = !this.toggleParagraphs;
    },
  },
});
app.mount("#assignment");
