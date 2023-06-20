import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../services/UsersService";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useAuth();

  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  async function login(e) {
    // contattare api in POST http://localhost:3001/login
    e.preventDefault();
    try {
      const data = await UsersService.login(credentials);
      setIsLoggedIn(true);
      setUser(data.user);
      navigate("/admin");
    } catch (err) {
      setError(err);
    }
  }

  function handleField(target) {
    setCredentials({
      ...credentials,
      [target.id]: target.value,
    });
  }

  return (
    <>
      <h1>Login</h1>
      <div className="form__container">
        <form onSubmit={login}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Inserisci la tua email"
            value={credentials.email}
            onChange={(e) => handleField(e.target)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Inserisci la tua password"
            value={credentials.password}
            onChange={(e) => handleField(e.target)}
          />
          <button className="btn btn_primary" type="submit">
            Accedi
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
}
