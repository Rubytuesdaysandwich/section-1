export default {
  // Vuex actions are functions that are dispatched from your components to perform asynchronous operations and commit mutations to update the
  // state. Actions can be thought of as the intermediary between your Vue components and the Vuex store,
  // ensuring that your components remain decoupled from the state management logic
  increment(context) {
    setTimeout(function () {
      context.commit("increment");
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    context.state;
    context.commit("increase", payload);
  },
  login(context) {
    context.commit("setAuth", { isAuth: true });
  },
  logout(context) {
    context.commit("setAuth", { isAuth: false });
  },
};
