
scoreComputer = 0
scorePlayer = 0

let playerChoiceRock = document.querySelector(".rock");

function playerChoice(){
    console.log("test"); // if class name = 'rock, return rock, else if class name = paper, return paper, else return scissors

    //https://stackoverflow.com/questions/49515750/button-clicked-true-or-false-javascript
}

playerChoiceRock.addEventListener("click", playerChoice);
console.log(playerChoiceRock)


function computerChoice(){
    let options = ["R", "P", "S"]
    return options[Math.floor(Math.random() * options.length)];

}

function playRound(){   

    let playerSelection = playerChoice();
    let computerSelection = computerChoice();

    console.log("Player has selected " + playerSelection)
    console.log("Computer has selected " + computerSelection)

    if (playerSelection === computerSelection) {
        console.log("Draw!");

    } if (playerSelection === "R" && computerSelection === "S" || 
        playerSelection === "P" && computerSelection === "R" || 
        playerSelection === "S" && computerSelection === "P") {
        console.log("Player wins");
        scorePlayer++

    } else {
        console.log("Computer Wins");
        scoreComputer++
    }

    console.log("Scores: Player-" + scorePlayer + " Computer-" + scoreComputer)
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