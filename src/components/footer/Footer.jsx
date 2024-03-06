import styles from "./footer.module.css";
import imgLogo from "../../assets/logo.png";
import { IoLogoInstagram } from "react-icons/io5";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.blanco}>
        <img
          src={imgLogo}
          alt="Logo Estudio Juridico Mateo"
          className={styles.imgFooter}
        />
        <p>COPYRIGHT © estudioJuridicoMateo 2024</p>
      </div>
      <div className={styles.gris}>
        <div>
          <h4 className={styles.title}>Áreas de práctica</h4>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="/">Derecho Laboral</a>
              </li>
              <li className={styles.navItem}>
                <a href="/">Derecho Civil</a>
              </li>
              <li className={styles.navItem}>
                <a href="/">Derecho Comercial</a>
              </li>
              <li className={styles.navItem}>
                <a href="/">Derecho Familiar</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <h4 className={styles.title}>Redes</h4>
          </div>
          <div>
            <IoLogoInstagram size={33} color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
