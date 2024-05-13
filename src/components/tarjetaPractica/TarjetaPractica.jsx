import { Link } from "react-router-dom";
import styles from "./tarjetaPractica.module.css";

function TarjetaPractica({
  area,
  contenido,
  contenido2,
  abogado,
  numero,
  link,
}) {
  const partes = contenido.split(/(\*\*.*?\*\*)/);
  const partes2 = contenido2.split(/(\*\*.*?\*\*)/);

  return (
    <>
      <div className={styles.tarjetaPracticaContainer}>
        <div className={`${styles.tituloContainer} ${styles.centrar}`}>
          <h2>{area}</h2>
        </div>
        <div className={styles.contenidoContainer}>
          <div>
            <p className={styles.contenido}>
              {partes.map((parte, index) => {
                if (parte.startsWith("**") && parte.endsWith("**")) {
                  // Si la parte está entre **, se muestra en negrita
                  return <strong key={index}>{parte.slice(2, -2)}</strong>;
                } else {
                  return parte;
                }
              })}
            </p>
            <p className={styles.contenido}>
              {partes2.map((parte, index) => {
                if (parte.startsWith("**") && parte.endsWith("**")) {
                  // Si la parte está entre **, se muestra en negrita
                  return <strong key={index}>{parte.slice(2, -2)}</strong>;
                } else {
                  return parte;
                }
              })}
            </p>
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
