import TarjetaPractica from "../../components/tarjetaPractica/TarjetaPractica";
import styles from "./home.module.css";
import { VscMail } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
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
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            Comunicación con los hijos - Divorcio"
              abogado="Ramiro Mateo"
              numero="+54 11 4743-8758"
            />
            <TarjetaPractica
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            
          Comunicación con los hijos - Divorcio"
              abogado="Ramiro Mateo"
              numero="+54 11 4743-8758"
            />
            <TarjetaPractica
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            Comunicación con los hijos - Divorcio"
              abogado="Ramiro Mateo"
              numero="+54 11 4743-8758"
            />
            <TarjetaPractica
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            Comunicación con los hijos - Divorcio"
              abogado="Ramiro Mateo"
              numero="+54 11 4743-8758"
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
                <IoCompassOutline size={iconSize} />
                <p>Avenida Centenario 725</p>
              </div>
              <div className={styles.infoContacto}>
                <VscMail size={iconSize} />
                <p>consultas@ramiromateo.com</p>
              </div>
              <div className={styles.infoContacto}>
                <FaWhatsapp size={iconSize} />
                <p>+54 9 11 3798-4208</p>
              </div>
              <div className={styles.infoContacto}>
                <IoLogoInstagram size={iconSize} />
                <p>@estudiojuridicomateo</p>
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
            <div>
              <img
                src={imgNosotros}
                alt="Logo Estudio Juridico Mateo"
                className={styles.imgNosotros}
              />
            </div>
            <div className={styles.textoNosotros}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum nostrum asperiores molestias, quos labore repellendus
              vel velit ratione modi, quia quas esse magnam facere soluta ipsa
              accusantium! Laboriosam, numquam quia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reiciendis velit nisi dicta natus
              quibusdam quos vero quod. Minima iste officiis libero esse
              laudantium, molestiae cum tenetur, dolorem temporibus repellendus
              eos?
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
            bottom: "30vh",
            right: "2rem",
            cursor: "pointer",
          }}
          onClick={handleChatBotToggle}
        >
          <BsChatDots size={iconSize * 2} /> {/* Icono de chat más grande */}
        </div>
      )}
    </>
  );
}

export default Home;
