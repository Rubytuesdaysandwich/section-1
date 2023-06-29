//we are splitting the logic between different sections for the different components
//this js file is for the requests actions
export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      //coachId: payload.coachId, //we need a coachId email and message field on our form
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://coaches-f9544-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    // console.log(responseData);
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", newRequest); //addRequest is the name we choose in mutations.js requests and passing on the new payload which is the new request being built here
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://coaches-f9544-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch request."
      );
      throw error;
    }
    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit("setRequests", requests);
  },
};
