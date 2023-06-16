import { Link } from "react-router-dom";

export default function AdminHomePage() {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Benvenuto NOME 😊.</p>
      <ul className="dashboard__links">
        <li>
          <Link to="/admin/posts">Gestisci i posts</Link>
        </li>
      </ul>
    </>
  );
}
