//we are splitting the logic between different sections for the different components
//this js file is for the coaches
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
export default {
  namespaced: true,
  state() {
    return {
      // userIsCoach:false,this is an alternate approach
      lastFetch: null,//saves a time stamp of when the last data fetch to the database took place
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"], //areas of expertise
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};