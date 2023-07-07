<template>
  <section class="container">
    <user-data
      class="test"
      :first-name="userName"
      :last-name="lastName"
    ></user-data>
    <button @click="setAge">change age</button>
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button> -->
    <div>
      <!-- @input we are listing to events on the input we can also use v-model in place of it -->
      <!-- v-model is a way to achieve two way binding -->
      <input type="text" placeholder="First Name" v-model="FirstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from "vue";
import UserData from "./components/UserData.vue";
//*computed wants a function as an argument
export default {
  components: { UserData },
  setup() {
    // const uName = ref('Maximilian');
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);
    const uAge = ref(31);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });
    const uName = computed(function () {
      //computed checks to see if one of the two refs changes if they do the computed property runs again.
      return firstName.value + " " + lastName.value;
    });
    provide("userAge", uAge);

    watch([uAge, uName], function (newValues, oldValues) {
      //*in the composition api you can have multiple item to active the watcher function unlike options api where  you can only have one

      console.log("Old age:" + oldValues[0]);
      console.log("New age:" + newValues[0]);
      console.log("Old name:" + oldValues[1]);
      console.log("New name:" + newValues[1]);
    });

    //computed properties are really just refs in disguise
    function setNewAge() {
      uAge.value = 33;
    }

    function setFirstName(event) {
      firstName.value = event.target.value; //setting the value of the first name
    }

    //function setLastName(event) {
    //lastName.value = event.target.value; //setting the value of the last name
    //}
    function setLastName() {
      lastName.value = lastNameInput.value.value; //setting the value of the last name
    }

    return {
      //the variables are returned to the template to be accessed by the html template
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      setFirstName,
      setLastName,
      firstName,
      lastName,
      lastNameInput,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }
  provide() {
    //*working with provide and inject
    return { age: this.age };
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
