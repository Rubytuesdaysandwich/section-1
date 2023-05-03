<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" helloProp="...heyy"></slot>
      <!-- scoped slots :item ='goal' -->
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "learn Vue"],
    };
  },
};
</script>
