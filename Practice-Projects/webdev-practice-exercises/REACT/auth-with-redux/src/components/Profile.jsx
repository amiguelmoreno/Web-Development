import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Esta es la página de perfil del usuario autenticado.</p>

      {/* Botones de navegación */}
      <nav>
        <Link to='/dashboard'>
          <button>Ir al Dashboard</button>
        </Link>
        <Link to='/settings'>
          <button>Ir a Configuración</button>
        </Link>
      </nav>
    </div>
  );
};

export default Profile;
