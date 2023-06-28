//we are splitting the logic between different sections for the different components
//this js file is for the coaches actions
export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
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
    context.commit("registerCoach", { ...coachData,
    id:userId });
  },
}; //getting data from firebase
