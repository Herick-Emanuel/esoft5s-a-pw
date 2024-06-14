"use client";
import React from "react";
import styles from "./page.module.css";
import Header from "./Components/header";
import CardSection from "./Components/cardSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header titulo="Squirtle" />
      <CardSection titulo="Sobre Squirtle">
        <p>
          Squirtle é uma tartaruga de água que é um dos Pokémon iniciais do
          Pokémon Red/Blue.
        </p>
      </CardSection>
      <CardSection titulo="Habilidades">
        <ul>
          <li>Jato de Água</li>
          <li>Casco Grosso</li>
          <li>Retirada</li>
        </ul>
      </CardSection>
      <CardSection titulo="Evoluções">
        <p>Squirtle evolui para Wartortle e depois para Blastoise.</p>
      </CardSection>{" "}
      <main className={styles.main}></main>
    </div>
  );
}
