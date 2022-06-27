/*randomly return rock, paper or scissors for computer's turn*/
function computerPlay(max) {
    return getWord(Math.floor(Math.random() * max))
}

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
    if (playerSelection == "rock") {
         if (computerSelection == "paper") {
            console.log("You lose! Paper beats rock.")
         }
         else if (computerSelection == "scissors") {
             console.log("You win!")
             score += 1
         }
         else {
             console.log("Tie!")
         }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
           console.log("You lose! Scissors beats paper.")
        }
        else if (computerSelection == "rock") {
            console.log("You win!")
            score += 1
        }
        else {
            console.log("Tie!")
        }
   }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
        console.log("You lose! Rock beats scissors.")
        }
        else if (computerSelection == "paper") {
            console.log("You win!")
            score += 1
        }
        else {
            console.log("Tie!")
        }
    }
    else {
        console.log("Incorrect input")
    }
}

/*get input from user, case-insensitive*/
let playerSelection = prompt("Rock, paper, or scissors?" ).toLowerCase();
let computerSelection = computerPlay(3);
let score = 0;
/*function game() - call playRound function, plays 5 rounds
/*keeps score, reports winner or loser at end*/
