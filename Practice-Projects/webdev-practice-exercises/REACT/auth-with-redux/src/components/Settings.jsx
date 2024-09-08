// components/Settings.js

import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <h2>Configuración</h2>
      <p>Aquí puedes modificar la configuración de tu cuenta.</p>

      {/* Botones de navegación */}
      <nav>
        <Link to='/dashboard'>
          <button>Ir al Dashboard</button>
        </Link>
        <Link to='/profile'>
          <button>Ir al Perfil</button>
        </Link>
      </nav>
    </div>
  );
};

export default Settings;
