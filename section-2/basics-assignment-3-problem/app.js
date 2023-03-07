const app = Vue.createApp({
  data() {
    return {
      result: 0,
      notify: "",
    };
  },
  watch: {
    result(value) {
      if (value >= 37) {
        const that = this;
        setTimeout(function () {
          that.result = 0;
        }, 5000);
      }
    },
  },
  computed: {
    thirtySeven() {
      console.log("running");
      if (this.result < 37) {
        this.notify = "Not there yet";
      } else if (this.result > 37) {
        this.notify = "Too much";
      } else {
        this.notify = "perfect";
      }
    },
  },
  methods: {
    add(num) {
      this.result = this.result + num;
    },
  },
});
app.mount("#assignment");
