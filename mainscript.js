/*~~~~~~~~~~~*/
const baseURL = 'https://pokeapi.co/api/v2/pokemon/'



const pokeName = document.querySelector('.poke-text');
const pokeHeight = document.querySelector('.height');
const pokeWeight = document.querySelector('.weight');
const pokeType = document.querySelector('.type');
const pokeImg = document.querySelector('.poke-mon-img');
const pokeBar = document.querySelector('.search-bar');
const pokeForm = document.querySelector('form');
const pokeInput = document.getElementById('name-input');
const pokeBall = document.querySelector('.ball-container');
const rightBtn = document.querySelector('.right-button');
const leftBtn = document.querySelector('.left-button');


// console.log(pokeBall);

// console.log(pokeBar);
// console.log(leftBtn);
// console.log(rightBtn);

/* ~~~~~~~~~~ */
pokeForm.addEventListener('submit', testFn)

let id = 0;
let searchName;
let pokeId;  

function testFn(e) {
    e.preventDefault();

    id = pokeInput.value;
    // console.log(typeof id);

    fetch(baseURL + id) 
    .then(res => res.json())
    .then(data => {
        console.log(data);
        

      searchName = data.name;
      pokeId = data.id;  
      pokeName.textContent = data['name'];
      pokeHeight.textContent = data['height'];
      pokeWeight.textContent = data['weight'];
    
      const dataTypes = data['types'];
      const dataType = dataTypes[0];
      pokeType.textContent = dataTypes[0]['type']['name'];
      pokeImg.src = data['sprites']['front_default'];
      
      console.log('Name: ', pokeName)  
      console.log('ID: ', pokeId)  

    });

    // console.log('CURRENT POSITION: ', position)
}

function rightFunction() {
    console.log('Right Button Clicked');
    console.log('Button: ', id);
    id++
    
    fetch(baseURL + id)
    .then(res => res.json())
    .then(data => console.log(data));

    console.log(id)

}

function leftFunction() {
    console.log('Left Button Clicked');
}

/*
 - Pershaps on load, pull random position number (optional)
 - global variables
    - ID
    - Name
 - fetch - 
    - baseURL + "current" ID/Name
    - respond - json-ify response
    - pass info into another function displayPoke(json);
- Display
    - take data and sort
    - DOM display/manipulateion
    -setting global variables
        - ID = data.id
        - Name = data.name
- Right Button or Left Button

*/




