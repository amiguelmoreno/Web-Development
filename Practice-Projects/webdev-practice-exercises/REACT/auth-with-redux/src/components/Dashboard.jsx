import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bienvenido al panel principal de la aplicación.</p>

      {/* Botones de navegación */}
      <nav>
        <Link to='/profile'>
          <button>Ir al Perfil</button>
        </Link>
        <Link to='/settings'>
          <button>Ir a Configuración</button>
        </Link>
      </nav>
    </div>
  );
};

export default Dashboard;
