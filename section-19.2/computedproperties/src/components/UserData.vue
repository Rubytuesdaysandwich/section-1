<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
//working with provide and inject
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  props: ["lastName", "firstName"],
  setup(props, context) {
    //the props are being passed in by the built in setup values that allow us to pass in props which are then able to accessed
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    const age = inject("userAge");
    age.value = 32; //!you should not do this only change the value of inject value where you provide them which in this case would be in the App.vue file
    console.log(context);

    // life cylce hooks in the composition api▼
    onBeforeMount(function () {
      console.log("onBeforeMount");
    });
    onMounted(function () {
      console.log("onMounted");
    });
    onBeforeUpdate(function () {
      console.log("onBeforeUpdate");
    });
    onUpdated(function () {
      console.log("onUpdated");
    });
    onBeforeUnmount(function () {
      console.log("onBeforeUnmount");
    });
    onUnmounted(function () {
      console.log("onUnmounted ");
    });

    // context.emit('save-data',1); this.$emit('save-data',1);in this situation you should use the context.emit instead of this.$emit
    return { userName: uName, age: age };
  },
  //   computed: {
  //     userName() {
  //       return this.firstName + " " + this.lastName;
  //     },
  //   },
};
//USERDATA is using the options API the app is using the compositions api and it works fine
</script>
