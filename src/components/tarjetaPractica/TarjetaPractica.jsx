import { Link } from "react-router-dom";
import styles from "./tarjetaPractica.module.css";

function TarjetaPractica({ area, contenido, abogado, numero, link }) {
  return (
    <>
      <div className={styles.tarjetaPracticaContainer}>
        <div className={`${styles.tituloContainer} ${styles.centrar}`}>
          <h2>{area}</h2>
        </div>
        <div className={styles.contenidoContainer}>
          <div>
            <p>{contenido}</p>
          </div>
          <div className={styles.centrar}>
            <hr className={styles.lineaHorizontal} />
          </div>

          <div>
            <p className={styles.nombre}> {abogado}</p>
            <p> {numero}</p>
          </div>

          <div className={styles.centrar}>
            <Link to={`/derechos/${link}`} className={styles.buttonContactar}>
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TarjetaPractica;
