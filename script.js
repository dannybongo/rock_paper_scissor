
const scoreComputer = document.getElementsByClassName("computer-score")
const scorePlayer = document.getElementsByClassName("player-score")
const playerChoiceDisplay = document.getElementById("player-choice-h2")
const computerChoiceDisplay = document.getElementById("computer-choice-h2")
let playerSelection

// game();

//Stores all possible buttons values in a list
let possibleChoices = document.querySelectorAll("button");

//For each possible choice in our list of possible choices, add an event listener. When clicked, function (e) will run, assigning the data behind our button to our variable  named playerSelection
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerSelection = e.target.innerHTML
    playerChoiceDisplay.innerHTML = playerSelection
    playRound();
}))

function computerChoice(){
    let options = ["✊", "📰", "✂️"]
    let option = options[Math.floor(Math.random() * options.length)];

    // if (option = "R"){
    //     option = "✊"
    // } else if (option = "P"){
    //     options ="📰"
    // } else {
    //     options="✂️"
    // }

    computerChoiceDisplay.innerHTML = option
    return option;
}


//compare user input and computer's choice
function playRound(){

    let computerSelection = computerChoice();

    console.log("Player has selected " + playerSelection)
    console.log("Computer has selected " + computerSelection)

    if (playerSelection === computerSelection) {
        console.log("Draw!");

    } else if (playerSelection === "R" && computerSelection === "S" || 
        playerSelection === "P" && computerSelection === "R" || 
        playerSelection === "S" && computerSelection === "P") {
        console.log("Player wins");

    } else {
        console.log("Computer Wins");
    }

    // console.log("Scores: Player-" + scorePlayer + " Computer-" + scoreComputer)
}
     




function game(){
    for (let i = 0; i < 5; i++){
        playRound()}
        
}


// General comments 

// Had an absolute nightmare trying to get the return values from playerChoice and computerChoice to work in the function playRound. The outputs were fine within the functions, but I was trying to call up variables inside playRound containing the player and computer choices. If I console logged those variables inside playRound, I got 'undefined'.

// What I needed to do was assign the function's I needed variables inside the playRound function. When playRound runs, the other functions are run and their outputs are assigned to their respective variables.

//learn about arrow functions.

//the script is better at the bottom of the HTML because if ran before a certain element exists, the script will throw up errors.

//          <button class="player-options rock" data-button="rock">✊</button> added this to the HTML, gave me a way to use use an assigned value to the button

//if having an issue with not being able to select a certain element, try a different '.getelement' method

//Originally, we had 3 query selectors and 3 event listeners. I was having trouble working out how return the desired value depending on what button the user clicks. In the end, I decided to go for one event listener and one query selector to encapsulate all the buttons. From there, it was easy to assign the users input to a variable