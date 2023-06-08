export default function BaseCard({ title, content }) {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__content">{content || "valore di default"}</div>
    </div>
  );
}
