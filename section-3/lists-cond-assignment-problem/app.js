const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      displayContent: true,
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
