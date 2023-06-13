import { useState, useEffect } from "react";
import PostsService from "../services/PostsService";

import BaseCard from "./BaseCard";
import FormNewPost from "./FormNewPost";

export default function TheMain() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  async function handleDeletePost(postId) {
    try {
      await PostsService.delete(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddPost(post) {
    try {
      const newPost = await PostsService.create(post);
      setPosts([...posts, newPost]);
      setError("");
    } catch (error) {
      setError("Qualcosa è andato storto 🥺");
    }
  }

  useEffect(() => {
    console.log("Solo al primo rendering del componente");
    // la richiesta alle api http://localhost:3001/posts per recuperare tutta la lista dei posts
    (async () => {
      try {
        const posts = await PostsService.readAll();
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="page-container">
      <section>
        {posts.length > 0 ? (
          posts.map((post) => (
            <BaseCard key={post.id} {...post} onPostDelete={handleDeletePost} />
          ))
        ) : (
          <h2>Non ci sono posts 🥺</h2>
        )}
      </section>
      <FormNewPost error={error} onAddPost={handleAddPost} />
    </main>
  );
}
