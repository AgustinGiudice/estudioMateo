import React, { useState } from "react";
import "./ChatBot2.css"; // Asegúrate de tener este archivo CSS en tu proyecto
import bot from "../../assets/bot.png";
import { Link } from "react-router-dom";

const derechoData = [
  {
    area: "Derecho del Trabajo",
    contenido:
      "Sucesiones - Conflictos familiares - Cuota alimentaria - Comunicación con los hijos - Divorcio",
    abogado: "Dra. Sara Adriana Nasiff",
    numero: "+54 11 6828-5284",
    palabra_clave: "familiar",
    link: "trabajo",
  },
  {
    area: "Derecho de la Familia",
    contenido:
      "Despidos - Accidentes de trabajo - Trabajo en condiciones insalubres",
    abogado: "Dr. Ramiro Manuel Mateo",
    numero: "+54 11 3798-4208",
    palabra_clave: "laboral",
    link: "familia",
  },
  {
    area: "Derecho Patrimonial",
    contenido: "Robo - Homicidio - Lesiones - Abuso sexual",
    abogado: "Ramiro Mateo",
    numero: "+54 11 3920-8797",
    palabra_clave: "penal",
    link: "patrimonial",
  },
  {
    area: "Derecho Comercial",
    contenido:
      "Contratos - Daños y perjuicios - Derechos reales - Derecho de familia",
    abogado: "Dra. Martina Inés Mateo",
    numero: "+54 11 6828-5284",
    palabra_clave: "civil",
    link: "comercial",
  },
];

function ChatBot2() {
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! ¿En qué área de derecho estás interesado?",
      options: [
        { text: "Derecho del Trabajo", action: () => selectOption(0) },
        { text: "Derecho de la Familia", action: () => selectOption(1) },
        { text: "Derecho Patrimonial", action: () => selectOption(2) },
        { text: "Derecho Comercial", action: () => selectOption(3) },
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
    const respuestaBot = `Nuestro especialista en ${selectedArea.area} es el/la ${selectedArea.abogado}. Puede ponerse en contacto llamando al ${selectedArea.numero}`;
    // Añadir la respuesta del bot primero
    setTimeout(() => {
      sendMessage(`${respuestaBot}`, "bot");
      // Luego añadir el botón "Ver Más"
      setTimeout(addVerMasButton(selectedArea.link), 100);
    }, 500);
  };
  const addVerMasButton = (link) => {
    const verMasButton = {
      text: (
        <Link className="linkChat" to={`/derechos/${link}`}>
          Click Aqui
        </Link>
      ),
      action: () => console.log(link),
    };
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: "Tambien puede ver mas haciendo",
        options: [verMasButton],
        from: "bot",
      },
    ]);
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
