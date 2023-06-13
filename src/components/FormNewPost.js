import { useState } from "react";

const initialPostState = {
  title: "",
  content: "",
};

export default function FormNewPost({ error, onAddPost }) {
  const [post, setPost] = useState(initialPostState);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPost(post);
    setPost(initialPostState);
  }

  function handleChange(target) {
    setPost({
      ...post,
      [target.id]: target.value,
    });
  }

  return (
    <div className="form__container">
      <h3 style={{ textAlign: "center" }}>Inserisci un nuovo Post</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titolo</label>
        <input
          id="title"
          type="text"
          placeholder="Inserisci il titolo"
          value={post.title}
          onChange={(e) => handleChange(e.target)}
        />
        <label htmlFor="content">Contenuto</label>
        <textarea
          id="content"
          placeholder="Inserisci il contenuto"
          value={post.content}
          onChange={(e) => handleChange(e.target)}
        ></textarea>
        <button className="btn btn_primary" type="submit">
          Crea
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
