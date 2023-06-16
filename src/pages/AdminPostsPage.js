import { useState, useEffect } from "react";

import PostsService from "../services/PostsService";
import FormNewPost from "../components/FormNewPost";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  async function handleAddPost(post) {
    try {
      const newPost = await PostsService.create(post);
      setPosts([...posts, newPost]);
      setError("");
    } catch (error) {
      setError("Qualcosa è andato storto 🥺");
    }
  }
  return (
    <>
      <h1>Gestione Posts</h1>
      <FormNewPost error={error} onAddPost={handleAddPost} />
    </>
  );
}
