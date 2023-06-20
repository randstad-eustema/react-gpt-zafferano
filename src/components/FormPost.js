import { useEffect, useState } from "react";

const initialPostState = {
  title: "",
  content: "",
};

export default function FormNewPost({
  editPost,
  setEditPost,
  error,
  onSubmit,
}) {
  const [post, setPost] = useState(initialPostState);

  useEffect(() => {
    if (editPost !== null) setPost(editPost);
  }, [editPost]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(post);
    setPost(initialPostState);
  }

  function handleReset() {
    setPost(initialPostState);
    setEditPost(null);
  }

  function handleChange(target) {
    setPost({
      ...post,
      [target.id]: target.value,
    });
  }

  return (
    <div className="form__container">
      <h3 style={{ textAlign: "center" }}>
        {editPost ? "Modifica il post" : "Inserisci un nuovo Post"}
      </h3>
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
          rows={8}
          value={post.content}
          onChange={(e) => handleChange(e.target)}
        ></textarea>
        <button className="btn" type="button" onClick={handleReset}>
          Annulla
        </button>
        <button className="btn btn_primary" type="submit">
          {editPost ? "Salva" : "Crea"}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
