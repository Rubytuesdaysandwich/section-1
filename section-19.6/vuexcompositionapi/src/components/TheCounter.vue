<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore(); //using vuex with the composition api

    const counter = computed(function () {
      return store.getters.counter;
    });

    return { counter };
  },
};
</script>
