document.addEventListener("DOMContentLoaded", function () {
  
  document.getElementById("startGame").addEventListener("click", function() {
  
   let newGame = new Game();
   newGame.new_game();
  })
  
class Game{
  constructor(players, player_in_turn, stack){
      this.players = []
      this.player_in_turn = player_in_turn
      this.stack = stack
  }
  new_game(){
  let player1 = prompt("Please enter your name player 1");
  let player2 = prompt("Please enter your name player 2");

  document.getElementById("player1Name").innerHTML = player1;
  document.getElementById("player2Name").innerHTML = player2;
 
   this.players = new Player(player1,player2);
   this.stack = "IIIIIIIIIIIIIIIIIIII";
   document.getElementById("stack").innerHTML = this.stack;
    this.slump_player();
  }
  slump_player(){
   let randomNr= Math.floor(Math.random() * 2)+1;
    if (randomNr === 1) {
      document.getElementById("btn_player2").disabled = true;
      let element = document.getElementById("h_player1");
      element.style.color = "green";
  }
  else{
    document.getElementById("btn_player1").disabled = true;
    let element = document.getElementById("h_player2");
      element.style.color = "green";
  }
  }

  noOfSticks(e) {
    this.stack = stack.slice(0,stack.length- e);
    console.log(this.stack)
  }
  }
  // document.getElementById("btn_player1").addEventListener("click", function() {
  //   let inputValue = document.getElementById("noPl1");
    
  //   this.noOfSticks(inputValue);
  //   console.log(inputValue);
  //   })
  // document.getElementById("btn_player2").addEventListener("click", function() {
  //     let inputValue = document.getElementById("noPl2").valueAsNumber;
      
  //     this.noOfSticks(inputValue);
  //     console.log(inputValue);
  
let btplayer1 = document.getElementById("btn_player1");
let btplayer2 = document.getElementById("btn_player2");
let inputValue = document.getElementById("noPl1");

btplayer1.addEventListener("click", function(){
  let value = inputValue.valueAsNumber;
 newGame.noOfSticks(value);
  },


// btplayer1.addEventListener("click",() => {newGame.noOfSticks(inputValue)});
// btplayer2.addEventListener("click",() => {newGame.noOfSticks()});

class Player {
  constructor(name) {
    this.name = name;
  }
})}
)



