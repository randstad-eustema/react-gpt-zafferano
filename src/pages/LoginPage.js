import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import UsersService from "../services/UsersService";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useAuth();

  const [error, setError] = useState("");

  const [values, handleChange, resetForm] = useForm({
    email: "",
    password: "",
  });

  async function login(e) {
    // contattare api in POST http://localhost:3001/login
    e.preventDefault();
    try {
      const data = await UsersService.login(values);
      setIsLoggedIn(true);
      setUser(data.user);
      navigate("/admin");
    } catch (err) {
      setError(err);
      resetForm();
    }
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
            value={values.email}
            onChange={(e) => handleChange(e.target)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Inserisci la tua password"
            value={values.password}
            onChange={(e) => handleChange(e.target)}
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
