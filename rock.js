/*randomly return random number 0, 1, 2 for computer's turn*/
function computerPlay(max) {
    return getWord(Math.floor(Math.random() * max))
}

/*change random number into rock, paper, scissors*/
function getWord(computerSelection) {
    switch(computerSelection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/*play single round of game, return winner of round as string: "You lose! Paper beats Rock"*/
function playRound(playerSelection, computerSelection) {
    let message = ""
    playerSelection = playerSelection.target.id
    computerSelection = computerPlay(3)
    if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                message = "You lose! Paper beats rock."
                computerScore += 1
            }
            else if (computerSelection == "scissors") {
                message = "You win! Rocks beats scissors."
                playerScore += 1
            }
            else {
                message = "Tie!"
            }
    }
    else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
            message = "You lose! Scissors beats paper." 
            computerScore += 1
            }
            else if (computerSelection == "rock") {
                message = "You win! Paper beats rock." 
                playerScore += 1
            }
            else {
                message = "Tie!" 
            }
    }
    else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                message = "You lose! Rock beats scissors."
                computerScore += 1
            }
            else if (computerSelection == "paper") {
                message = "You win! Scissors beats paper." 
                playerScore += 1
            }
            else {
                message = "Tie!"
            }
    }
    else {
            message = "Incorrect input"
    }
    // Display stats to player
    document.getElementById("round-results").innerText = `Computer played: ${computerSelection}
    Your score: ${playerScore}
    Computer score: ${computerScore}
    ${message}`;
    // End game after first to score 5 pts
    if (playerScore == 5 || computerScore == 5) {
        printWinner(computerScore, playerScore)
    }
}

// Displays winner and makes buttons unclickable
function printWinner(computerScore, playerScore) {
    let winner = (computerScore > playerScore) ? "You win!" : "You lose!"
    console.log(`${winner} Score: ${playerScore}`)
    document.getElementById("winner-game").textContent = winner
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => button.disabled = true);
}


let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", playRound));





