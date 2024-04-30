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
                <a href="/derechos/trabajo">Derecho de Trabajo</a>
              </li>
              <li className={styles.navItem}>
                <a href="/derechos/familia">Derecho Familiar</a>
              </li>
              <li className={styles.navItem}>
                <a href="/derechos/patrimonial">Derecho Patrimonial</a>
              </li>
              <li className={styles.navItem}>
                <a href="/derechos/comercial">Derecho Comercial</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <h4 className={styles.title}>Redes</h4>
          </div>
          <div>
            <a
              href="https://www.instagram.com/estudiojuridicomateo/"
              target="_blank"
              className={styles.link}
            >
              <IoLogoInstagram size={33} color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
