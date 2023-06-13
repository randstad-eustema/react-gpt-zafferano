const PostsService = {
  readById: async (postId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`
      );
      if (!response.ok) throw new Error("Page not found");
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  readAll: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  create: async (payload) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default PostsService;
