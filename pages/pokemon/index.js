function changePageTitle(title) {
<<<<<<< HEAD
  document.title = title;
}

function generateInfoSection(sprites, pokemonName) {
  const imagens = Object.values(sprites).filter(
    (sprite) => typeof sprite === "string"
  );

  const h2 = document.createElement("h2");
  h2.id = "info-pokemon-label";
  h2.textContent = `Informações sobre ${pokemonName}`;

  const img = document.querySelector("img");
  img.src = imagens[0];
  img.alt = `Imagem do pokemon ${pokemonName}`;

  const section = document.querySelector("#info-pokemon");

  section.appendChild(h2);
  section.appendChild(img);

  let indiceAtual = 0;

  img.addEventListener("click", () => {
=======
  document.title = title
}

function generateInfoSection(sprites, pokemonName) {
  const imagens = Object.values(sprites)
    .filter(sprite => typeof sprite === 'string')

  const h2 = document.createElement('h2')
  h2.id = "info-pokemon-label"
  h2.textContent = `Informações sobre ${pokemonName}`

  const img = document.querySelector('img')
  img.src = imagens[0]
  img.alt = `Imagem do pokemon ${pokemonName}`

  const section = document.querySelector('#info-pokemon')

  section.appendChild(h2)
  section.appendChild(img)

  let indiceAtual = 0;

  img.addEventListener('click', () => {
>>>>>>> 0cfd18a5547083cd935b1c51c65de2ca008a818b
    indiceAtual = (indiceAtual + 1) % imagens.length;
    img.src = imagens[indiceAtual];
  });
}

<<<<<<< HEAD
=======

>>>>>>> 0cfd18a5547083cd935b1c51c65de2ca008a818b
async function getPokemonData(name) {
  // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //   .then((fetchData) => {
  //     return fetchData.json()
  //   })
  //   .then((jsonData) => generateInfoSection(jsonData.sprites.front_default, name))
  //   .catch((error) => console.error(error))

  try {
<<<<<<< HEAD
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const jsonData = await data.json();

    generateInfoSection(jsonData.sprites, name);
  } catch (error) {
    console.error(error);
=======
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    const jsonData = await data.json()

    generateInfoSection(jsonData.sprites, name)
  } catch (error) {
    console.error(error)
>>>>>>> 0cfd18a5547083cd935b1c51c65de2ca008a818b
  }
}

function getSearchParams() {
  // Early return -> Caso location search, não faz nada.
  if (!location.search) {
<<<<<<< HEAD
    return;
  }

  // URLSearchParams é uma classe que facilita a manipulação de query strings
  const urlSearchParams = new URLSearchParams(location.search);

  // Pegando o valor do parâmetro name
  const pokemonName = urlSearchParams.get("name");

  changePageTitle(`Pagina do ${pokemonName}`);
  getPokemonData(pokemonName);
}

document.addEventListener("DOMContentLoaded", function () {
  getSearchParams();
});
=======
    return
  }

  // URLSearchParams é uma classe que facilita a manipulação de query strings
  const urlSearchParams = new URLSearchParams(location.search)

  // Pegando o valor do parâmetro name
  const pokemonName = urlSearchParams.get('name')

  changePageTitle(`Pagina do ${pokemonName}`)
  getPokemonData(pokemonName)
}

document.addEventListener('DOMContentLoaded', function () {
  getSearchParams()
})
>>>>>>> 0cfd18a5547083cd935b1c51c65de2ca008a818b
