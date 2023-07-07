<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore(); //you use this useStore within the vuex compositon api to access the vuex store instead of this.$store
    function inc() {
      store.dispatch("increment");
    }

    return { inc };
  },
};
</script>
