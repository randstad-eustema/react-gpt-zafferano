import { Link } from "react-router-dom";

export default function TheFooter() {
  // const navFooter = ["Home Page", "Chi Siamo", "Le ultime news"];

  function handlerClick(text) {
    console.log(text);
  }

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
      <Link className="btn btn__primary" to="/login">
        Login
      </Link>
    </footer>
  );
}
