const about = Vue.createApp({
  data() {
    return {
      name: "Rueben Durfee",
      age: 21,
      myname: "Rueben Durfee",
    };
  },
  methods: {
    addFiveYears() {
      return this.age + 5;
    },
    numberBetweenOneAndZero() {
      const randomNumber = Math.random();
      return randomNumber;
    },
    randomImage() {
      if (this.numberBetweenOneAndZero() > 0.5) {
        return (this.strange =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR6j7BEP8patINOyCYRcTMuPwvdrCdSAEPA&usqp=CAU");
      } else {
        return (this.strange =
          "https://www.gameinformer.com/sites/default/files/styles/full/public/2022/05/07/f85e70ba/dr1.jpg");
      }
    },
  },
});

about.mount("#assignment");
