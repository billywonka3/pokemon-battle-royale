class Spawn {
  constructor(){
    // Random Number Generators
    let edgeArray = ['top', 'bottom', 'left', 'right']
    let randomFour = Math.floor(Math.random()*4);
    let randomTwelve = Math.floor(Math.random()*12);
    let randomEighteen = Math.floor(Math.random()*18);
    // let randomThirtytwo = Math.floor(Math.random()*32);
    // let randomSixtyseven = Math.floor(Math.random()*72);

    // Board-edge Coordinate Randomizer
    let randomEdge = edgeArray[randomFour];

    // gridEdgeSpawn()
    //   console.log(randomEdge)
    //   if edgeArray (randomEdge === top) {
    //     return 
    //   }

    // NPC Pokemon Array Random Generator
    let pokemonArray1 = [
      <div class="clickable"><img src="img/buneary1.gif"/><p>Normal</p></div>,
      <div class="clickable"><img src="img/lillipup1.gif"/><p>Normal</p></div>,
      <div class="clickable"><img src="img/tornadus1.gif"/><p>Flying</p></div>,
      <div class="clickable"><img src="img/machop1.gif"/><p>Fighting</p></div>,
      <div class="clickable"><img src="img/cleffa1.gif"/><p>Fairy</p></div>,
      <div class="clickable"><img src="img/abra1.gif"/><p>Psychic</p></div>,
      <div class="clickable"><img src="img/duskull1.gif"/><p>Ghost</p></div>,
      <div class="clickable"><img src="img/zorua1.gif"/><p>Dark</p></div>,
      <div class="clickable"><img src="img/koffing1.gif"/><p>Poison</p></div>,
      <div class="clickable"><img src="img/rockruff1.gif"/><p>Rock</p></div>,
      <div class="clickable"><img src="img/bonsly1.gif"/><p>Rock</p></div>,
      <div class="clickable"><img src="img/diglett1.gif"/><p>Ground</p></div>,
      <div class="clickable"><img src="img/klink1.gif"/><p>Steel</p></div>,
      <div class="clickable"><img src="img/pichu1.gif"/><p>Electric</p></div>,
      <div class="clickable"><img src="img/kricketot1.gif"/><p>Bug</p></div>,
      <div class="clickable"><img src="img/treecko1.gif"/><p>Grass</p></div>,
      <div class="clickable"><img src="img/cyndaquil1.gif"/><p>Fire</p></div>,
      <div class="clickable"><img src="img/squirtle1.gif"/><p>Water</p></div>,
      <div class="clickable"><img src="img/snorunt1.gif"/><p>Ice</p></div>,
      <div class="clickable"><img src="img/axew1.gif"/><p>Dragon</p></div>
    ]
    let pokemonArray2 = [
      <div class="clickable"><img src="img/buneary2.gif"/><p>Normal</p></div>,
      <div class="clickable"><img src="img/lillipup2.gif"/><p>Normal</p></div>,
      <div class="clickable"><img src="img/machop2.gif"/><p>Fighting</p></div>,
      <div class="clickable"><img src="img/cleffa2.gif"/><p>Fairy</p></div>,
      <div class="clickable"><img src="img/abra2.gif"/><p>Psychic</p></div>,
      <div class="clickable"><img src="img/duskull2.gif"/><p>Ghost</p></div>,
      <div class="clickable"><img src="img/klink2.gif"/><p>Steel</p></div>,
      <div class="clickable"><img src="img/pichu2.gif"/><p>Electric</p></div>,
      <div class="clickable"><img src="img/treecko2.gif"/><p>Grass</p></div>,
      <div class="clickable"><img src="img/cyndaquil2.gif"/><p>Fire</p></div>,
      <div class="clickable"><img src="img/squirtle2.gif"/><p>Water</p></div>,
      <div class="clickable"><img src="img/snorunt2.gif"/><p>Ice</p></div>,
      <div class="clickable"><img src="img/axew2.gif"/><p>Dragon</p></div>
    ]
    let pokemonArray3 = [
      <div class="clickable"><img src="img/buneary3.gif"/><p>Normal</p></div>,
      <div class="clickable"><img src="img/lillipup3.gif"/><p>Normal</p></div>,
      <div class="clickable"><img src="img/tornadus2.gif"/><p>Flying</p></div>,
      <div class="clickable"><img src="img/machop3.gif"/><p>Fighting</p></div>,
      <div class="clickable"><img src="img/cleffa3.gif"/><p>Fairy</p></div>,
      <div class="clickable"><img src="img/abra3.gif"/><p>Psychic</p></div>,
      <div class="clickable"><img src="img/duskull3.gif"/><p>Ghost</p></div>,
      <div class="clickable"><img src="img/zorua2.gif"/><p>Dark</p></div>,
      <div class="clickable"><img src="img/koffing2.gif"/><p>Poison</p></div>,
      <div class="clickable"><img src="img/rockruff2a.gif"/><p>Rock</p></div>,
      <div class="clickable"><img src="img/rockruff2b.gif"/><p>Rock</p></div>,
      <div class="clickable"><img src="img/bonsly2.gif"/><p>Rock</p></div>,
      <div class="clickable"><img src="img/diglett2.gif"/><p>Ground</p></div>,
      <div class="clickable"><img src="img/klink3.gif"/><p>Steel</p></div>,
      <div class="clickable"><img src="img/pichu3.gif"/><p>Electric</p></div>,
      <div class="clickable"><img src="img/kricketot2.gif"/><p>Bug</p></div>,
      <div class="clickable"><img src="img/treecko3.gif"/><p>Grass</p></div>,
      <div class="clickable"><img src="img/cyndaquil3.gif"/><p>Fire</p></div>,
      <div class="clickable"><img src="img/squirtle3.gif"/><p>Water</p></div>,
      <div class="clickable"><img src="img/snorunt3.gif"/><p>Ice</p></div>,
      <div class="clickable"><img src="img/axew3.gif"/><p>Dragon</p></div>
    ]

    let pokeCPU1 = pokemonArray1[randomEighteen];
    let npcSpawn = $(`.r${y}c${x}`).append(`${pokeCPU1}`);
  }
}


//-----------------------------------------------------

// NPC Movement Styles




//-----------------------------------------------------

// Pokemon Database
var pokemonSet1 = [ // Pure-type Pokemon
  {name: "Lillipup", type: "normal", img1: <img src="img/lillipup1.gif"/>}, 
  {name: "Tornadus", type: "fly", img1: <img src="img/tornadus1.gif"/>}, 
  {name: "Machop", type: "fight", img1: <img src="img/machop1.gif"/>}, 
  {name: "Cleffa", type: "fairy", img1: <img src="img/cleffa1.gif"/>}, 
  {name: "Abra", type: "psychic", img1: <img src="img/abra1.gif"/>}, 
  {name: "Duskull", type: "ghost", img1: <img src="img/duskull1.gif"/>}, 
  {name: "Zorua", type: "dark", img1: <img src="img/zorua1.gif"/>}, 
  {name: "Koffing", type: "poison", img1: <img src="img/koffing1.gif"/>}, 
  {name: "Rockruff", type: "rock", img1: <img src="img/rockruff1.gif"/>}, 
  {name: "Diglett", type: "ground", img1: <img src="img/diglett1.gif"/>}, 
  {name: "Klink", type: "steel", img1: <img src="img/klink1.gif"/>}, 
  {name: "Pichu", type: "electric", img1: <img src="img/pichu1.gif"/>}, 
  {name: "Kricketot", type: "bug", img1: <img src="img/kricketot1.gif"/>}, 
  {name: "Treecko", type: "grass", img1: <img src="img/treecko1.gif"/>}, 
  {name: "Cyndaquil", type: "fire", img1: <img src="img/cyndaquil1.gif"/>}, 
  {name: "Squirtle", type: "water", img1: <img src="img/squirtle1.gif"/>}, 
  {name: "Snorunt", type: "ice", img1: <img src="img/snorunt1.gif"/>}, 
  {name: "Axew", type: "dragon", img1: <img src="img/axew1.gif"/>}
]

var pokemonSet2 = [ // EVO3 Type-Changers
  {name: "Bunnelby", type: "normal", img1: <img src="img/1.gif"/>}, 
  {name: "Pancham", type: "fight", img1: <img src="img/1.gif"/>}, 
  {name: "Togepi", type: "fairy", img1: <img src="img/1.gif"/>}, 
  {name: "Nidoran", type: "poison", img1: <img src="img/1.gif"/>}, 
  {name: "Onix", type: "rock", img1: <img src="img/1.gif"/>}, 
  {name: "Cubone", type: "ground", img1: <img src="img/1.gif"/>}, 
  {name: "Alolan Pichu", type: "", img1: <img src="img/1.gif"/>}, 
  {name: "Caterpee", type: "bug", img1: <img src="img/1.gif"/>}, 
  {name: "Turtwig", type: "grass", img1: <img src="img/1.gif"/>}, 
  {name: "Charmander", type: "fire", img: <img src="img/1.gif"/>}, 
  {name: "Staryu", type: "water", img1: <img src="img/1.gif"/>}, 
  {name: "Alolan Vulpix", type: "ice", img1: <img src="img/1.gif"/>}, 
  {name: "Dratini", type: "dragon", img1: <img src="img/1.gif"/>}
]