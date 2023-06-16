import auth from "../helpers/auth";

const UsersService = {
  login: async (payload) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data);

      auth.setToken(data.accessToken);
      auth.setUser(data.user);

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default UsersService;
