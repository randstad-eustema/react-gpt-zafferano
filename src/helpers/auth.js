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
  removeAll: () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");
  },
};

export default auth;
