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
    /*get input from user, case-insensitive*/
    playerSelection = prompt("Rock, paper, or scissors?" ).toLowerCase()
    computerSelection = computerPlay(3)
    if (playerSelection == "rock") {
         if (computerSelection == "paper") {
            console.log(`"You lose! Paper beats rock." Score: ${playerScore}`)
            computerScore += 1
         }
         else if (computerSelection == "scissors") {
             console.log(`"You win!" Score: ${playerScore}`)
             playerScore += 1
         }
         else {
             console.log(`"Tie!" Score: ${playerScore}`)
         }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
           console.log(`"You lose! Scissors beats paper." Score: ${playerScore}`)
           computerScore += 1
        }
        else if (computerSelection == "rock") {
            console.log(`"You win!" Score: ${playerScore}`)
            playerScore += 1
        }
        else {
            console.log(`"Tie!" Score: ${playerScore}`)
        }
   }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log(`"You lose! Rock beats scissors." Score: ${playerScore}`)
            computerScore += 1
        }
        else if (computerSelection == "paper") {
            console.log(`"You win!" Score: ${playerScore}`)
            playerScore += 1
        }
        else {
            console.log(`"Tie!" Score: ${playerScore}`)
        }
    }
    else {
        console.log("Incorrect input")
    }
}

/*calls playRound function 5 times, keeps score, returns winner/loser*/
function game() {
    for (let turns = 0; turns < 5; turns++) {
        playRound()
    }
    let winner = (computerScore > playerScore) ? "You win!" : "You lose!"
    console.log(`${winner} Score: ${playerScore}`)
}

let playerSelection;
let computerSelection;
let computerScore = 0
let playerScore = 0
game();
