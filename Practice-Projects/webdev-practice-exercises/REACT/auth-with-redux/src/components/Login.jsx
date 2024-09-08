// components/Login.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { login } from "../redux/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Creamos el hook para redirigir

  const handleLogin = () => {
    if (username.trim() === "") {
      setError("El nombre de usuario no puede estar vacío.");
      return;
    }

    setError(null);
    const user = { username };
    dispatch(login(user)); // Iniciar sesión

    // Redirigir al dashboard después del login
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type='text'
        placeholder='Nombre de usuario'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
