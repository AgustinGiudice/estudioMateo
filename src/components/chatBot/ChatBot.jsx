import React, { useState } from "react";
import "./ChatBot.css"; // Asegúrate de tener este archivo CSS en tu proyecto
import bot from "../../assets/bot.png";

const derechoData = [
  {
    area: "Derecho Familiar",
    contenido:
      "Sucesiones - Conflictos familiares - Cuota alimentaria - Comunicación con los hijos - Divorcio",
    abogado: "Abogado Ramiro Mateo",
    numero: "+54 11 4743-8758",
    palabra_clave: "familia",
  },
  {
    area: "Derecho Laboral",
    contenido:
      "Despidos - Accidentes de trabajo - Trabajo en condiciones insalubres",
    abogado: "Abogada Hermana Ramiro",
    numero: "+54 11 3341-5563",
    palabra_clave: "laboral",
  },
  {
    area: "Derecho penal",
    contenido: "Robo - Homicidio - Lesiones - Abuso sexual",
    abogado: "Sr Padre Ramiro",
    numero: "+54 11 2231-4551",
    palabra_clave: "penal",
  },
  {
    area: "Derecho Civil",
    contenido:
      "Contratos - Daños y perjuicios - Derechos reales - Derecho de familia",
    abogado: "Prima Ramiro",
    numero: "+54 11 4415-5112",
    palabra_clave: "civil",
  },
];

function ChatBot() {
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState([
    { text: "¡Hola! ¿Que tipo de derecho le interesa encontrar?", from: "bot" },
  ]);

  const mensajePredeterminado = `Parece que no puedo encontrar una respuesta específica basada en tu mensaje. 
  Aquí tienes una lista de las áreas de derecho en las que puedo asistirte:\n\n- Derecho Familiar, Derecho Laboral, 
  Derecho Penal, Derecho Civil\n\nPor favor, escribe el área de derecho en la que necesitas asistencia.`;

  const sendMessage = (event) => {
    event.preventDefault();
    const messageText = event.target.message.value.trim();
    if (messageText) {
      setMessages([...messages, { text: messageText, from: "user" }]);
      const respuesta = derechoData.find((d) =>
        messageText.toLowerCase().includes(d.palabra_clave)
      );
      if (respuesta) {
        const respuestaBot = `Nuestro abogado especialista en ${respuesta.area} es ${respuesta.abogado}. Puede contactarlo al ${respuesta.numero}`;
        setMessages((messages) => [
          ...messages,
          { text: respuestaBot, from: "bot" },
        ]);
      } else {
        setMessages((messages) => [
          ...messages,
          { text: mensajePredeterminado, from: "bot" },
        ]);
      }

      event.target.reset(); // Limpiar el campo después de enviar
    }
  };

  return (
    <div className={`chat-bot ${chatOpen ? "open" : "closed"}`}>
      <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
        <span>Bot Estudio Mateo</span>

        <img
          src={bot}
          alt="Bot"
          className={`bot-icon ${chatOpen ? "" : "bot-closed"}`}
        />
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      {chatOpen && (
        <form onSubmit={sendMessage} className="message-form">
          <input
            type="text"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default ChatBot;
