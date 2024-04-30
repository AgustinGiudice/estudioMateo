import React, { useState } from "react";
import "./ChatBot2.css"; // Asegúrate de tener este archivo CSS en tu proyecto
import bot from "../../assets/bot.png";

const derechoData = [
  {
    area: "Derecho Familiar",
    contenido:
      "Sucesiones - Conflictos familiares - Cuota alimentaria - Comunicación con los hijos - Divorcio",
    abogado: "Abogado Ramiro Mateo",
    numero: "+54 11 4743-8758",
    palabra_clave: "familiar",
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
    area: "Derecho Penal",
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

function ChatBot2() {
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! ¿En qué área de derecho estás interesado?",
      options: [
        { text: "Derecho Familiar", action: () => selectOption(0) },
        { text: "Derecho Laboral", action: () => selectOption(1) },
        { text: "Derecho Penal", action: () => selectOption(2) },
        { text: "Derecho Civil", action: () => selectOption(3) },
      ],
      from: "bot",
    },
  ]);

  const sendMessage = (text, from = "user") => {
    setMessages((prevMessages) => [...prevMessages, { text, from }]);
  };

  const selectOption = (index) => {
    const selectedArea = derechoData[index];
    // Simula que el usuario envía un mensaje con su selección antes de recibir la respuesta del bot
    sendMessage(`Seleccionaste ${selectedArea.area}`, "user");
    const respuestaBot = `Nuestro abogado especialista en ${selectedArea.area} es ${selectedArea.abogado}. Puede contactarlo al ${selectedArea.numero}`;
    setTimeout(() => sendMessage(respuestaBot, "bot"), 500); // Añadimos un breve retraso para simular la secuencia de mensajes
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
            {msg.options &&
              msg.options.map((option, i) => (
                <>
                  <br key={`br-${i}`} />
                  <button
                    key={i}
                    onClick={option.action}
                    className="option-button"
                  >
                    {option.text}
                  </button>
                </>
              ))}
          </div>
        ))}
      </div>
      {chatOpen && (
        <form className="message-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            disabled
          />
        </form>
      )}
    </div>
  );
}

export default ChatBot2;
