/*function computerPlay randomly return rock, paper or scissors for computer's turn*/
function computerPlay(max) {
    return Math.floor(Math.random() * max)
}
console.log(computerPlay(3))

/*function playRound - to play single round of game*/
/* 2 parameters - playerSelection, computerSelection*/
/*return winner of round as string: "You lose! Paper beats Rock"*/

/*playerSelection parameter case-insensitive*/


/*function game() - call playRound function, plays 5 rounds
/*keeps score, reports winner or loser at end
prompt() - get input from user*/
