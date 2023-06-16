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

  async function handleDeletePost(postId) {
    try {
      await PostsService.delete(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await PostsService.readAll();
        setPosts(data);
        setError("");
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <>
      <h1>Gestione Posts</h1>
      <section>
        <h2>Lista Posts</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titolo</th>
              <th>Contenuto</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <div className="actions">
                      <span>✏️</span>
                      <span onClick={() => handleDeletePost(post.id)}>🗑️</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <FormNewPost error={error} onAddPost={handleAddPost} />
    </>
  );
}
