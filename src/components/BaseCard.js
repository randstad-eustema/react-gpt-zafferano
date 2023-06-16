import { Link } from "react-router-dom";

export default function BaseCard({ id, title, content }) {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__content">{content || "valore di default"}</div>
      <Link className="card__link" to={`/posts/${id}`}>
        Vai al post
      </Link>
    </div>
  );
}
