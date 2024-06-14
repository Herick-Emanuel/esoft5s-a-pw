import React from "react";
import styles from "../styles/cardSection.module.css";

const CardSection = ({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={styles.cardSection}>
      <h2 className={styles.title}>{titulo}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default CardSection;
