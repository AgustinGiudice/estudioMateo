import styles from "./navbar.module.css";
import imgLogo from "../../assets/logo.png";
export function Navbar() {
  return (
    <nav className={styles.headerContainer}>
      <img
        src={imgLogo}
        alt="Logo Estudio Juridico Mateo"
        className={styles.imgHeader}
      />

      <div>
        <nav className={styles.enlaces}>
          <a href="#areas">Áreas De Práctica</a>
          <a href="#contacto">Contacto</a>
          <a href="#nosotros">Nosotros</a>
        </nav>
      </div>
    </nav>
  );
}
