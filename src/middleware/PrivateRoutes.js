import { Navigate } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

export default function PrivateRoutes() {
  const token = sessionStorage.getItem("accessToken");

  return token ? <BaseLayout /> : <Navigate to="/login" />;
}
