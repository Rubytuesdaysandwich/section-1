//we are splitting the logic between different sections for the different components
//this js file is for the coaches actions
export default{
    registerCoach(context,data){
        const coachData ={
            id:context.rootGetters.userId,
            firstName: data.first,
            lastName:data.last,
            description:data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        context.commit('registerCoach', coachData);
    }
}