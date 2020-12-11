
// get the matches 
let matches = document.querySelectorAll(".matches");

let numOfClicks = 0;
let matchesNumber = 21;
let btnClicked = document.querySelector(".delete");
let listOfNames = [];

// get the player one i and the player two i
let x=0,y=1;
// check if the user is in the list
let flag1 = false;
let flag2 = false;
let theFirstplayer, theSecondplayer;


function GetUsersNames(){
  var name1 = window.prompt("Enter player 1 name: ");
  var name2 = window.prompt("Enter player 2 name: ");

  let playerone = document.getElementById("p1");
  let playertwo = document.getElementById("p2");
  playerone.innerHTML = (name1);
  playertwo.innerHTML = (name2);
 // set the values of the first object
  theFirstplayer = {
    name: name1,
    score: 0
  }
 // set the values of the second object

  theSecondplayer = {
    name: name2,
    score: 0
  }
// push the objects to the empty array
  if( listOfNames.length == 0 ){
    listOfNames.push(theFirstplayer);
    listOfNames.push(theSecondplayer);
  }
  else
  // check if the names is in the list
  {
    for (let i=0; i<listOfNames.length;i++){
      if(theFirstplayer.name == listOfNames[i].name)
      {
        theFirstplayer.score = listOfNames[i].score;
        // get the i of the first player
        x = i;
        flag1 = true;
      }        

      if(theSecondplayer.name == listOfNames[i].name)
      {
        theSecondplayer.score = listOfNames[i].score;
                // get the i of the second player

        y =i;
        flag2 = true;
      }
  }
// push the not exciting players in the list if the list in not empty
  if( flag1 == false )
  {
    listOfNames.push(theFirstplayer);
    x= listOfNames.length;
  }
  if( flag2 == false )
  {
    listOfNames.push(theSecondplayer);
    y= listOfNames.length+1;
  }

  
}
}


GetUsersNames();

btnClicked.addEventListener("click", function () {
  
  if( matchesNumber == 1 ){
    if (allPlayers[0].classList.contains("currentPlayer") == false){
      alert(allPlayers[0].innerHTML + " is the Winner");
      let TheWinner = allPlayers[0].innerHTML;
      // compare if the first player is the winner
      if(theFirstplayer.name == TheWinner){
        listOfNames[x].score += 2;
      }
    }
  
    else if(allPlayers[1].classList.contains("currentPlayer") == false){
      alert(allPlayers[1].innerHTML + " is the Winner");
      let TheWinner = allPlayers[1].innerHTML;
      if(theSecondplayer.name == TheWinner){
        listOfNames[y].score += 2;
      }
    }
      displayTop10();
    }
// check the number of clicks
  if (numOfClicks < 3) {
    removeMatch();
    numOfClicks++;
    console.log(numOfClicks);
  }

  else {
    btnClicked.disabled = true;

  }

});

  

function removeMatch() {

  matches[21-matchesNumber].style.visibility = "hidden";
  matchesNumber--;

}
// check who is the cuerrent player
let allPlayers = document.querySelectorAll(".player");
for (let i = 0; i < allPlayers.length; i++) {
  allPlayers[i].addEventListener("click", function () {
    if (this.classList.contains("currentPlayer")) {
      alert("This is your Turn");
    }
    else {

      if (numOfClicks == 0)
        alert("You should delete at least one match.");
      
      else {
        this.classList.add("currentPlayer");
        if (i == 0)
          allPlayers[1].classList.remove("currentPlayer");
        else
          allPlayers[0].classList.remove("currentPlayer");

        numOfClicks = 0;
      }

    }

  });
}

// restart

function playAgain(){
  
  let allMatches = document.querySelectorAll(".matches");
  for( let i=0; i<allMatches.length; i++){
    if( allMatches[i].style.visibility == "hidden" )
      allMatches[i].style.visibility = "visible";
  }
  matchesNumber = 21;
  numOfClicks = 0;
  allPlayers[0].classList.add("currentPlayer");
  allPlayers[1].classList.remove("currentPlayer");
  GetUsersNames();
  

}

let restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", playAgain );

function displayTop10(){
  let numberOfLoops = 10;
  sortTheArray();

  console.log(listOfNames);

  if( listOfNames.length < 10 ){
    numberOfLoops = listOfNames.length;
  }

  
  let html = "<tr> <td>The Name</td> <td>The score</td> </tr>";

  for(let i=0; i<numberOfLoops; i++){

    html += "<tr><td>"+ listOfNames[i].name +"</td> <td>"+ listOfNames[i].score +"</td></tr>";

  }

  document.getElementById("tBody").innerHTML = html;

}

function sortTheArray(){
  let temp ;
  for(let i=0; i<listOfNames.length-1; i++){

    for(let j=i+1; j<listOfNames.length; j++){

      if( listOfNames[i].score < listOfNames[j].score ){
        temp = listOfNames[i];
        listOfNames[i] = listOfNames[j];
        listOfNames[j] = temp;
      }

    }

  }

}