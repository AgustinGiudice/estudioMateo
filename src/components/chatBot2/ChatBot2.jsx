import React, { useState } from "react";
import "./ChatBot2.css"; // Asegúrate de tener este archivo CSS en tu proyecto
import { useNavigate } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";

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

const vocesClaves = [
  [
    "despidos",
    "despido",
    "accidente",
    "accidentes",
    "trabajo",
    "laboral",
    "laborales",
    "empleo",
    "empleos",
    "empleado",
    "empleada",
    "empleador",
    "empleadores",
    "empleadora",
    "jefe",
    "jefes",
    "jefa",
    "jefas",
    "supervisor",
    "supervisora",
    "supervisores",
    "juicio",
    "juicios",
    "público",
    "públicos",
    "publico",
    "publicos",
    "municipal",
    "municipales",
    "estatal",
    "estatales",
    "sueldo",
    "sueldos",
    "enfermedad",
    "enfermo",
    "enfermedades",
    "lesiones",
    "art",
    "medico",
    "médico",
    "médica",
    "médica",
    "derecho",
    "derechos",
  ],
  [
    "alimentos",
    "alimento",
    "alimentaria",
    "cuota",
    "divorcio",
    "divorcios",
    "comunicación",
    "comunicacion",
    "parentalidad",
    "paternidad",
    "maternidad",
    "papá",
    "padre",
    "papa",
    "mama",
    "madre",
    "mamá",
    "separación",
    "separacion",
    "acuerdo",
    "acuerdos",
    "convivencia",
    "hijo",
    "hijos",
    "hija",
    "hijas",
    "visitas",
    "visita",
    "alimentarias",
    "manutención",
    "manutencion",
    "division",
    "división",
    "bienes",
    "conflicto",
    "conflictos",
    "familia",
    "familiar",
  ],
  [
    "sucesiones",
    "suceciones",
    "susesiones",
    "suseción",
    "susesion",
    "suceción",
    "sucecion",
    "sucesión",
    "sucesion",
    "condominio",
    "alquiler",
    "alquileres",
    "locación",
    "locasión",
    "locacion",
    "locasion",
    "locaciones",
    "locasiones",
    "pagos",
    "pago",
    "fideicomisos",
    "fideicomiso",
    "daños",
    "daño",
    "perjuicios",
    "perjuicio",
    "juicios",
    "juicios",
    "asesoramiento",
    "asesoramientos",
    "patrimonio",
    "patrimonios",
    "contratos",
    "contrato",
  ],
  [
    "ejecutivo",
    "ejecutivos",
    "cheque",
    "cheques",
    "chequera",
    "chequeras",
    "pagaré",
    "pagarés",
    "pagare",
    "pagares",
    "start up",
    "start ups",
    "startups",
    "startup",
    "empresa",
    "empresas",
    "sociedad",
    "sociedades",
    "acciones",
    "acción",
    "contrato",
    "contratos",
    "bancos",
    "banco",
    "seguro",
    "seguros",
    "compañia",
    "compañias",
    "companias",
    "compania",
    "estatutos",
    "estatuto",
    "trámite",
    "trámites",
    "tramite",
    "tramites",
    "inscripción",
    "inscripcion",
    "inscripciones",
    "bancarias",
    "bancaria",
    "bancario",
    "bancarios",
    "entidades",
    "entidad",
    "designación",
    "designacion",
    "autoridad",
    "autoridades",
    "organismo",
    "organismos",
    "obligaciones",
    "responsabilidades",
    "obligacion",
    "obligación",
    "responsabilidad",
  ],
];

function obtenerIndiceCoincidencias(userMessage) {
  const palabrasUsuario = userMessage.toLowerCase().split(/[ ,.]+/);
  let maxCoincidencias = 0;
  let indiceMaxCoincidencias = -1;

  for (let i = 0; i < vocesClaves.length; i++) {
    const palabrasClave = vocesClaves[i];
    let coincidencias = 0;

    palabrasUsuario.forEach((palabraUsuario) => {
      if (palabrasClave.includes(palabraUsuario)) {
        coincidencias++;
      }
    });

    if (coincidencias > maxCoincidencias) {
      maxCoincidencias = coincidencias;
      indiceMaxCoincidencias = i;
    }
  }

  return indiceMaxCoincidencias;
}

function ChatBot2() {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(true);
  const [userMessage, setUserMessage] = useState();
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! ¿En qué área de derecho estás interesado?",
      options: [
        { text: "Derecho del Trabajo", action: () => selectOption(0) },
        { text: "Derecho de Familia", action: () => selectOption(1) },
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
    sendMessage(`Seleccionaste ${selectedArea.area}`, "bot");
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
      text: <p className="linkChat">Click Aqui</p>,
      action: () => navigate(`/derechos/${link}`),
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

  const handleResponse = () => {
    const index = obtenerIndiceCoincidencias(userMessage);
    if (index === -1) {
      return sendMessage(
        "Estoy acá para ayudarte. Escribime cual es tu consulta.",
        "bot"
      );
    }
    const selectedArea = derechoData[index];

    const respuestaBot1 = `Por lo que me contás, creo que necesitas asesoramiento en ${selectedArea.area}.`;
    const respuestaBot2 = `Nuestro especialista en ${selectedArea.area} es el/la ${selectedArea.abogado}. Puede ponerse en contacto llamando o mandando un mensaje de Whatsapp al ${selectedArea.numero}`;

    setTimeout(() => {
      sendMessage(`${respuestaBot1}`, "bot");
      sendMessage(`${respuestaBot2}`, "bot");
      // Luego añadir el botón "Ver Más"
      setTimeout(addVerMasButton(selectedArea.link), 100);
    }, 500);
  };
  return (
    <div className={`chat-bot ${chatOpen ? "open" : "closed"}`}>
      <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
        <h3>Bot Estudio Mateo</h3>
        <FaRobot size={33} />
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.from}`}>
            {msg.text}
            {msg.options &&
              msg.options.map((option, i) => (
                <button
                  key={i}
                  onClick={option.action}
                  className="option-button"
                >
                  {option.text}
                </button>
              ))}
          </div>
        ))}
      </div>
      {chatOpen && (
        <form className="message-form">
          <input
            type="text"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <IoSend
            size={25}
            className="message-form-send-button"
            onClick={() => {
              sendMessage(userMessage, "user");
              handleResponse();
              setUserMessage("");
            }}
          />
        </form>
      )}
    </div>
  );
}

export default ChatBot2;
