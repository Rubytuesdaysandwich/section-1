//we are splitting the logic between different sections for the different components
//this js file is for the requests actions
export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,//we need a coachId email and message field on our form
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit("addRequest", newRequest);//addRequest is the name we choose in mutations.js requests and passing on the new payload which is the new request being built here
  },
};
