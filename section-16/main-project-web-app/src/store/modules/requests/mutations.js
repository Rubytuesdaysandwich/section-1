//we are splitting the logic between different sections for the different components
//this js file is for the requests mutations
export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
};
