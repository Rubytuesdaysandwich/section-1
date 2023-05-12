<template>
  <!-- section 11 completed -->
  <ul>
    <!-- we replace activeOption with modelValue so we don't need to write any computed properties -->
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  //     data() {
  //       return {
  //         activeOption: this.modelValue,
  //       };
  //     },
  //   ===== instead of using data properties for the data coming from the TheForm page, we can use computed to accomplish or just put modelValue inline with the html as  an attribute
  //   computed:{
  //       activeOption(){
  //           return this.modelValue
  //       },
  //   },
  methods: {
    activate(option) {
      //   this.activeOption = option;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}
.active button {
  color: #a00078;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
