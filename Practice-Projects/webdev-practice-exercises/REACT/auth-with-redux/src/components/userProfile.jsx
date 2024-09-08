// components/UserProfile.js
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Nombre de usuario: {user.username}</p>
    </div>
  );
};

export default UserProfile;
