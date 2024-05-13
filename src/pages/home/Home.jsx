import TarjetaPractica from "../../components/tarjetaPractica/TarjetaPractica";
import styles from "./home.module.css";
import { VscMail } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import ChatBot2 from "../../components/chatBot2/ChatBot2";
import { BsChatDots } from "react-icons/bs"; //icono chat
import { useState } from "react";
// import imgNosotros from "../../assets/nosotros.jpg";
import imgNosotros from "../../assets/logo.png";

function Home() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const iconSize = 33;
  const headerHeight = 100;
  const numero = " +54 9 11 3798-4208";
  // Función para manejar la apertura del ChatBot
  const handleChatBotToggle = () => setIsChatBotOpen(!isChatBotOpen);

  return (
    <>
      <div
        className={styles.containerHome}
        style={{ paddingTop: headerHeight }}
        id="areas"
      >
        <h1 style={{ display: "none" }}>Estudio jurídico Mateo</h1>
        <div>
          <h2 className={styles.tituloseccion}>Áreas de práctica</h2>
          <div className={styles.containertarjetas}>
            <TarjetaPractica
              area="Derecho del Trabajo"
              contenido="El Estudio Jurídico lleva adelante temas en materia de ** despidos, accidentes de trabajo, enfermedades profesionales ** , empleo público provincial y municipal."
              contenido2="También realiza la tramitación de expedientes en sede administrativa (**Comisiones Médicas, Ministerio de Trabajo ** ) así como también  ** en sede judicial **  (Provincia de Buenos Aires y Capital Federal)."
              abogado="Dra. Sara Adriana Nasiff"
              link="trabajo"
              numero="+54 11 6828-5284"
            />

            <TarjetaPractica
              area="Derecho de Familia"
              contenido="El Estudio Jurídico lleva adelante todas aquellas cuestiones vinculadas a los conflictos de familia (**régimen de comunicación, divorcios, plan de parentalidad, alimentos**)."
              contenido2="También interviene en ** divisiones de bienes**, uniones convivenciales y separaciones, así como en la confección de acuerdos prematrimoniales y de convivencia."
              abogado="Dr. Ramiro Manuel Mateo"
              link="familia"
              numero="+54 11 3798-4208"
            />

            <TarjetaPractica
              area="Derecho Patrimonial"
              contenido="El Estudio Jurídico lleva adelante todas aquellas cuestiones que involucran al patrimonio tanto de las personas físicas como jurídicas (**sucesiones, divisiones de condominio, constitución y disolución de fideicomisos, contratos en general y en particular de obra y de locación, acciones por daños y perjuicios contractuales y extracontractuales**)."
              contenido2=" Gestionamos la representación judicial y extrajudicial en materia civil y comercial en la Provincia de Buenos Aires."
              abogado="Dr. Roberto Gabriel Mateo"
              link="patrimonial"
              numero="+54 11 3920-8797"
            />
            <TarjetaPractica
              area="Derecho Comercial"
              contenido="El Estudio Jurídico lleva adelante todas aquellas acciones vinculadas al **derecho comercial y constitución de sociedades y “StartUps”** (**redacción de estatutos, trámites ante organismos, inscripciones, designación de autoridades**), brindamos servicios de asesoramiento jurídico a **entidades Bancarias y Compañías de Seguros**."
              contenido2="Nos desempeñamos en sede judicial y extrajudicial en Provincia de Buenos Aires (**juicios ejecutivos, juicios por cobro de pesos, recuperos de créditos**)."
              abogado="Dra. Martina Inés Mateo"
              link="comercial"
              numero="+54 11 6828-5284"
            />
          </div>
        </div>
        <section className={styles.contactoContainer} id="contacto">
          <h2 className={styles.tituloseccion}>Contacto</h2>
          <div className={styles.containerCards}>
            <div className={styles.cardContacto}>
              <div className={styles.espaciado}>
                <h3>Aguardamos tu consulta</h3>

                <div className={styles.infoContacto}>
                  <a
                    href="https://www.google.com/maps/place/Av.+Centenario+725,+B1642CAI+San+Isidro,+Provincia+de+Buenos+Aires/@-34.4684266,-58.5202815,17z/data=!4m6!3m5!1s0x95bcb03049344a2d:0x7606b740fbe0d7c!8m2!3d-34.468431!4d-58.5177066!16s%2Fg%2F11s9kjy22j?entry=ttu"
                    target="_blank"
                    className={styles.link}
                  >
                    <IoCompassOutline size={iconSize} />
                    <p>Avenida Centenario 725 Piso 1 “B” San Isidro</p>
                  </a>
                </div>
                <div className={styles.infoContacto}>
                  <a
                    href={`mailto:ramiromateo@estudiomateo.com.ar`}
                    className={styles.link}
                  >
                    <VscMail size={iconSize} />
                    <p>consultas@ramiromateo.com</p>
                  </a>
                </div>
                <div className={styles.infoContacto}>
                  <a
                    href={`https://wa.me/${numero.replace(/\D/g, "")}`}
                    className={styles.link}
                    target="_blank"
                  >
                    <FaWhatsapp size={iconSize} />
                    <p>{numero}</p>
                  </a>
                </div>
                <div className={styles.infoContacto}>
                  <a href="tel:+541148729354" className={styles.link}>
                    <BsTelephone size={iconSize} />
                    <p>4872-9354</p>
                  </a>
                </div>
                <div className={styles.infoContacto}>
                  <a
                    href="https://www.instagram.com/estudiojuridicomateo/"
                    target="_blank"
                    className={styles.link}
                  >
                    <IoLogoInstagram size={iconSize} />
                    <p>@estudiojuridicomateo</p>
                  </a>
                </div>
              </div>
              <div className={styles.mapa}>
                <iframe
                  title="Mapa Google"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13157.432866677329!2d-58.51838043016358!3d-34.46843590000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0304f527f4b%3A0x5ef62b1ac38b7593!2sEstudio%20Juridico%20Mateo!5e0!3m2!1ses!2sar!4v1708902231608!5m2!1ses!2sar"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.nosotrosContainer} id="nosotros">
          <h2 className={styles.tituloseccion}>Sobre Nosotros</h2>
          <div className={styles.nosotrosSubContainer}>
            <img
              src={imgNosotros}
              alt="Logo Estudio Juridico Mateo"
              className={styles.imgNosotros}
            />

            <div className={styles.textoNosotros}>
              <p>
                Fundado en 1955, el Estudio Jurídico Mateo se ha consolidado
                como una institución comprometida con la excelencia en la
                prestación de servicios legales. Nuestro compromiso se
                fundamenta en la eficiencia profesional, la calidad en el trato
                y la responsabilidad en la gestión de los asuntos encomendados
                por nuestros clientes. <br /> Nuestra firma está integrada por
                un equipo altamente capacitado, conformado por cuatro socios,
                asociados y colaboradores, todos ellos comprometidos con los más
                altos estándares éticos y profesionales.
                <br /> En el Estudio Jurídico Mateo, ofrecemos soluciones
                legales integrales en diversas áreas del derecho. Nuestro
                enfoque se caracteriza por la atención personalizada y la
                búsqueda constante de la mejor estrategia legal para cada caso.
                <br />
                Nos destacamos por nuestra capacidad para prevenir, gestionar y
                resolver conflictos legales de manera eficaz y eficiente,
                siempre velando por los intereses de nuestros clientes y
                cumpliendo con las normas legales vigentes.
                <br />{" "}
                <b>
                  Si busca asesoramiento jurídico de calidad, no dude en
                  contactar al Estudio Jurídico Mateo. Estamos comprometidos con
                  su satisfacción y en brindarle soluciones legales efectivas y
                  confiables.
                </b>
              </p>
            </div>
          </div>
        </section>
      </div>

      {isChatBotOpen ? (
        <ChatBot2 />
      ) : (
        <div
          style={{
            position: "fixed",
            bottom: "2vh",
            right: "2rem",
            cursor: "pointer",
          }}
          onClick={handleChatBotToggle}
        >
          <BsChatDots size={iconSize * 2.2} className={styles.chatBotIcon} />
        </div>
      )}
    </>
  );
}

export default Home;
