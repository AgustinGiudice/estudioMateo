import TarjetaPractica from "../../components/tarjetaPractica/TarjetaPractica";
import styles from "./home.module.css";
import { VscMail } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import ChatBot from "../../components/chatBot/ChatBot";
function Home() {
  const iconSize = 33;
  const headerHeight = 100;
  return (
    <>
      <div
        className={styles.containerHome}
        style={{ paddingTop: headerHeight }}
      >
        <div>
          <h2 className={styles.tituloseccion}>Áreas de práctica</h2>
          <div className={styles.containertarjetas}>
            <TarjetaPractica
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            Comunicación con los hijos - Divorcio"
              abogado="Abogado Ramiro Mateo"
              numero="+54 11 4743-8758"
            />
            <TarjetaPractica
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            
          Comunicación con los hijos - Divorcio"
              abogado="Abogado Ramiro Mateo"
              numero="+54 11 4743-8758"
            />
            <TarjetaPractica
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            Comunicación con los hijos - Divorcio"
              abogado="Abogado Ramiro Mateo"
              numero="+54 11 4743-8758"
            />
            <TarjetaPractica
              area="Derecho Familiar"
              contenido="Sucesiones - Conflictos familiares -Cuota -alimentaria -
            Comunicación con los hijos - Divorcio"
              abogado="Abogado Ramiro Mateo"
              numero="+54 11 4743-8758"
            />
          </div>
        </div>
        <section className={styles.contactoContainer}>
          <h2 className={styles.tituloseccion}>Contacto</h2>
          <div className={styles.cardContacto}>
            <div>
              <p>Aguardamos tu consulta.</p>

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
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <section className={styles.nosotrosContainer}>
          <div></div>
        </section>
      </div>
      <ChatBot />
    </>
  );
}

export default Home;
