  //const btn = document.getElementById("getBtn");

  document.addEventListener("DOMContentLoaded", () =>{

    let generateBtn = document.querySelector('#getBtn');
    generateBtn.addEventListener('click', renderEverything)
})

  //btn.addEventListener("click", renderEverything);

  function renderEverything(){
    let allPokemonContainer = document.querySelector('#card1')
    allPokemonContainer.innerText = "";
    fetchData();
}

  function fetchData(){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=30&limit=30')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
  }

  function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        displayPikachu(pokeData)
    })
}

function displayPikachu(pokeData){
    let allPokemonContainer = document.getElementById('card1');

    let pokeCard = document.createElement("div")
    pokeCard.classList.add('col-sm-2', 'mb-4')

    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('card', 'text-center');

    let types = pokeData.types[0].type.name
    let color = '#546873'
    if(types == 'grass'){
        color = '#03fce8'
    } else if (types == 'fire') {
        color = '#fcdf03'
    } else if (types == 'water') {
        color = '#546873'
    }else if (types == 'bug') {
        color = '#cf6b93'
    }else if (types == 'normal') {
        color = '#cfa46b'
    }else if (types == 'poison') {
        color = '#d34444'
    }else if (types == 'electric') {
        color = '#81c76b'
    }else if (types == 'ground') {
        color = '#6b87c7'
    }
    pokeContainer.style.background = color;
    //pokeContainer.style.display = "inline-block";
    pokeContainer.style.color ="white";

    createPokeImage(pokeData.sprites.front_shiny, pokeContainer);

    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name

    let pokeTypes = document.createElement('p')
    pokeTypes.innerText = pokeData.types[0].type.name
   
    pokeContainer.append(pokeName, pokeTypes);   //appending all details to the pokeContainer div
    pokeCard.appendChild(pokeContainer)
    allPokemonContainer.appendChild(pokeCard);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.classList.add('card-img-top')
    pokeImage.srcset = pokeID

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

//   function displayPikachu(pokeData){
//     let allPokemonContainer = document.getElementById('card1');
    
//     pokeImage = document.createElement('img')
//     pokeImage.classList.add('card-img-top')
//     pokeImage.srcset = pokeData.sprites.front_shiny

//     let pokeContainer = document.createElement("div") 
//     pokeContainer.classList.add('card-body', 'text-center');

//     let pokeName = document.createElement('h4') 
//     pokeName.innerText = pokeData.name

//     let pokeTypes = document.createElement('p')
//     pokeTypes.innerText = pokeData.types[0].type.name

//     pokeContainer.append(pokeName, pokeTypes); 
//     allPokemonContainer.appendChild(pokeContainer);

//     // var pokeName = document.getElementById("name");
//     // var pokeType = document.getElementById("type");
//     // var div = document.getElementById("card");

//     // div.style.background = "#546873";
//     // div.style.display = "inline-block";
//     // div.style.color ="white";

//     // pokeName.innerHTML = pokeData.name;

//     //document.getElementById("image").src = pokeData.sprites.front_shiny;

//     //pokeType.innerHTML = `type : ${pokeData.types[0].type.name}`;
//   }

//   function createPokeImage(pokeData){
    
// }