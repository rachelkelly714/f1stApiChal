/*~~~~~~~~~~~*/

const pokeName = document.querySelector('.poke-text');
const pokeHeight = document.querySelector('.height');
const pokeWeight = document.querySelector('.weight');
const pokeType = document.querySelector('.type');
const pokeImg = document.querySelector('.poke-mon-img');
const pokeBar = document.querySelector('.search-bar');
const pokeBall = document.querySelector('.ball-container');
const rightBtn = document.querySelector('.right-button');
const leftBtn = document.querySelector('.left-button');


// console.log(pokeBall);

// console.log(pokeBar);
// console.log(leftBtn);
// console.log(rightBtn);

/* ~~~~~~~~~~ */
fetch('https://pokeapi.co/api/v2/pokemon/50') 
.then(res => res.json())
.then(data => {
    //console.log(data);
    

  pokeName.textContent = data['name'];
  pokeHeight.textContent = data['height'];
  pokeWeight.textContent = data['weight'];

  const dataTypes = data['types'];
  const dataType = dataTypes[0];
  pokeType.textContent = dataTypes[0]['type']['name'];
  pokeImg.src = data['sprites']['front_default'];
  
});

/* ~~~~~~~~~~ */




