const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      displayContent: false,
    };
  },
  watch: {},
  computed: {
    toggleClasses() {
      return {
        visible: this.toggleParagraphs,
        hidden: !this.toggleParagraphs,
      };
    },
  },
  methods: {
    addTasks() {
      this.tasks.push(this.enteredTaskValue);
      return (this.enteredTaskValue = "");
    },
    removeTasks(index) {
      this.tasks.splice(index, 1);
    },
    toggleVisibility() {
      this.displayContent = !this.displayContent;
    },
  },
});
app.mount("#assignment");
