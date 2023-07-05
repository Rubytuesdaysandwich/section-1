//this is the Auth modules
export default {
  async login(context, payload) {
    // const response = await fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyA04gnCBaaM494NpvjJzCmQ9UPRootMam4]", //firebase rest api web api key
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );
    // const responseData = await response.json();
    // if (!response.ok) {
    //   const error = new Error(responseData.message || "Failed to authenticate");
    //   throw error;
    // }
    // console.log(responseData);
    // context.commit("setUser", {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   tokenExpiration: response.expiresIn,
    // });]
    //!refactored code with auth();
   return context.dispatch('auth',{
      ...payload,
      mode:'login'
    });
  },
  async signup(context, payload) {
    // const response = await fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyA04gnCBaaM494NpvjJzCmQ9UPRootMam4]", //firebase rest api web api key
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );
    // const responseData = await response.json();
    // if (!response.ok) {
    //   const error = new Error(responseData.message || "Failed to authenticate");
    //   throw error;
    // }
    // console.log(responseData);
    // context.commit("setUser", {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   tokenExpiration: response.expiresIn,
    // });
    //!refactored code because there is a repeating theme with them both only difference is there url route
   return context.dispatch('auth',{
      ...payload,
      mode:'signup'
    });
  },
 async auth(context,payload){//return a promise
    const mode = payload.mode;
    let url =`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyA04gnCBaaM494NpvjJzCmQ9UPRootMam4]`
    if(mode === 'signup'){
      url ===`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyA04gnCBaaM494NpvjJzCmQ9UPRootMam4]`
    }
    const response = await fetch(
      url, //firebase rest api web api key
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to authenticate");
      throw error;
    }
    // console.log(responseData);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: response.expiresIn,
    });
  },
  logout(context) {
    context.commit("setUser", {
      toke: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
