//we are splitting the logic between different sections for the different components
//this js file is for the coaches actions
export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      //   id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const response = await fetch(
      `https://coaches-f9544-default-rtdb.firebaseio.com/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData), //put and post. PUT called only if the data does not already exsist
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      //error...
    }
    context.commit("registerCoach", { ...coachData, id: userId });
  },

  async loadCoaches(context, payload) {
    //if the page is force refreshed then the data must be fetched again
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      "https://coaches-f9544-default-rtdb.firebaseio.com/coaches.json"
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          "Failed to fetch!                                                     "
      );
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },
}; //getting data from firebase
