
//Assign our HTML elements variables, so we can interact with them.
const computerScoreDisplay = document.getElementById("computerScoreNumber")
const playerScoreDisplay = document.getElementById("playerScoreNumber")
const computerChoiceDisplay = document.getElementById("computerChoiceH2")
const playerChoiceDisplay = document.getElementById("playerChoiceH2")
const roundDisplay = document.getElementById("round")
const winnerDisplay = document.getElementById("winner")
const possibleChoices = document.querySelectorAll("button");


let playerScore = 0
let computerScore = 0
let round = 0
let winner = "x"

playerScoreDisplay.innerHTML = playerScore
computerScoreDisplay.innerHTML = computerScore
roundDisplay.innerHTML = round

//For each possible player choice in our list of possible player choices, add an event listener. When clicked, function (e) will run, 
//assigning the data behind our button to our variable named playerSelection.We then display this to browser as a visual.
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    playerSelection = e.target.innerHTML
    playerChoiceDisplay.innerHTML = playerSelection
    playRound();
}))

//randomly selecting a choice for the computer
function computerChoice(){
    let options = ["✊", "📰", "✂️"]
    let option = options[Math.floor(Math.random() * options.length)];
    computerChoiceDisplay.innerHTML = option
    return option;
}


//compare user input and computer choice
function playRound(){

    let computerSelection = computerChoice();

    if (playerSelection === computerSelection){
        winner = "Draw"
        round++
        winnerDisplay.innerHTML = winner
        roundDisplay.innerHTML = round

    } else if (playerSelection === "✊" && computerSelection === "✂️" || 
        playerSelection === "📰" && computerSelection === "✊" || 
        playerSelection === "✂️" && computerSelection === "📰") {
        console.log("Player wins");
        winner = "Player"
        playerScore++
        round++
        playerScoreDisplay.innerHTML = playerScore
        winnerDisplay.innerHTML = winner
        roundDisplay.innerHTML = round

    } else {
        console.log("Computer Wins");
        winner = "Computer"
        computerScore++
        round++
        computerScoreDisplay.innerHTML = computerScore
        winnerDisplay.innerHTML = winner
        roundDisplay.innerHTML = round
    }
}



// General comments 

// Had an absolute nightmare trying to get the return values from playerChoice and computerChoice to work in the function playRound. The outputs were fine within the functions, but I was trying to call up variables inside playRound containing the player and computer choices. If I console logged those variables inside playRound, I got 'undefined'.

// What I needed to do was assign the function's I needed variables inside the playRound function. When playRound runs, the other functions are run and their outputs are assigned to their respective variables.

//learn about arrow functions.

//the script is better at the bottom of the HTML because if ran before a certain element exists, the script will throw up errors.

//          <button class="player-options rock" data-button="rock">✊</button> added this to the HTML, gave me a way to use use an assigned value to the button

//if having an issue with not being able to select a certain element, try a different '.getelement' method

//Originally, we had 3 query selectors and 3 event listeners. I was having trouble working out how return the desired value depending on what button the user clicks. In the end, I decided to go for one event listener and one query selector to encapsulate all the buttons. From there, it was easy to assign the users input to a variable