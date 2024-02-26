import styles from "./tarjetaPractica.module.css";

function TarjetaPractica({ area, contenido, abogado, numero }) {
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
            <button className={styles.buttonContactar}>Contactar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TarjetaPractica;
