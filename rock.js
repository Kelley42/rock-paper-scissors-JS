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
    playerSelection = playerSelection.target.id
    console.log(playerSelection)
    computerSelection = computerPlay(3)
    let message = ""
    if (playerSelection == "rock") {
         if (computerSelection == "paper") {
            message = "You lose! Paper beats rock."
            computerScore += 1
         }
         else if (computerSelection == "scissors") {
             message = "You win!"
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
            message = "You win!" 
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
            message = "You win!" 
            playerScore += 1
        }
        else {
            message = "Tie!"
        }
    }
    else {
        message = "Incorrect input"
    }
    document.getElementById("round-results").innerText = `Computer played: ${computerSelection}
    Your score: ${playerScore}
    Computer score: ${computerScore}
    ${message}`;
}

/*calls playRound function 5 times, keeps score, returns winner/loser*/
function game() {  
    for (let i = 0; i <= 5; i++) {
        playRound(playerSelection, computerSelection)
    }
    console.log(computerScore, playerScore)
    printWinner(computerScore, playerScore)
    

    // Append winner
    /*
    let results = document.createElement("div")
    results.id = "results"
    let winnerText = document.createTextNode(`Winner: ${winner}`)
    results.appendChild(winnerText)
    const winnerGame = document.querySelector("div #results")
    const roundWinner = document.querySelector("div #round-results")
    winnerGame.insertBefore(results, roundWinner)*/
  
}

function printWinner(computerScore, playerScore) {
    let winner = (computerScore > playerScore) ? "You win!" : "You lose!"
    console.log(`${winner} Score: ${playerScore}`)
    document.getElementById("winner-game").textContent = winner
}




//let rockButton = document.querySelector("#rock").addEventListener("click", playRound);
//let paperButton = document.querySelector("#paper").addEventListener("click", playRound)

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", playRound));
// function buttonClick(e) {
//     playerSelection = e.target.id
//     playRound
// }




