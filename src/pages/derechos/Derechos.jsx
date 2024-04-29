import { useState } from "react";
import styles from "./abogados.module.css";
import { Link, useParams } from "react-router-dom";
import { VscMail } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";

function Derechos() {
  const headerHeight = 100;
  const iconSize = 33;
  const { derecho } = useParams("derecho");
  const [message, setMessage] = useState(
    `Hola soy <INSERTAR NOMBRE Y APELLUDO>, DNI <INSERTAR DNI> y quiero hacer una consulta sobre <INSERTAR CONSULTA>`
  );

  const data = {
    familiar: {
      derecho: "Derecho Familiar",
      abogado: "Ramiro Mateo",
      telefono: "+54 11 4743-8758",
      palabrasClave: [
        "Sucesiones",
        "Conflictos familiares",
        "Cuota alimentaria",
      ],
    },
  };

  function WhatsappLink({ phoneNumber, message }) {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    return (
      <Link to={whatsappLink} target="_blank" className={styles.button}>
        Contactar
      </Link>
    );
  }

  return (
    <div
      className={styles.containerAbogados}
      style={{ paddingTop: headerHeight }}
    >
      <div className={styles.sectionContainer}>
        <h1 className={styles.title}>
          {data[derecho].derecho} - Abogado {data[derecho].abogado}
        </h1>
        <div className={styles.derechoContainer}>
          <h2>¿Qué es {derecho}</h2>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo
              voluptates dolor est ullam voluptate expedita similique facilis
              nihil, nisi et laborum nulla deserunt, recusandae, aliquid libero?
              Obcaecati, aliquid itaque.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo
              voluptates dolor est ullam voluptate expedita similique facilis
              nihil, nisi et laborum nulla deserunt, recusandae, aliquid libero?
              Obcaecati, aliquid itaque.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo
              voluptates dolor est ullam voluptate expedita similique facilis
              nihil, nisi et laborum nulla deserunt, recusandae, aliquid libero?
              Obcaecati, aliquid itaque.
            </li>
          </ul>
        </div>
        <WhatsappLink phoneNumber="5491161746234" message={message} />
      </div>
      <div className={`${styles.sectionContainer} ${styles.centerSection}`}>
        <h2 className={styles.title}>Contacto</h2>
        <div className={styles.containerContacto}>
          <div className={styles.infoContacto}>
            <IoCompassOutline size={iconSize} />
            <p>Avenida Centenario 725</p>
          </div>
          <div className={styles.infoContacto}>
            <VscMail size={iconSize} />
            <p>consultas@ramiromateo.com</p>
          </div>
          <div className={styles.infoContacto}>
            <FaWhatsapp size={iconSize} />
            <p>{data[derecho].telefono}</p>
          </div>
          <div className={styles.infoContacto}>
            <IoLogoInstagram size={iconSize} />
            <p>@estudiojuridicomateo</p>
          </div>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.title}>Titulos | Capacitaciones</h2>
        <div>
          <h3>Estudios realizados en el Colegio de Abogados de San Isidro</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3>Desempeño en la Función Pública de San Isidro</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Derechos;
