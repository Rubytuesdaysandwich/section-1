<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ["selectTopic"],
  props: ["id", "topicName", "description"],
  emits: ["select-topic"],
};
// with inject and provide we can avoide passing through multiple props when we have a large number of components that need to share data
</script>
