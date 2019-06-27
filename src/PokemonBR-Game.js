var pokemonSet1 = [ // Pure-type Pokemon
  {name: "Buneary", type: "normal", img1: "../img/buneary1.gif", img2: "../img/buneary2.gif", img3: "../img/buneary3.gif"}, 
  {name: "Tornadus", type: "fly", img1: "../img/tornadus1.gif", img2: "../img/tornadus2.gif", img3: "../img/tornadus3.gif"}, 
  {name: "Machop", type: "fight", img1: "../img/machop1.gif", img2: "../img/machop2.gif", img3: "../img/machop3.gif"}, 
  {name: "Cleffa", type: "fairy", img1: "../img/cleffa1.gif", img2: "../img/cleffa2.gif", img3: "../img/cleffa3.gif"}, 
  {name: "Abra", type: "psychic", img1: "../img/abra1.gif", img2: "../img/abra2.gif", img3: "../img/abra3.gif"}, 
  {name: "Duskull", type: "ghost", img1: "../img/duskull1.gif", img2: "../img/duskull2.gif", img3: "../img/duskull3.gif"}, 
  {name: "Zorua", type: "dark", img1: "../img/zorua1.gif", img2: "../img/zorua1.gif"}, 
  {name: "Ekans", type: "poison", img1: "../img/ekans1.gif", img2: "../img/ekans2.gif"}, 
  {name: "Rockruff", type: "rock", img1: "../img/rockruff1.gif", img2: "../img/rockruff2.gif"}, 
  {name: "Diglett", type: "ground", img1: "../img/diglett1.gif", img2: "../img/diglett2.gif"}, 
  {name: "Klink", type: "steel", img1: "../img/klink1.gif", img2: "../img/klink2.gif", img3: "../img/klink3.gif"}, 
  {name: "Pichu", type: "electric", img1: "../img/pichu1.gif", img2: "../img/pichu2.gif", img3: "../img/pichu3.gif"}, 
  {name: "Kricketot", type: "bug", img1: "../img/kricketot1.gif"}, 
  {name: "Treecko", type: "grass", img1: "../img/treecko1.gif"}, 
  {name: "Cyndaquil", type: "fire", img1: "../img/cyndaquil1.gif"}, 
  {name: "Squirtle", type: "water", img1: "../img/squirtle1.gif"}, 
  {name: "Snorunt", type: "ice", img1: "../img/snorunt1.gif"}, 
  {name: "Axew", type: "dragon", img1: "../img/axew1.gif"}
];

let startGame;
class Game {
  constructor(){
    this.enemyArr = [];
    this.player;
  }

  genPokemon() {
    let randomPokemon = pokemonSet1[Math.floor(Math.random() * pokemonSet1.length)]
    this.enemyArr.push(new Pokemon (randPokemon.name, randPokemon.attack, randPokemon.type, randPokemon.img1, Math.floor(Math.random()*12+1), Math.floor(Math.random()*12+1)))
  }
  
  createPlayer(imgId) {    
    // console.log("...................  ", this.enemyArr)
    let playerPokemon = pokemonSet1[Number(imgId)];

    this.player = new Pokemon(playerPokemon.name, 50, playerPokemon.type, playerPokemon.img1, 1, 1)
    // console.log(playerPokemon);
  }

  createPokemon() {
    // console.log(">>>>>>>>>>> ", startGame.enemyArr);
    let randomPokemon = pokemonSet1[Math.floor(Math.random() * pokemonSet1.length)];
    // console.log('p ========================== ', randomPokemon);
    if (Math.floor(Math.random() * 100) % 2 === 0) {
      startGame.enemyArr.push(new Pokemon(randomPokemon.name, 10, randomPokemon.type, randomPokemon.img1, Math.floor((Math.random() * 12 )+ 11), Math.floor((Math.random() * 12) + 11)))
      for (let i=0; i < startGame.enemyArr.length; i++) {
        // console.log(startGame.enemyArr);
        // console.log(startGame.enemyArr[0].row);
        // console.log(startGame.enemyArr.Pokemon.column);
        let spawnLocation = `.r${startGame.enemyArr[i].row}c${startGame.enemyArr[i].column}`
        let spawnImg = startGame.enemyArr[i].img;
        let spawnType = startGame.enemyArr[i].type;
        let spawnName = startGame.enemyArr[i].name;
        // console.log(startGame.enemyArr[i].row, startGame.enemyArr[i].column);
        console.log(spawnLocation)
        console.log(spawnName)
        // console.log(spawnId)
        console.log(spawnImg)
        console.log(spawnType)
        console.log('----------')

        // $(''+spawnLocation).html('dtrtfcvgybh')
        $(''+spawnLocation).append(`<div class="npc"> <img id="${i}" src="img/${spawnName.toLowerCase()}1.gif"/> <p>${spawnType}</p> </div>`);
        // console.log(appender);
        // debugger
      }
    }
  }

  randomMovement() {
    for(let i = 0; i < this.pokeArray.length; i++) {
      // let num1 = this.enemyArr[i].row;
      // let num2 = this.enemyArr[i].column;
  
      if (Math.floor( (Math.random()*200) %5 === 0 ) ){
        this.enemyArr[i].row += Math.floor(Math.random()*1);
      } else if ( (Math.floor(Math.random()*200) %5 === 1 ) ){
        this.enemyArr[i].row -= Math.floor(Math.random()*1);
      } else if ( (Math.floor(Math.random()*200) %5 === 2 )) {
        this.enemyArr[i].column += Math.floor(Math.random()*1);
      } else if ( (Math.floor(Math.random()*200) %5 ===3 )) {
        this.enemyArr[i].column -= Math.floor(Math.random()*1);
      }
    }
  }
}

//-------------------------------------------------------------------------------
window.onload = function () {
  startGame = new Game;
  // Health & Scoreboard
  let playerHP = document.getElementById("playerHP")

  // Instructions Starter Screen

  // Player Controls & Movement
  let a = 11;
  let b = 11;

  document.onkeydown = function(e) {
    switch (e.key) {
      case "ArrowUp": if (a > 11) {a--;} break;
      case "ArrowRight": if (b < 22) {b++;} break;
      case "ArrowDown": if (a < 22) {a++;} break;
      case "ArrowLeft": if (b > 11) {b--;} break;
  }
  // console.log(`.r${a}c${b}`)
  $(`.r${a}c${b}`).append(player);
};

// ---------------------------------------------------------

// Starter Pokemon Choice
let player = $("#player")
$(".clickable").click(function() {
  // this.style.backgroundColor = 'red';
  let imgId = $(this).children().prop('id');
  startGame.createPlayer(imgId)
  $('#player').empty();
  $('#player').append($(this).children());
  $(".clickable").empty(); // Remove all other sprites

  setInterval(startGame.createPokemon, 2000)
});

// Collision Function
const dmgArray = [
  normal =   [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  fighting = [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5], 
  flying =   [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1], 
  poison =   [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2], 
  ground =   [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1], 
  rock =     [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1], 
  bug =      [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5], 
  ghost =    [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1], 
  steel =    [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2], 
  fire =     [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1], 
  water =    [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1], 
  grass =    [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1], 
  electric = [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1], 
  psychic =  [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1], 
  ice =      [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1], 
  dragon =   [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
  dark =     [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5], 
  fairy =    [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1]
];

// collision(player) {
  
//   playerHP.value -= 8(); // Use for collision base-damage

};


//------------------------------------------------------------------------------

// $(`.r${y}c${x}`).find('img').remove() // locate player img within coordinates & remove it
// $(`.r${y}c${x}`).append(`<img src="img/${pokeCPU}1.gif"/>`) // move in defined direction and add img to current span

// ------------------------------------------------------------------------
