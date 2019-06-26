window.onload = function () {
  // Health & Scoreboard
  let playerHP = document.getElementById("playerHP")

  // Instructions Starter Screen


  // Starter Pokemon Choice
  let player = $("#player")

  $(".clickable").click(function() {
    // this.style.backgroundColor = 'red';
    let imgSource = $(this).children().prop('src');
    // console.log(imgSource);
    $('#player').children().prop('src', imgSource)
    $(".clickable").empty(); // Remove all other sprites
    setInterval(npcSpawn, 3000)
  });

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
  }

  // Collision Function
  // collision(player) {
    
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
  


