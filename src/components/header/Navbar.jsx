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

      <div className={styles.enlaces}>
        <nav>
          <a href="/areas">Áreas De Práctica</a>
          <a href="">Contacto</a>
          <a href="/nosotros">Nosotros</a>
        </nav>
      </div>
    </nav>
  );
}
