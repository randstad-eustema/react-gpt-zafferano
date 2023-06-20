import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function TheHeader() {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <h1 style={{ textAlign: "center" }}>👨‍🍳 GPT Zafferano</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about-us">Chi Siamo</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
