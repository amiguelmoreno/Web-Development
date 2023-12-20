import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {Date.now().getFullYear} by WorldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
