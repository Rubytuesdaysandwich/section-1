//this is the Auth modules

let timer;
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
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
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
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    //return a promise
    const mode = payload.mode;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyA04gnCBaaM494NpvjJzCmQ9UPRootMam4]`;
    if (mode === "signup") {
      url ===
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyA04gnCBaaM494NpvjJzCmQ9UPRootMam4]`;
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
    const expiresIn = responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn; //effect the default expiration date of

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expirationDate);
    // console.log(responseData);

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: response.expiresIn,
    });
  },
  tryLogin(context) {
    //dispatch this to check if we can log in the user automatically from the local storage data. so for example a page reload it keeps the user logged in.
    //with this we need to clear the local storage for users so that they can indeed log out of the account otherwise it will log them back into the account.
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        tokenExpiration: null, //the expiration date has a limit when the token becomes invalid. The  user will be force logged out.
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      toke: null,
      userId: null,
      // tokenExpiration: null,
    });
  },

  autoLogout(context) {
    context.dispatch("logout");
    context.commit("didLogout");
  },
};
