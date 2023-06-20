import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminHomePage() {
  const { user } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Benvenuto {user?.name} 😊.</p>
      <ul className="dashboard__links">
        <li>
          <Link to="/admin/posts">Gestisci i posts</Link>
        </li>
      </ul>
    </>
  );
}
