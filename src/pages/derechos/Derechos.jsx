import { useState } from "react";
import styles from "./derechos.module.css";
import { Link, useParams } from "react-router-dom";
import { VscMail } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import WhatsAppButton from "../../components/whatsAppButton/WhatsAppButton";

function Derechos() {
  const headerHeight = 100;
  const iconSize = 33;
  const { derecho } = useParams("derecho");
  const [message, setMessage] = useState(
    `Hola soy <INSERTAR NOMBRE Y APELLUDO>, DNI <INSERTAR DNI> y quiero hacer una consulta sobre <INSERTAR CONSULTA>`
  );

  const data = {
    trabajo: {
      derecho: "Derecho de trabajo",
      abogado: "Dra. Sara Adriana Nasiff",
      telefono: "+54 11 6828-5284",
      palabrasClave: [
        "despidos",
        "accidentes de trabajo",
        "enfermedades profesionales",
      ],
      contenido1:
        "El Estudio Jurídico lleva adelante temas en materia de despidos, accidentes de trabajo, enfermedades profesionales, empleo público provincial y municipal. ",
      contenido2:
        "También realiza la tramitación de expedientes en sede administrativa (Comisiones Médicas, Ministerio de Trabajo) así como también en sede judicial (Provincia de Buenos Aires y Capital Federal).  ",
      contenido3: "",
      estudios: [
        "Abogada egresada de la Universidad de Buenos Aires (UBA).",
        "Tomo 11 Folio 404 CASI.",
        "Especialista en Derecho del Trabajo (Relaciones Individuales del Trabajo y Derecho Colectivo).",
        "Se desempeñó como Jueza en el Tribunal de Trabajo Nro 3 de San Isidro (1996-2021).",
      ],
    },
    familia: {
      derecho: "Derecho familiar",
      abogado: "Dr. Ramiro Manuel Mateo",
      telefono: "+54 11 3798-4208",
      palabrasClave: [
        "alimentos",
        "divorcios",
        " regimen de comunicación",
        "plan de parentalidad",
      ],
      contenido1:
        "El Estudio Jurídico lleva adelante todas aquellas cuestiones vinculadas a los conflictos de familia (régimen de comunicación, divorcios, plan de parentalidad, alimentos).",
      contenido2:
        "También interviene en divisiones de bienes, uniones convivenciales y separaciones, así como en la confección de acuerdos prematrimoniales y de convivencia.",
      contenido3: "",
      estudios: [
        "Abogado egresado de la Pontificia Universidad Católica Argentina (UCA). ",
        "Tomo 46 Folio 20 CASI. ",
        "Mediador Ministerio de Justicia y Derechos Humanos de la Provincia de Buenos Aires (Matrícula SI 267) Especialista en Derecho de Familia.",
        "Diplomatura de Derecho de Familia de la Universidad Austral 2018. ",
        "Docente en Derecho de Familia. ",
      ],
    },
    patrimonial: {
      derecho: "Derecho patrimonial",
      abogado: "Dr. Roberto Gabriel Mateo",
      telefono: "+54 11 3920-8797",
      palabrasClave: [
        "alimentos",
        "divorcios",
        " regimen de comunicación",
        "plan de parentalidad",
      ],
      contenido1:
        "El Estudio Jurídico lleva adelante todas aquellas cuestiones que involucran al patrimonio de las personas físicas como jurídicas (sucesiones, divisiones de condominio, constitución y disolución de fideicomiso, contratos, acciones por daños y perjuicios contractuales y extracontractuales).",
      contenido2:
        "Gestionamos la representación judicial y extrajudicial en Provincia de Buenos Aires y Capital Federal.",
      contenido3: "",
      estudios: [
        "Abogado egresado de la Pontificia Universidad Católica Argentina (UCA). ",
        "Tomo 13 Folio 113 CASI. ",
        "Tomo 14 Folio 975 CPACF. ",
        "Consejero Titular del Colegio de Abogados de San Isidro, Protesorero y Tesorero (1988 / 1992).",
        "Conjuez del Departamento Judicial de San Isidro (2005). ",
        "Conjuez de la Excma Suprema Corte de Justicia de la Provincia de Buenos Aires (2009).",
        "Se desempeñó como Director General de Personal de la Municipalidad de San Isidro (1996) y Asesor Legal de la Municipalidad de San Isidro (2004 – 2023).",
      ],
    },
    comercial: {
      derecho: "Derecho comercial",
      abogado: "Dr. Ramiro Manuel Mateo",
      telefono: "+54 11 6828-5284",
      palabrasClave: [
        "alimentos",
        "divorcios",
        " regimen de comunicación",
        "plan de parentalidad",
      ],
      contenido1:
        "El Estudio lleva adelante todas aquellas acciones vinculadas al derecho comercial y constitución de sociedades y “Start Ups” (redacción de estatutos, trámites ante organismos, inscripciones, designación de autoridades), brindamos servicios de asesoramiento jurídico a entidades Bancarias y Compañías de Seguros.",
      contenido2:
        "Nos desempeñamos en sede judicial y extrajudicial, tanto en Provincia de Buenos Aires como en Capital Federal (juicios ejecutivos, juicios por cobro de pesos, recuperos de crédito). ",
      contenido3: "",
      estudios: [
        "Abogada egresada de la Pontificia Universidad Católica Argentina (UCA).",
        "Tomo 40 Folio 178 CASI.",
        "Tomo 103 Folio 389 CPACF.",
        "Mediadora Ministerio de Justicia y Derechos Humanos de la Provincia de Buenos Aires (Matrícula SI 266).",
        "Consejera Suplente, Titular y Prosecretaria del Colegio de Abogados de San Isidro (2014 / 2022).",
        "EMBA en curso (Executive Master in Business Administration) en UDESA (Universidad de San Andrés) cohorte 2023 / 2024.",
      ],
    },
  };

  function WhatsappLink({ phoneNumber, message }) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

    const whatsappLink = `https://wa.me/${cleanedPhoneNumber}?text=${encodeURIComponent(
      `Hola, queria contactarme con ${data[derecho].abogado} por una consulta referida a  ${data[derecho].derecho}`
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
      <WhatsAppButton numeroTelefono={data[derecho].telefono} />
      <div className={styles.sectionContainer}>
        <h1 className={styles.title}>
          {data[derecho].derecho} - {data[derecho].abogado}
        </h1>
        <div className={styles.derechoContainer}>
          <h2>¿Qué es derecho del {derecho}?</h2>
          <ul>
            <li>{data[derecho].contenido1}</li>
            <li>{data[derecho].contenido2}</li>
            {data[derecho].contenido3 !== "" && (
              <li>{data[derecho].contenido3}</li>
            )}
          </ul>
        </div>
        <WhatsappLink phoneNumber={data[derecho].telefono} message={message} />
      </div>
      <div className={`${styles.sectionContainer} ${styles.centerSection}`}>
        <h2 className={styles.title}>Contacto</h2>
        <div className={styles.containerContacto}>
          <div className={styles.infoContacto}>
            <a
              href="https://www.google.com/maps/place/Estudio+Juridico+Mateo/@-34.468436,-58.516964,15z/data=!4m6!3m5!1s0x95bcb0304f527f4b:0x5ef62b1ac38b7593!8m2!3d-34.4684359!4d-58.5177367!16s%2Fg%2F1hc3h3s17?hl=es&entry=ttu"
              target="_blank"
              className={styles.link}
            >
              <IoCompassOutline size={iconSize} />
              Av. Centenario 725, San Isidro
            </a>
          </div>
          <div className={styles.infoContacto}>
            <a
              href={`mailto:ramiromateo@estudiomateo.com.ar`}
              className={styles.link}
            >
              <VscMail size={iconSize} />
              ramiromateo@estudiomateo.com.ar
            </a>
          </div>
          <div className={styles.infoContacto}>
            <a
              href={`https://wa.me/${data[derecho].telefono.replace(
                /\D/g,
                ""
              )}`}
              className={styles.link}
              target="_blank"
            >
              <FaWhatsapp size={iconSize} />
              <p>{data[derecho].telefono}</p>
            </a>
          </div>
          <div className={styles.infoContacto}>
            <a
              href="https://www.instagram.com/estudiojuridicomateo/"
              target="_blank"
              className={styles.link}
            >
              <IoLogoInstagram size={iconSize} />
              @estudiojuridicomateo
            </a>
          </div>
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.title}>Titulos | Capacitaciones</h2>
        <div>
          <div>
            {data[derecho].estudios.length > 0 ? (
              data[derecho].estudios.map((estudio, index) => (
                <h3 className={styles.itemEstudio} key={index}>
                  -{estudio}
                </h3>
              ))
            ) : (
              <p>No se encontraron estudios.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Derechos;
