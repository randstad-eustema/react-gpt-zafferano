import auth from "../helpers/auth";
import { Link } from "react-router-dom";

export default function AdminHomePage() {
  const user = auth.getUser();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Benvenuto {user.name} 😊.</p>
      <ul className="dashboard__links">
        <li>
          <Link to="/admin/posts">Gestisci i posts</Link>
        </li>
      </ul>
    </>
  );
}
