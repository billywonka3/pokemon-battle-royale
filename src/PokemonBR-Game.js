window.onload = function () {
  // Health & Scoreboard
  let playerHP = document.getElementById("playerHP")

  // Instructions Starter Screen

  // Starter Pokemon Choice
  let player = $("#player")

  $(clickable).click(function() {
    let choice = $("class= clickable").prop(src="img/");
    console.log(choice);
    $(player.children[0]).prop(`src="img/lillipup1.gif`);
    $("class= clickable").empty; // Remove all other sprites from the board
    console.log(choice);
  });
  // 

  // Player Controls & Movement
  let x = 1;
  let y = 1;

  document.onkeydown = function(e) {
    switch (e.key) {
      case "ArrowUp": if (y > 1) {y--; break;}
        if (y=1) {x--}; // Prevent grid-edge movement
      case "ArrowRight": if (x < 12) {x++; break;}
        if (x=12) {y--}; // Prevent grid-edge movement
      case "ArrowDown": if (y < 12) {y++; break;}
        if (y=12) {x++}; // Prevent grid-edge movement
      case "ArrowLeft": if (x > 1) {x--; break;}
    }
    $(`.r${y}c${x}`).append(player);
  }
}
  // $(`.r${y}c${x}`).find('img').remove() // locate player img within coordinates & remove it
  // $(`.r${y}c${x}`).append(`<img src="img/pichu1.gif"/>`) // move in defined direction and add img to current span

//------------------------------------------------------------------------------

class Game {
  constructor(){
    // this.health = document.getElementsById('playerHP').value;
    // this.score = document.getElementsById('score').value;
    
  }
  
  Collision() {
    playerHP.value -= 8(); // Use for collision base-damage

  }
}


