import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";

function sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo> </Logo>
      <AppNav></AppNav>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default sidebar;
