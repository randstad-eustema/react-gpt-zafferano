import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function TheFooter() {
  // const navFooter = ["Home Page", "Chi Siamo", "Le ultime news"];
  const { isLoggedIn } = useAuth();
  return (
    <footer>
      <nav>
        {/*
        <ul>
          {navFooter.map((elm, index) => (
            <li key={index}>
              <a href="https://www.google.com/">{elm}</a>
            </li>
          ))}
        </ul>
         */}
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about-us">Chi Siamo</Link>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <Link className="btn btn__primary" to="/logout">
          Logout
        </Link>
      ) : (
        <Link className="btn btn__primary" to="/login">
          Login
        </Link>
      )}
    </footer>
  );
}
