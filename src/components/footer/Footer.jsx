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
          className={styles.imgHeader}
        />
        <p>COPYRIGHT © estudioJuridicoMateo 2024</p>
      </div>
      <div className={styles.gris}>
        <div>
          <p>Áreas de práctica</p>
          <nav>
            <a href="/">Derecho Laboral</a>
            <a href="/">Derecho Civil</a>
            <a href="/">Derecho Comercial</a>
            <a href="/">Derecho Familiar</a>
          </nav>
        </div>
        <div>
          <div>
            <p>Redes</p>
          </div>
          <div>
            <IoLogoInstagram size={33} />
          </div>
        </div>
      </div>
    </footer>
  );
}
