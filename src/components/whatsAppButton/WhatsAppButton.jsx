import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = ({ numeroTelefono }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${numeroTelefono}`,
      "_blank"
    );
  };

  return (
    <div
      className={`whatsapp-button ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    >
      <FaWhatsapp className="whatsapp-icon" />
      <div className={`tooltip ${isHovered ? "show" : ""}`}>
        Envíanos un WhatsApp!
      </div>
    </div>
  );
};

export default WhatsAppButton;
