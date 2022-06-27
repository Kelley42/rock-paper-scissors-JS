/*randomly return rock, paper or scissors for computer's turn*/
function computerPlay(max) {
    return getWord(Math.floor(Math.random() * max))
}

function getWord(computerSelection) {
    switch(computerSelection) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

/*play single round of game, return winner of round as string: "You lose! Paper beats Rock"*/
/*playerSelection parameter case-insensitive*/
/*function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) {
         pass
    }
}*/

/*get input from user*/
let playerSelection = prompt("Rock, paper, or scissors?" ).toLowerCase();
let computerSelection = computerPlay(3);
let score = 0;
/*function game() - call playRound function, plays 5 rounds
/*keeps score, reports winner or loser at end*/
