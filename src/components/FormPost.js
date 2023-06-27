import { useEffect } from "react";
import useForm from "../hooks/useForm";

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
  const [post, handleChange, resetForm, setValues] = useForm(initialPostState);

  useEffect(() => {
    if (editPost !== null) setValues(editPost);
  }, [editPost, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(post);
    resetForm();
  }

  function handleReset() {
    resetForm();
    setEditPost(null);
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
