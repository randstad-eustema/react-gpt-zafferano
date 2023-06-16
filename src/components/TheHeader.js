import { Link } from "react-router-dom";
import auth from "../helpers/auth";

export default function TheHeader() {
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
          {auth.getToken() && (
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
