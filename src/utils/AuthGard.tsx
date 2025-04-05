import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

interface AuthenticationRouterProps {
    children: ReactNode;
  }
    
const AuthenticationRouter: FC<AuthenticationRouterProps> = ({ children }) => {
  const location = useLocation();
  
  if (Cookies.get("token")) return <>{children}</>;

  return <Navigate to="/auth" state={{ from: location }} replace />;
};

export default AuthenticationRouter;