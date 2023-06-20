import { useEffect } from "react";
import UsersService from "../services/UsersService";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const { setUser, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    UsersService.logout().then(() => {
      setUser(null);
      setIsLoggedIn(false);
      navigate("/login");
    });
  });
}
