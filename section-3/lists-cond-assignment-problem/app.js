const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      displayContent: true,
      displayButton: "hide",
    };
  },
  watch: {},
  computed: {
    toggleClasses() {
      return {
        visible: this.displayContent,
        hidden: !this.displayContent,
      };
    },

    changeContent() {
      if (this.displayContent === true) {
        return (this.displayButton = "hide");
      } else {
        return (this.displayButton = "show");
      }
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
