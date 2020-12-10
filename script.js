document.addEventListener("DOMContentLoaded", function () {
  class Game {
    constructor(player_in_turn, stack) {
      this.player_in_turn = player_in_turn;
      this.stack = stack;
    }
    new_game() {
      let player1Name = prompt("Please enter your name player 1");
      let player2Name = prompt("Please enter your name player 2");
       
      console.log(this.player);
      document.getElementById("player1Name").innerHTML = player1Name;
      document.getElementById("player2Name").innerHTML = player2Name;
      let player1 = new Player(player1Name);
      let player2 = new Player(player2Name);
      this.stack = "IIIIIIIIIIIIIIIIIIII";
      document.getElementById("stack").innerHTML = this.stack;
      this.slump_player();
      console.log(player1,player2);
    }
    slump_player() {
      let randomNr = Math.floor(Math.random() * 2) + 1;
      if (randomNr === 1) {
        document.getElementById("btn_player2").disabled = true;
        let element = document.getElementById("h_player1");
        element.style.color = "green";
      } else {
        document.getElementById("btn_player1").disabled = true;
        let element = document.getElementById("h_player2");
        element.style.color = "green";
        //NOTE: //DISABLA SPELARE
      }
    }

    //Har ändrat här i noOfSticks!! När man tar den sista pinnen så poppar en confirm ruta upp och man får välja om man vill spela igen eller bara avbryta. Om man vill spela igen så startar ett nytt spel.

    noOfSticks(e) {
      /* NY RAD*/ if (this.stack.length > 1) {
        this.stack = this.stack.slice(0, -e);
        console.log(this.stack);
        document.getElementById("stack").innerHTML = this.stack;
      } else {
        this.endGame();
      }
    }

    checkSum() {
      if (this.stack.length < 1) {
        this.endGame();
      }
    }
    endGame(player1,player2){
      let game_over = confirm("Du förlorade, vill ni spela igen?");
      console.log(player1);
      console.log(player2);
        // if (game_over === true) {
        //   if (document.getElementById("btn_player1").disabled = true) {
            
                  
        //   }
          
        // }

    }

  }
  
  let highScore = [];
  let newGame = new Game();

  document.getElementById("startGame").addEventListener("click", function () {
    newGame.new_game();
  });

  let btplayer1 = document.getElementById("btn_player1");
  let btplayer2 = document.getElementById("btn_player2");
  let inputValue = document.getElementById("noPl1");
  let inputValue2 = document.getElementById("noPl2");

  btplayer1.addEventListener("click", function () {
    let value = inputValue.valueAsNumber;
    newGame.noOfSticks(value);
    newGame.checkSum();
    document.getElementById("btn_player1").disabled = true;
    document.getElementById("noPl1").disabled = true;
    document.getElementById("noPl1").value = "";
    document.getElementById("h_player1").style.color = "black";

    document.getElementById("btn_player2").disabled = false;
    document.getElementById("noPl2").disabled = false;
    document.getElementById("h_player2").style.color = "green";
  });

  btplayer2.addEventListener("click", function () {
    let value2 = inputValue2.valueAsNumber;
    newGame.noOfSticks(value2);
    newGame.checkSum();
    document.getElementById("btn_player2").disabled = true;
    document.getElementById("noPl2").disabled = true;
    document.getElementById("noPl2").value = "";
    document.getElementById("h_player2").style.color = "black";

    document.getElementById("btn_player1").disabled = false;
    document.getElementById("noPl1").disabled = false;
    document.getElementById("h_player1").style.color = "green";
  });

  class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
    
    }
    
    // addWinner(winner){
    // if (highScore.includes(winner.name) ){
    //   // add to score
    // }else{
    //   //add name to array of players and add too score
    // }
    // newGame.new_game();
    // }
  }
  
});
