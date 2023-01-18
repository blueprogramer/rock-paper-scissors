let playerSelection = "Rock";
let computerSelection = getComputerChoice();
const gameLength = 5;


function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)]
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Return 0 when it's a tie, 1 when person wins, -1 when computer wins
    if (playerSelection === computerSelection) {
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "paper")
                || (playerSelection === "paper" && computerSelection === "scissors")
                || (playerSelection === "scissors" && computerSelection === "rock")) {
        return -1;
    } else {
        return 1;
    }
}

function game() {
    let playerScore = 0, computerScore = 0, i = 0;

    // Evaluate who won by the given integer from the playSingleRound function
    // then console to the user who won the round and apply score changes if
    // necessary
    for (i = 0; i < gameLength; i++) {
        playerSelection = prompt("Enter your choice: Rock, Paper or Scissors.");
        computerSelection = getComputerChoice();

        if (playSingleRound(playerSelection, computerSelection) === 0) {
            console.log("It's a tie!");
        } else if (playSingleRound(playerSelection, computerSelection) === 1) {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        console.log(`Current score: Player ${playerScore}-${computerScore} Computer`);
    }

    if (i === gameLength) {
        console.log(determineWinner(playerScore, computerScore));
    }
}

// Takes two scores as parameters and logs who won to the console
function determineWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return "FINAL RESULT: No winner! Tie!";
    }
    return playerScore > computerScore ? "FINAL RESULT: You win!" : "FINAL RESULT: You lose!";
}

game();
