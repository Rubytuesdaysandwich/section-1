//we are splitting the logic between different sections for the different components
//this js file is for the coaches getters
export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
