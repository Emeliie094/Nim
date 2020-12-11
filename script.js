document.addEventListener("DOMContentLoaded", function () {
  class Game {
    constructor(player_in_turn, stack) {
      this.player_in_turn = player_in_turn;
      this.stack = stack;
      this.playersArray = [];
    }

    //Skapat klassen Game med följande key-value pairs i constuctorn.

    new_game() {
      let player1Name = prompt("Please enter your name player 1");
      let player2Name = prompt("Please enter your name player 2");
      //När vi kallar på metoden new_game(), dyker en prompt-ruta upp där vi ber spelarna att skriva in namn.

      document.getElementById("player1Name").innerHTML = player1Name;
      document.getElementById("player2Name").innerHTML = player2Name;
      //Sätter namnet på respektive spelare i en span i html-filen
      let player1 = new Player(player1Name);
      let player2 = new Player(player2Name);
      //Skapar nya objekt av klassen Player och tilldelar dem varsin variabel. Skickar med namnen i parametrarna.

      this.playersArray.push(player1);
      this.playersArray.push(player2);
      //Pushar in spelarna i arrayen players

      this.stack = "IIIIIIIIIIIIIIIIIIII";
      //Skapar vår stack, som består av 21 st 'i'
      document.getElementById("stack").innerHTML = this.stack;
      //En span i html-filen med id 'stack' tilldelas nu värdet av vår stack.
      this.slump_player();
      //tillkallar metoden slumpplayer()
    }
    slump_player() {
      let randomNr = Math.floor(Math.random() * 2) + 1;

      if (randomNr === 1) {
        //playerTurn = true;
        document.getElementById("btn_player2").disabled = true;
        let element = document.getElementById("h_player1");
        document.getElementById("noPl2").disabled = true;
        document.getElementById("noPl2").value = "";
        document.getElementById("h_player2").style.color = "black";

        element.style.color = "green";
      } else {
        // playerTurn = false;
        document.getElementById("btn_player1").disabled = true;
        let element = document.getElementById("h_player2");
        document.getElementById("noPl1").disabled = true;
        document.getElementById("noPl1").value = "";
        document.getElementById("h_player1").style.color = "black";

        element.style.color = "green";
        /*-------LA TILL SÅ ATT DEN SOM EJ SLUMPAS FRAM, BLIR DISABLED REDAN FRÅN BÖRJAN. TIDIGARE VAR BARA KNAPPEN DISABLED */

        //Slumpar fram vilken spelare som ska börja. Den som INTE börjas, ska få en disabled knapp och number-input-.
        //Den som börjar ska få rubriken i grönt.
      }
    }

    noOfSticks(e) {
      if (this.stack.length > 1) {
        this.stack = this.stack.slice(0, -e);
        console.log(this.stack);
        document.getElementById("stack").innerHTML = this.stack;
      } else {
        this.endGame();
      }

      //Metoden noOfSticks har en if-sats som säger att om vår stack har mer än 1 värde, så ska vi slice:a bort det antal (e) som vi har skrivit in i vår number-input. Är värdet mindre än 1, så avslutas spelet.
    }

    checkSum() {
      if (this.stack.length < 1) {
        this.endGame();
      }

      //Detta är en metod för att checka så att stacken är mindre än 1.
    }
    endGame() {
      // if (game_over === true) {
      if (document.getElementById("btn_player1").disabled === true) {
        let winner = this.playersArray[0];
        winner.addPoints();
        highScore.push(winner);
        confirm(`${winner.name} vann! Vill ni spela igen?`);
        console.log(winner);
      } else {
        let winner = this.playersArray[1];
        winner.addPoints();
        highScore.push(winner);
        confirm(`${winner.name} vann! Vill ni spela igen?`);
        //console.log(highScore);
        console.log(winner);
      }

      //Metoden endgame() kollar vilken spelare som var disabled när spelet slutade. Om spelare var disabled betyder det att hen vann.
      //Vi kallar på metoden addpoints(). Sedan pushar vi in vår winner i arrayen highScore.
    }
  }

  class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
    }

    addPoints() {
      this.score += 2;
      //Metoden addPoints() lägger till två poäng till vinnaren.
    }
  }

  let highScore = [];
  let newGame = new Game();
  let playerTurn = true;

  document.getElementById("startGame").addEventListener("click", function () {
    newGame.new_game();
    //När vi klickar på Start game så startas ett nytt spel.
  });

  let btplayer1 = document.getElementById("btn_player1");
  let btplayer2 = document.getElementById("btn_player2");
  let inputValue = document.getElementById("noPl1");
  let inputValue2 = document.getElementById("noPl2");

  btplayer1.addEventListener("click", function () {
    let value = inputValue.valueAsNumber;
    newGame.noOfSticks(value);
    newGame.checkSum();
    // playerTurn = false;
    document.getElementById("btn_player1").disabled = true;
    document.getElementById("noPl1").disabled = true;
    document.getElementById("noPl1").value = "";
    document.getElementById("h_player1").style.color = "black";

    document.getElementById("btn_player2").disabled = false;
    document.getElementById("noPl2").disabled = false;
    document.getElementById("h_player2").style.color = "green";

    //När spelare 1 klickar på knappen 1 att ta pinnar händer följande:
    //Value blir det value som spelaren skrivit in i number-fältet. Detta skickas in i metoden noOfSticks.
    //Spelare 2 blir disabled
  });

  btplayer2.addEventListener("click", function () {
    let value2 = inputValue2.valueAsNumber;
    newGame.noOfSticks(value2);
    newGame.checkSum();
    // playerTurn = false;
    document.getElementById("btn_player2").disabled = true;
    document.getElementById("noPl2").disabled = true;
    document.getElementById("noPl2").value = "";
    document.getElementById("h_player2").style.color = "black";

    document.getElementById("btn_player1").disabled = false;
    document.getElementById("noPl1").disabled = false;
    document.getElementById("h_player1").style.color = "green";
  });

  //När spelare 2 klickar på knappen 1 att ta pinnar händer följande:
  //Value blir det value som spelaren skrivit in i number-fältet. Detta skickas in i metoden noOfSticks.
  //Spelare 1 blir disabled
});
