import BaseCrud from "./BaseCrud";
import auth from "../helpers/auth";

class Users extends BaseCrud {
  async login(payload) {
    try {
      const { data } = await this._apiClient.post("/login", payload);
      auth.setToken(data.accessToken);
      auth.setUser(data.user);
      return data;
    } catch (error) {
      console.log(error.response.data);
      throw error.response.data;
    }
  }

  async logout() {
    try {
      // chiama API per il logout
      auth.removeAll();
      return true;
    } catch (error) {
      throw error;
    }
  }
}

const UsersService = new Users("users");

export default UsersService;
