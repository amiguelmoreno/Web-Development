import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Sistema de Autenticación</h1>
        <Routes>
          {/* Ruta de inicio de sesión pública */}
          <Route path='/login' element={<Login />} />

          {/* Rutas protegidas */}
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path='/settings'
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* Ruta por defecto: Redirigir al login */}
          <Route path='*' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
