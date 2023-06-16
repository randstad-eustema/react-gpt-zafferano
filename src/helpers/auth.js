const auth = {
  getToken: () => {
    return sessionStorage.getItem("accessToken");
  },
  setToken: (token) => {
    sessionStorage.setItem("accessToken", token);
  },
  getUser: () => {
    return JSON.parse(sessionStorage.getItem("user"));
  },
  setUser: (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  },
};

export default auth;
