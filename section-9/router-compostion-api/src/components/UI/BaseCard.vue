<template>
  <div>
    <header v-if="$slots.header">
      <!-- named slots -->
      <slot name="header">
        <h2>The Default</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: ["content"],
  mounted() {
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  /* moved here from userinfo local css */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
