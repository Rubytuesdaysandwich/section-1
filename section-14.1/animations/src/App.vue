<template>
  <router-view v-slot="slotProps"
    ><transition name="route" mode="in-out"
      ><component :is="slotProps.Component"></component></transition
  ></router-view>
</template>

<script>
// import UsersList from "./components/UsersList.vue";

export default {
  // components: {
  // UsersList,
  // },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisable: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    afterEnter(el) {
      console.log("afterEnter");
      console.log(el);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter");
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      console.log(el);
      el.style.opacity = 1; //starting state for our leave animation
    },
    leave(el, done) {
      console.log("leave");
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
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
.route-enter-active {
  animation: slide-scale 0.5s ease-out;
}
.route-leave-active {
  animation: slide-scale 0.5s ease-in;
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
