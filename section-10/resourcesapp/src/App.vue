<template>
  <ul>
    <learning-resources
      v-for="res in storedResources"
      :key="res.id"
    ></learning-resources>
  </ul>
</template>

<script>
//import components
import LearningResources from "./components/learning-resources/LearningResource.vue";

export default {
  components: {
    LearningResources,
  },

  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "official Guide",
          description: "The official Vue.js ddocumentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.com",
        },
      ],
    };
  },
};
</script>
