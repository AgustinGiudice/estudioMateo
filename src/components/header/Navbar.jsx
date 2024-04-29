import React, { useState } from "react";
import styles from "./navbar.module.css";
import imgLogo from "../../assets/logo.png";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={styles.headerContainer}>
        <img
          src={imgLogo}
          alt="Logo Estudio Juridico Mateo"
          className={styles.imgHeader}
        />
        <div className={styles.navContainer}>
          <nav className={styles.enlaces}>
            <a href="#areas">Áreas De Práctica</a>
            <a href="#contacto">Contacto</a>
            <a href="#nosotros">Nosotros</a>
          </nav>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <div
              className={`${styles.bar} ${showMenu ? styles.bar1Cross : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${showMenu ? styles.bar2Cross : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${showMenu ? styles.bar3Cross : ""}`}
            ></div>
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className={styles.mobileMenu}>
          <a href="#areas" onClick={toggleMenu}>
            Áreas De Práctica
          </a>
          <a href="#contacto" onClick={toggleMenu}>
            Contacto
          </a>
          <a href="#nosotros" onClick={toggleMenu}>
            Nosotros
          </a>
        </div>
      )}
    </>
  );
}
