import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostsService from "../services/PostsService";

export default function PostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const post = await PostsService.readById(id);
        setPost(post);
      } catch (error) {
        navigate("/page-404");
      }
    })();
  }, [id, navigate]);

  return (
    <>
      <h1>{post.title}</h1>
      <section>
        <p>{post.content}</p>
      </section>
    </>
  );
}
