<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({ value: 10 })">Add 2</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch("increment");
    // },
    // ...mapActions(["increment", "increase"]),
    ...mapActions("numbers", { inc: "increment", increase: "increase" }),
  },
};
</script>
