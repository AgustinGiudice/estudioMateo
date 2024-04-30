import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./whatsAppButton.module.css";

const WhatsAppButton = ({ numeroTelefono }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    const telefonoLimpio = numeroTelefono.replace(/\D/g, "");
    window.open(
      `https://api.whatsapp.com/send?phone=${telefonoLimpio}`,
      "_blank"
    );
  };

  return (
    <div
      className={`${styles.whatsappButton} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    >
      <FaWhatsapp className={styles.whatsappIcon} />
      <div className={`${styles.tooltip} ${isHovered ? styles.show : ""}`}>
        Envíanos un WhatsApp!
      </div>
    </div>
  );
};

export default WhatsAppButton;
