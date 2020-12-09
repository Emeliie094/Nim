document.addEventListener("DOMContentLoaded", function () {
  


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

  //Har ändrat här i noOfSticks!! När man tar den sista pinnen så poppar en confirm ruta upp och man får välja om man vill spela igen eller bara avbryta. Om man vill spela igen så startar ett nytt spel.

  noOfSticks(e) {
  /* NY RAD*/ if(this.stack > "I"){ 
  this.stack = this.stack.slice(0,this.stack.length- e);
  console.log(this.stack);
  document.getElementById("stack").innerHTML = this.stack;

  /* NY RAD*/ } else{let game_over = confirm("Du förlorade, vill ni spela igen?")
  /* NY RAD*/ if(game_over === true){
  /* NY RAD*/  newGame.new_game()
  /* NY RAD*/}
  }
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

  let newGame = new Game();
  
  document.getElementById("startGame").addEventListener("click", function() {
    newGame.new_game();
   
   
  })
  
let btplayer1 = document.getElementById("btn_player1");
let btplayer2 = document.getElementById("btn_player2");
let inputValue = document.getElementById("noPl1");
let inputValue2 = document.getElementById("noPl2");

btplayer1.addEventListener("click", function(){
  let value = inputValue.valueAsNumber;
  console.log(value);
  console.log(newGame);
 newGame.noOfSticks(value);
 document.getElementById("btn_player1").disabled = true;
 document.getElementById("btn_player2").disabled = false;
  })
  btplayer2.addEventListener("click", function(){
    let value2 = inputValue2.valueAsNumber;
    console.log(value2);
    console.log(newGame);
   newGame.noOfSticks(value2);
   document.getElementById("btn_player2").disabled = true;
   document.getElementById("btn_player1").disabled = false;
    })



// btplayer1.addEventListener("click",() => {newGame.noOfSticks(inputValue)});
// btplayer2.addEventListener("click",() => {newGame.noOfSticks()});

class Player {
  constructor(name) {
    this.name = name;
  }
}




})
