const app = Vue.createApp({
  data() {
    return {
      text: "working with methods computed and watch",
      result: 0,
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
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too much";
      } else {
        return this.result;
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
