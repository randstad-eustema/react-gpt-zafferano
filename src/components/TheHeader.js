import { Link } from "react-router-dom";

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
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
