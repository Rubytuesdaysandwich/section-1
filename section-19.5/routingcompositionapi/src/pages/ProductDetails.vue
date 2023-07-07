<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { inject, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  props: ["pid"],
  setup() {
    const products = inject("products");
    //// const title = ref("");
    //// const price = ref(null);
    //// const description = ref("");
    const route = useRoute(); //composible custom hooks
    console.log(route);

    const selectedProduct = computed(() =>
      products.value.find((product) => product.id === route.params.pid)
    );

    //// const selectedProduct = products.value.find(
    ////   (product) => product.id === props.id
    //// );
    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);
    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
