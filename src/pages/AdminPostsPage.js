import { useState, useEffect } from "react";

import PostsService from "../services/PostsService";
import AiService from "../services/AiService";
import FormPost from "../components/FormPost";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
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

  async function handleAiPostGenerator() {
    try {
      const data = await AiService.sendMessage(`
        Crea un articolo per un blog di cucina di massimo 200 caratteri in formato JSON con le seguenti proprietà:
        title: in cui inserirai il titolo dell'articolo, content: in cui inserirai il contenuto dell'articolo
      `);
      await handleAddPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditPost(post) {
    try {
      const postUpdated = await PostsService.update(post.id, post);
      setPosts(
        posts.map((elm) => (elm.id === postUpdated.id ? postUpdated : elm))
      );
      setEditPost(null);
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
                      <span onClick={() => setEditPost(post)}>✏️</span>
                      <span onClick={() => handleDeletePost(post.id)}>🗑️</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <button className="btn btn__primary" onClick={handleAiPostGenerator}>
        Genera tramite AI
      </button>
      <FormPost
        editPost={editPost}
        setEditPost={setEditPost}
        error={error}
        onSubmit={editPost ? handleEditPost : handleAddPost}
      />
    </>
  );
}
