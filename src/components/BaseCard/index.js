import { Link } from "react-router-dom";
import style from "./BaseCard.module.css";

export default function BaseCard({ id, title, content }) {
  return (
    <div className={style.card}>
      <h3 className={style.card__title}>{title}</h3>
      <div className={style.card__content}>
        {content || "valore di default"}
      </div>
      <Link className={style.card__link} to={`/posts/${id}`}>
        Vai al post
      </Link>
    </div>
  );
}
