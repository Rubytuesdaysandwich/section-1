<template>
  <div class="container">
    <!-- binding animate to to block to make it move  -->
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <!-- transition must only have 1 direct child -->
  <div class="container">
    <!-- using named transitions components -->
    <!-- if youhave multiple transitions they will be effected the same if they are not named -->
    <!-- You can also use attributes to change what they will be called example enter-to-class="some-class" -->
    <transition
      name="para"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @after-enter="afterAEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <!-- only one item can be on the DOM at a time use else allows us to have more than one item within a transition -->
    <!-- mode="out-in" control the fade in and out  -->
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisable">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisable: false,
    };
  },
  methods: {
    afterEnter(el) {
      console.log("afterEnter");
      console.log(el);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el) {
      console.log("enter");
      console.log(el);
      setInterval(function () {}, 20);
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      console.log(el);
    },
    leave(el) {
      console.log("leave");
      console.log(el);
    },
    afterLeave(el) {
      console.log("afterLeave");
      console.log(el);
    },
    showUsers() {
      this.usersAreVisable = true;
    },
    hideUsers() {
      this.usersAreVisable = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; talking to the animate class */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.9s ease-out forwards;
  /* refers to keyframes to move the object */
}
/* .v-enter-from { */
/* opacity: 0;
  transform: translateY(-30px); */
/* } */

.v-enter-active {
  animation: slide-scale 0.3s ease-out;
  /* transition: all 0.3s ease-out; */
}

/* .v-enter-to { */
/* opacity: 1;
  transform: translateY(0); */
/* } */

/* .v-leave-from { */
/* opacity: 1;
  transform: translate(0); */
/* } */
.v-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
  /*you can use the keyframes or use the other method using v-enter */
}

/* .v-leave-to { */
/* opacity: 0;
  transform: translateY(30px); */
/* } */
/* ============================================= */
/* .para-enter-from { */
/* opacity: 0;
  transform: translateY(-30px); */
/* } */

.para-enter-active {
  animation: slide-scale 0.3s ease-out;
  /* transition: all 0.3s ease-out; */
}

/* .para-enter-to { */
/* opacity: 1;
  transform: translateY(0); */
/* } */

/* .para-leave-from { */
/* opacity: 1;
  transform: translate(0); */
/* } */
.para-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
  /*you can use the keyframes or use the other method using v-enter */
}

/* .para-leave-to { */
/* opacity: 0;
  transform: translateY(30px); */
/* } */
/* =============================== */
/* .modal-enter-from {
} */

/* .modal-enter-to {
} */

/* .modal-leave-from { */
/* } */
/* .modal-leave-active { */
/* } */

/* .modal-leave-to { */
/* opacity: 0;
  transform: translateY(30px); */
/* } */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
@keyframes slide-scale {
  0% {
    transform: translateZ(0) scale(1);
  }
  70% {
    transform: translate(-120px) scale(1.1);
  }

  100% {
    transform: translate(-150px) scale(1);
  }
}
</style>
