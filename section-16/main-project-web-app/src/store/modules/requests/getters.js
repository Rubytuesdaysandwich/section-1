//we are splitting the logic between different sections for the different components
//this js file is for the requests getters
export default {
  requests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
};
