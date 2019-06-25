window.onload = function () {
  // Health & Scoreboard
  let playerHP = document.getElementById("playerHP")

  // Instructions Starter Screen


  // Starter Pokemon Choice
  let player = $("#player")

  $(".clickable").click(function() {
    // this.style.backgroundColor = 'red';
    let theSource = $(this).children().prop('src');
    // console.log(theSource);
    $('#player').children().prop('src', theSource)
    $(".clickable").empty(); // Remove all other sprites from the board
  });

  // Player Controls & Movement
  let x = 1;
  let y = 1;

  document.onkeydown = function(e) {
    switch (e.key) {
      case "ArrowUp": if (y > 1) {y--;} break;
      case "ArrowRight": if (x < 12) {x++;} break;
      case "ArrowDown": if (y < 12) {y++;} break;
      case "ArrowLeft": if (x > 1) {x--;} break;
    }
    console.log(`.r${y}c${x}`)
    $(`.r${y}c${x}`).append(player);
  }

  // Collision Function
  // Collision() {
  //   playerHP.value -= 8(); // Use for collision base-damage

  // };

}

//------------------------------------------------------------------------------

// $(`.r${y}c${x}`).find('img').remove() // locate player img within coordinates & remove it
// $(`.r${y}c${x}`).append(`<img src="img/${pokeCPU}1.gif"/>`) // move in defined direction and add img to current span


// class Game {
//   constructor(){
    // this.health = document.getElementsById('playerHP').value;
    // this.score = document.getElementsById('score').value;
    
  // }
  


