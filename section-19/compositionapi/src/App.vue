<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <!-- with an object using ref -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
//ref,reactive,torefs
import { reactive } from "vue";
export default {
  setup() {
    ////const uName = ref("Maximilian");
    //data without an object
    // const uAge = ref(21);
    //reactive or refs

    const user = reactive({
      name: "Maximilian",
      age: 32,
    });

    // user.value = {};
    // console.log( user);
    //setTimeout(function () {
    // uName.value = "Max";
    // uAge.value = 31;//*using normal ref data
    // user.value.name = "max";//using a ref({}) object and accessing its values
    // user.value.age = 34;
    //user.name = "max"; //*using reactive()
    // user.age = 34;
    // }, 2000);

    // const userRefs = toRefs(user);

    function setNewAge() {
      user.age = 38;
    }

    return {
      //userName: user.value.name,
      // age: user.value.age,
      // user: user.name,
      // age: user.age,
      // uAge: age,
      user: user,
      setAge: setNewAge,
      // userName: userRefs.name,
      // age: userRefs.age,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  methods: {
    setNewAge() {
      this.age = 36;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
