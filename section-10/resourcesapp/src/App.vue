<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
  <!-- <stored-resources :resources="storedResources"></stored-resources> -->
</template>

<script>
//import components
// import StoredResources from "./components/learning-resources/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/learning-resources/TheResource.vue";
export default {
  components: {
    // StoredResources,
    TheHeader,
    TheResources,
  },

  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
