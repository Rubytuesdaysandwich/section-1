export default {
  mounted() {//we are using a global mixin to grab the mounted cylce here and post the console log
    //we can use cycle hooks with mixins 
    console.log("Mounted!");
  },
};
