import ApiClient from "./ApiClient";
import auth from "../helpers/auth";

const PostsService = {
  readById: async (postId) => {
    try {
      const { data } = await ApiClient.get(`posts/${postId}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  readAll: async () => {
    try {
      const { data } = await ApiClient.get(`posts`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const { data } = await ApiClient.delete(`posts/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  create: async (payload) => {
    try {
      const { data } = await ApiClient.post(`post`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default PostsService;
