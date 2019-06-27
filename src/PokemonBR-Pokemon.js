class Pokemon {
  constructor(name, attack, type, img1, row, column) {
    this.name = name; 
    this.health = 100; 
    this.attack = attack; 
    this.type = type; 
    this.img1 = img1; 
    this.row = row;
    this.column = column;
  }
}

// Pokemon Database
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

// var pokemonSet2 = [ // EVO3 Type-Changers
//   {name: "Bunnelby", type: "normal", img1: img/1.gif}, 
//   {name: "Pancham", type: "fight", img1: img/1.gif}, 
//   {name: "Togepi", type: "fairy", img1: img/1.gif}, 
//   {name: "Nidoran", type: "poison", img1: img/1.gif}, 
//   {name: "Onix", type: "rock", img1: img/1.gif}, 
//   {name: "Cubone", type: "ground", img1: img/1.gif}, 
//   {name: "Alolan Pichu", type: "", img1: img/1.gif}, 
//   {name: "Caterpee", type: "bug", img1: img/1.gif}, 
//   {name: "Turtwig", type: "grass", img1: img/1.gif}, 
//   {name: "Charmander", type: "fire", img: img/1.gif}, 
//   {name: "Staryu", type: "water", img1: img/1.gif}, 
//   {name: "Alolan Vulpix", type: "ice", img1: img/1.gif}, 
//   {name: "Dratini", type: "dragon", img1: img/1.gif}
// ];

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
  // function npcSpawn() {
    // Pokemon Div Database
      // `<div class="npc"><img id="${i}" src="${enemyArr[i].img1}"/><p>${${enemyArr[i].type}}</p></div>`
    let pokemonArray1 = [
      '<div class="npc"><img id="0" src="img/buneary1.gif"/><p>Normal</p></div>',
      '<div class="npc"><img id="1" src="img/tornadus1.gif"/><p>Flying</p></div>',
      '<div class="npc"><img id="2" src="img/machop1.gif"/><p>Fighting</p></div>',
      '<div class="npc"><img id="3" src="img/cleffa1.gif"/><p>Fairy</p></div>',
      '<div class="npc"><img id="4" src="img/abra1.gif"/><p>Psychic</p></div>',
      '<div class="npc"><img id="5" src="img/duskull1.gif"/><p>Ghost</p></div>',
      '<div class="npc"><img id="6" src="img/zorua1.gif"/><p>Dark</p></div>',
      '<div class="npc"><img id="7" src="img/grimer1.gif"/><p>Poison</p></div>',
      '<div class="npc"><img id="8" src="img/rockruff1.gif"/><p>Rock</p></div>',
      '<div class="npc"><img id="9" src="img/diglett1.gif"/><p>Ground</p></div>',
      '<div class="npc"><img id="10" src="img/klink1.gif"/><p>Steel</p></div>',
      '<div class="npc"><img id="11" src="img/pichu1.gif"/><p>Electric</p></div>',
      '<div class="npc"><img id="12" src="img/kricketot1.gif"/><p>Bug</p></div>',
      '<div class="npc"><img id="13" src="img/treecko1.gif"/><p>Grass</p></div>',
      '<div class="npc"><img id="14" src="img/cyndaquil1.gif"/><p>Fire</p></div>',
      '<div class="npc"><img id="15" src="img/squirtle1.gif"/><p>Water</p></div>',
      '<div class="npc"><img id="16" src="img/snorunt1.gif"/><p>Ice</p></div>',
      '<div class="npc"><img id="17" src="img/axew1.gif"/><p>Dragon</p></div>'];
  

    // let pokemonArray2 = [
    //   <div class="npc"><img src="img/buneary2.gif"/><p>Normal</p></div>,
    //   <div class="npc"><img src="img/lillipup2.gif"/><p>Normal</p></div>,
    //   <div class="npc"><img src="img/tornadus2.gif"/><p>Flying</p></div>,
    //   <div class="npc"><img src="img/machop2.gif"/><p>Fighting</p></div>,
    //   <div class="npc"><img src="img/hitmonlee.gif"/><p>Fighting</p></div>,
    //   <div class="npc"><img src="img/hitmonchan.gif"/><p>Fighting</p></div>,
    //   <div class="npc"><img src="img/cleffa2.gif"/><p>Fairy</p></div>,
    //   <div class="npc"><img src="img/abra2.gif"/><p>Psychic</p></div>,
    //   <div class="npc"><img src="img/duskull2.gif"/><p>Ghost</p></div>,
    //   <div class="npc"><img src="img/klink2.gif"/><p>Steel</p></div>,
    //   <div class="npc"><img src="img/pichu2.gif"/><p>Electric</p></div>,
    //   <div class="npc"><img src="img/treecko2.gif"/><p>Grass</p></div>,
    //   <div class="npc"><img src="img/cyndaquil2.gif"/><p>Fire</p></div>,
    //   <div class="npc"><img src="img/squirtle2.gif"/><p>Water</p></div>,
    //   <div class="npc"><img src="img/snorunt2.gif"/><p>Ice</p></div>,
    //   <div class="npc"><img src="img/axew2.gif"/><p>Dragon</p></div>];

    // let pokemonArray3 = [
    //   <div class="npc"><img src="img/buneary3.gif"/><p>Normal</p></div>,
    //   <div class="npc"><img src="img/lillipup3.gif"/><p>Normal</p></div>,
    //   <div class="npc"><img src="img/tornadus3.gif"/><p>Flying</p></div>,
    //   <div class="npc"><img src="img/machop3.gif"/><p>Fighting</p></div>,
    //   <div class="npc"><img src="img/cleffa3.gif"/><p>Fairy</p></div>,
    //   <div class="npc"><img src="img/abra3.gif"/><p>Psychic</p></div>,
    //   <div class="npc"><img src="img/abra4.gif"/><p>Psychic</p></div>,
    //   <div class="npc"><img src="img/duskull3.gif"/><p>Ghost</p></div>,
    //   <div class="npc"><img src="img/zorua2.gif"/><p>Dark</p></div>,
    //   <div class="npc"><img src="img/grimer2.gif"/><p>Poison</p></div>,
    //   <div class="npc"><img src="img/ekans2.gif"/><p>Poison</p></div>,
    //   <div class="npc"><img src="img/rockruff2a.gif"/><p>Rock</p></div>,
    //   <div class="npc"><img src="img/rockruff2b.gif"/><p>Rock</p></div>,
    //   <div class="npc"><img src="img/bonsly2.gif"/><p>Rock</p></div>,
    //   <div class="npc"><img src="img/diglett2.gif"/><p>Ground</p></div>,
    //   <div class="npc"><img src="img/klink3.gif"/><p>Steel</p></div>,
    //   <div class="npc"><img src="img/pichu3.gif"/><p>Electric</p></div>,
    //   <div class="npc"><img src="img/kricketot2.gif"/><p>Bug</p></div>,
    //   <div class="npc"><img src="img/treecko3.gif"/><p>Grass</p></div>,
    //   <div class="npc"><img src="img/cyndaquil3.gif"/><p>Fire</p></div>,
    //   <div class="npc"><img src="img/squirtle3.gif"/><p>Water</p></div>,
    //   <div class="npc"><img src="img/snorunt3.gif"/><p>Ice</p></div>,
    //   <div class="npc"><img src="img/axew3.gif"/><p>Dragon</p></div>];

    
//-----------------------------------------------------

// Pokemon Object Array Additions 
// {name: "Lillipup", type: "normal", img1: img/lillipup1.gif, img2: img/lillipup2.gif, img3: img/lillipup3.gif}, 
// '<div class="npc"><img id="1" src="img/lillipup1.gif"/><p>Normal</p></div>',
// {name: "Grimer", type: "poison", img1: img/grimer1.gif, img2: img/grimer2.gif}, 
// '<div class="npc"><img id="9" src="img/ekans1.gif"/><p>Poison</p></div>',
// {name: "Bonsly", type: "rock", img1: img/bonsly1.gif, img2: img/bonsly2.gif}, 
// '<div class="npc"><img id="11" src="img/bonsly1.gif"/><p>Rock</p></div>'