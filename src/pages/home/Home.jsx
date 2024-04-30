import TarjetaPractica from "../../components/tarjetaPractica/TarjetaPractica";
import styles from "./home.module.css";
import { VscMail } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import ChatBot2 from "../../components/chatBot2/ChatBot2";
import { BsChatDots } from "react-icons/bs"; // Asumiendo que quieres usar este icono para el chat
import { useState } from "react";
import imgNosotros from "../../assets/nosotros.jpg";

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
        <div>
          <h2 className={styles.tituloseccion}>Áreas de práctica</h2>
          <div className={styles.containertarjetas}>
            <TarjetaPractica
              area="Derecho del Trabajo"
              contenido="Despidos - Accidentes de trabajo - Enfermedades profesionales - Comisiones médicas - Empleo público provincial y municipal - Juicio."
              abogado="Dra. Sara Adriana Nasiff"
              link="trabajo"
              numero="+54 11 6828-5284"
            />

            <TarjetaPractica
              area="Derecho de la Familia"
              contenido=" Alimentos - divorcios - Regimen de comunicación - Plan de parentalidad - Uniones convivenciales - Separaciones - Manutención - Acuerdos."
              abogado="Dr. Ramiro Manuel Mateo"
              link="familia"
              numero="+54 11 3798-4208"
            />

            <TarjetaPractica
              area="Derecho Patrimonial"
              contenido="Sucesiones - Condominio - Contrato - Alquiler - Locación - Pagos - Fideicomiso - Daños y perjuicios - Juicios - Asesoramiento - Patrimonio."
              abogado="Ramiro Mateo"
              link="patrimonial"
              numero="+54 11 3920-8797"
            />
            <TarjetaPractica
              area="Derecho Comercial"
              contenido="Juicio ejecutivo - Cheque - Pagaré - Start up - Empresa - Sociedad - Acciones - Contratos - Banco - Compañía de seguros - Estatuto - Trámites - Inscripciones - Sociedades"
              abogado="Dra. Martina Inés Mateo"
              link="comercial"
              numero="+54 11 6828-5284"
            />
          </div>
        </div>
        <section className={styles.contactoContainer} id="contacto">
          <h2 className={styles.tituloseccion}>Contacto</h2>
          <div className={styles.cardContacto}>
            <div className={styles.espaciado}>
              <div>
                <p>Aguardamos tu consulta</p>
              </div>
              <div className={styles.infoContacto}>
                <a
                  href="https://www.google.com/maps/place/Av.+Centenario+725,+B1642CAI+San+Isidro,+Provincia+de+Buenos+Aires/@-34.4684266,-58.5202815,17z/data=!4m6!3m5!1s0x95bcb03049344a2d:0x7606b740fbe0d7c!8m2!3d-34.468431!4d-58.5177066!16s%2Fg%2F11s9kjy22j?entry=ttu"
                  target="_blank"
                  className={styles.link}
                >
                  <IoCompassOutline size={iconSize} />
                  <p>Av. Centenario 725, San Isidro</p>
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
                  @estudiojuridicomateo
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
        </section>
        <section className={styles.nosotrosContainer} id="nosotros">
          <h3 className={styles.tituloseccion}>Sobre Nosotros</h3>
          <div className={styles.nosotrosSubContainer}>
            <img
              src={imgNosotros}
              alt="Logo Estudio Juridico Mateo"
              className={styles.imgNosotros}
            />

            <div className={styles.textoNosotros}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nostrum asperiores molestias, quos labore repellendus
                vel velit ratione modi, quia quas esse magnam facere soluta ipsa
                accusantium! Laboriosam, numquam quia. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Reiciendis velit nisi dicta
                natus quibusdam quos vero quod. Minima iste officiis libero esse
                laudantium, molestiae cum tenetur, dolorem temporibus
                repellendus eos?
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
            bottom: "10vh",
            right: "2rem",
            cursor: "pointer",
          }}
          onClick={handleChatBotToggle}
        >
          <BsChatDots size={iconSize * 1.8} className={styles.chatBotIcon} />
        </div>
      )}
    </>
  );
}

export default Home;
