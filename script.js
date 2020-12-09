/* Nim är ett spel som finns i olika versioner med olika regler.
I vår version ska vi ha två spelare och en hög med 21 stickor.
Spelarna turas om att ta en, två eller tre stickor.
Spelaren som tar den sista stickan förlorar.

Utförande
Skapa en skiss över er sida.
Skapa en plan för strukturen för er kod.
Vilka klasser behöver ni? Egenskaper? Metoder?
Skapa en ”huvudklass” som håller reda på spelet, vems tur det är osv.
Skapa klasser för olika entiteter.
Jobba i grupperna, lämna in individuellt.

Utmaningar 
Tänk er att två spelare sitter bredvid varandra framför datorn. Ni behöver alltså inte göra någon datorspelare eller liknande.
Håll reda på spelarnas namn och vems tur det är.
Håll reda på högen med pinnar grafiskt på något sätt.
Visa vinnaren när spelet är slut.

Extrauppgift
Vid vinst i en match får spelaren två poäng.
Skapa en tabell som innehåller de tio bästa spelarna sett till hur många poäng de någonsin har tagit. */

//Array med 21 objekt? eller värde 21 som minskar?
//Varje spelare plockar 1-3 pinnar ur arrayen
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
  }
  slump_player(){}

  noOfSticks() {
    //Värde med 21 som minskar varje gång någon välje 1,2 eller 3.
  }
}

class Player {
  constructor(name) {
    this.name = name;
    
  }
}

})
'egnkej'

