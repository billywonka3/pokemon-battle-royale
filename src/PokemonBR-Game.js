
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
      let spawnLocation = `.r${startGame.enemyArr[startGame.enemyArr.length-1].row}c${startGame.enemyArr[startGame.enemyArr.length-1].column}`
      // let spawnImg = startGame.enemyArr[startGame.enemyArr.length-1].img;
      let spawnType = startGame.enemyArr[startGame.enemyArr.length-1].type;
      let spawnName = startGame.enemyArr[startGame.enemyArr.length-1].name;
      // console.log(startGame.enemyArr[i].row, startGame.enemyArr[i].column);
      console.log(spawnLocation)
      // console.log(spawnName)
      // console.log(spawnId)
      // console.log(spawnImg)
      console.log(spawnType)
      // console.log('----------')
      $(''+spawnLocation).append(`<div class="npc"> <img id="${startGame.enemyArr.length-1}" src="img/${spawnName.toLowerCase()}1.gif"/> <p>${spawnType}</p> </div>`);
    }
  }

  randomMovement() {
    for(let i = 0; i < startGame.enemyArr.length; i++) {
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

var down = false;
document.addEventListener('keydown', function () {
    if(down) return;
    down = true;

    // your magic code here
}, false);

document.addEventListener('keyup', function () {
    down = false;
}, false);

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

// ------------------------------------------------------------------------
  // Random Number Generators
    // let randomFour = Math.floor(Math.random()*4);
    // let randomTwelve = Math.floor(Math.random()*12+1);
    // let randomTwentyone = Math.floor(Math.random()*21);
    // let randomFortyfour = Math.floor(Math.random()*44);
    // let randomSixtyseven = Math.floor(Math.random()*72);

  // Random Spawning along grid edges
    // let randomEdge = coordinateArray[randomFortyfour];
    // console.log(randomEdge);
    // let pokeCPU1 = pokemonArray1[randomTwentyone];
    // console.log(pokeCPU1);
    // let spawnRate = $(`.${randomEdge}`).append(`${pokeCPU1}`);

    // if (randomEdge == "r11c12" || "r11c13" || "r11c14" || "r11c15" || "r11c16" || "r11c17" || "r11c18" || "r11c19" || "r11c20" || "r11c21") {
    //   moveDown(pokeCPU1, randomEdge); // moving down from row 11
    // } else if (randomEdge == "r12c22" || "r13c22" || "r14c22" || "r15c22" || "r16c22" || "r17c22" || "r18c22" || "r19c22"|| "r20c22" || "r21c22") {
    //   moveLeft (pokeCPU1, randomEdge); // moving left from column 22
    // } else if (randomEdge == "r22c12" || "r22c13" || "r22c14" || "r22c15" || "r22c16" || "r22c17" || "r22c18" || "r22c19" || "r22c20" || "r22c21") {
    //   moveUp (pokeCPU1, randomEdge); // moving up from row 22
    // } else if (randomEdge == "r02c11" || "r13c11" || "r14c11" || "r15c11" || "r16c11" || "r17c11" || "r18c11" || "r19c11" || "r20c11" || "r21c11") {
    //   moveRight (pokeCPU1, randomEdge); // moving right from column 11

    // } else if (randomEdge == "r11c11" || "r11c12") {
    //   moveDiaDR(pokeCPU1, randomEdge);  // moving diagonal from top-left corners
    // }
    // } else if (randomEdge == "r11c22" || "r11c21") {
    //   moveDiaDL(pokeCPU1, randomEdge);  // moving diagonal from top-right corners
    // }
    // } else if (randomEdge == "r22c22" || "r22c21") {
    //   moveDiaUL(pokeCPU1, randomEdge);  // moving diagonal from bottom-left corners
    // }
    // } else if (randomEdge == "r22c11" || "r21c12") {
    //   moveDiaUR(pokeCPU1, randomEdge);  // moving diagonal from bottom-right corners
    // }

    // } else if (randomEdge == "r12c11") {
    //   moveCornerKnightDR (pokeCPU1, randomEdge);  // moving in knight pattern (2R-1D) from top-left corners
    // }
    // } else if (randomEdge == "r12c22") {
    //   moveCornerKnightDL(pokeCPU1, randomEdge);  // moving in knight pattern (1L-2D) from top-right corners
    // }
    // } else if (randomEdge == "r21c11") {
    //   moveCornerKnightUL(pokeCPU1, randomEdge);  // moving in knight pattern (1R-2U) from bottom-left corners
    // }
    // } else if (randomEdge == "r21c22") {
    //   moveCornerKnightUR(pokeCPU1, randomEdge);  // moving in knight pattern (2L-1U) from bottom-right corners
    // }
    
    // return spawnRate;
  // };


  //-----------------------------------------------------
  
  // NPC Movement Styles
  // function randomMove (who, where) {
  
  // }
  
  // function moveDown (who, where) {
  //   let x = Number(where.substring(1, 3));
  //   let y = Number(where.substring(4, 6));
  //   console.log('down', x, y)
  
  //   $(`.r${x}c${y}`).empty()
  
  //   x++;
  //   console.log('down', x, y)
  
  //   $(`.r${x}c${y}`).append(who)
  
  //   setTimeout(()=> {
  
  //     let newPlace = `r${x}c${y}`
  
  //     moveDown(who, newPlace)
  
  //   }, 1000)
  // };
  
  // function moveLeft () {
  //   let x = Number(where.substring(1, 3));
  //   let y = Number(where.substring(4, 6));
  //   console.log('left', x, y)
  
  //   $(`.r${x}c${y}`).empty()
  
  //   y--;
  //   console.log('left', x, y)
  
  //   $(`.r${x}c${y}`).append(who)
  
  //   setTimeout(()=> {
  
  //     let newPlace = `r${x}c${y}`
  
  //     moveLeft(who, newPlace)
  
  //   }, 1000)
  // };
  
  // function moveUp (who) {
  //   let x = Number(where.substring(1, 3));
  //   let y = Number(where.substring(4, 6));
  //   console.log('up', x, y)
  
  //   $(`.r${x}c${y}`).empty()
  
  //   x--;
  //   console.log('up', x, y)
    
  //   $(`.r${x}c${y}`).append(who)
  
  //   setTimeout(()=> {
  
  //     let newPlace = `r${x}c${y}`
  
  //     moveUp(who, newPlace)
  
  //   }, 1000)
  // };
  
  // function moveRight () {
  //   let x = Number(where.substring(1, 3));
  //   let y = Number(where.substring(4, 6));
  //   console.log('right', x, y)
  
  //   $(`.r${x}c${y}`).empty()
    
  //   y++;
  //   console.log('right', x, y)
  
  //   $(`.r${x}c${y}`).append(who)
  
  //   setTimeout(()=> {
  
  //     let newPlace = `r${x}c${y}`
  
  //     moveRight(who, newPlace)
  
  //   }, 1000)
  // };
  
  // 