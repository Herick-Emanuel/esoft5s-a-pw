import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/header";
import CardSection from "./Components/cardSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header titulo="Squirtle" />
      <CardSection titulo="Informações sobre Squirtle">
        <p>
          <Image
            src="https://img.pokemondb.net/artwork/squirtle.jpg"
            alt="Squirtle"
            width={200}
            height={200}
          />{" "}
          Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
          Kanto e evolui para Wartortle.
        </p>
      </CardSection>
      <CardSection titulo="Características">
        <p>
          Squirtle é conhecido por sua concha nas costas, que oferece proteção
          adicional. Ele possui ataques de água poderosos, como Water Gun e
          Hydro Pump.
        </p>
      </CardSection>
      <CardSection titulo="Curiosidades">
        <ul>
          <li>🔍 Squirtle é um dos Pokémon mais populares e adoráveis.</li>
          <li>
            🔍 Seu nome deriva das palavras &quot;squirrel&quot; (esquilo) e &quot;turtle&quot;
            (tartaruga).
          </li>
          <li>
            🔍 Squirtle é frequentemente escolhido por treinadores para começar
            sua jornada Pokémon.
          </li>
        </ul>
      </CardSection>
      <CardSection titulo="Squirtle: O Amigo Aquático">
        <p>
          Squirtle, com sua aparência simpática e sua habilidade em controlar a
          água, conquistou o coração de treinadores Pokémon ao redor do mundo.
          Sendo o inicial de água na região de Kanto, Squirtle é uma escolha
          popular para aqueles que buscam equilíbrio e versatilidade em suas
          equipes.
        </p>
        <p>
          Sua concha nas costas não apenas oferece proteção, mas também é um
          símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
          para Blastoise, Squirtle se transforma em uma força formidável,
          dominando ataques aquáticos que podem surpreender adversários em
          batalhas.
        </p>
        <p>
          Além de suas habilidades de batalha, Squirtle é conhecido por seu
          carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle
          como uma amizade profunda, tornando-o não apenas um companheiro de
          lutas, mas um amigo leal ao longo de suas jornadas.
        </p>
      </CardSection>
      <CardSection titulo="Recursos Adicionais">
        <ul>
          <li>
            <a
              href="https://pokemondb.net/pokedex/squirtle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pokédex - Squirtle
            </a>
          </li>
          <li>
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pokémon)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bulbapedia - Squirtle
            </a>
          </li>
        </ul>
      </CardSection>
      <CardSection titulo="Evoluções">
        <div className={styles.evolutions}>
          <div>
            <Image
              src="https://img.pokemondb.net/artwork/squirtle.jpg"
              alt="Squirtle"
              width={200}
              height={200}
            />
            <p>1. Squirtle</p>
          </div>
          <div>
            <Image
              src="https://img.pokemondb.net/artwork/wartortle.jpg"
              alt="Wartortle"
              width={200}
              height={200}
            />
            <p>2. Wartortle</p>
          </div>
          <div>
            <Image
              src="https://img.pokemondb.net/artwork/blastoise.jpg"
              alt="Blastoise"
              width={200}
              height={200}
            />
            <p>3. Blastoise</p>
          </div>
        </div>
      </CardSection>
      <main className={styles.main}></main>
    </div>
  );
}
