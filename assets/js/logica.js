fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    for (const item of data.results) {
      // console.log(item.name);
      pokemon(item);
    }
  });

const pokemon = (element) => {
  console.log(element.url);
  let urlElement = element.url;
  detailsPokemon(urlElement);
};

const detailsPokemon = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((detailsPokemon) => {
      console.log(detailsPokemon);
      let namePokemon = detailsPokemon.name;
      let heightPokemon = detailsPokemon.height;
      let weightPokemon = detailsPokemon.weight;
      let picturePokemon = detailsPokemon.sprites.front_default;
      console.log(namePokemon, heightPokemon, weightPokemon, picturePokemon);
      view(namePokemon, heightPokemon, weightPokemon, picturePokemon);
    });
};

const view = (name, height, weight, picture) => {
  console.log(name, height, weight, picture);
  let content = document.getElementById("content");
  content.innerHTML += `
            <div class="col-md-3 container">
                <div class="card cardImg" style="width: 18rem;">
                    <img src="${picture}" class="card-img-top" alt="pokemon">
                </div>

                <div class="card" style="width: 18rem;--bs-bg-opacity: .5;">
                    <div class="card-body">
                        <h5 class="card-title text-center text-capitalize">${name}</h5>
                    </div>
                </div>

                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item lista lista">Height: ${height}</li>
                        <li class="list-group-item lista lista">Weight: ${weight}</li>
                    </ul>
                </div>
                <div class="text-center lista py-2" style="width: 18rem;">
                    <a href="#" class="card-link lista"><span>Pokemon Official Web</span> https://digimon.net/</a>
                </div>
            </div>
        `;
};
