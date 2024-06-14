import React from "react";
import styles from "../styles/header.module.css";
interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
  return (
    <header className={styles.header}>
      <h1>{titulo}</h1>
      <nav>
        <ul className={styles.navList}>
          <li>Informações sobre Squirtle</li>
          <li>Características</li>
          <li>Curiosidades</li>
          <li>Artigo sobre Squirtle</li>
          <li>Recursos Adicionais</li>
          <li>Evolução</li>
          <li>Todo List</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
