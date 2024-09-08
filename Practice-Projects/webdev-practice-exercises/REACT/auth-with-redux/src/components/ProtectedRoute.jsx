import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    // Si no está autenticado, redirigimos al login
    return <Navigate to='/login' />;
  }

  // Si está autenticado, renderizamos el contenido de la ruta protegida
  return children;
};

export default ProtectedRoute;
