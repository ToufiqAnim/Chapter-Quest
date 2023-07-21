import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: IProps) => {
  const storedAuthData = localStorage.getItem("auth");
  const token = storedAuthData ? JSON.parse(storedAuthData).token : null;
  return token ? <Navigate to="/" /> : children;
};
const PrivateRoute = ({ children }: IProps) => {
  const storedAuthData = localStorage.getItem("auth");
  const token = storedAuthData ? JSON.parse(storedAuthData).token : null;
  return token ? children : <Navigate to="/login" />;
};
export { PublicRoute, PrivateRoute };
