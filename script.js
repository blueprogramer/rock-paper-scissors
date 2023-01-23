const buttonRock = document.querySelector("#btn-rock");
const buttonPaper = document.querySelector("#btn-paper");
const buttonScissors = document.querySelector("#btn-scissors");

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const messageDisplay = document.querySelector("#message");

const computerChoices = ["Rock", "Paper", "Scissors"];

const roundsToWin = 5;
let currentPlayerScore = 0;
let currentComputerScore = 0;

buttonRock.addEventListener("click", () => updateResult(playSingleRound("Rock")));
buttonPaper.addEventListener("click", () => updateResult(playSingleRound("Paper")));
buttonScissors.addEventListener("click", () => updateResult(playSingleRound("Scissors")));

function initializeScore() {
    playerScore.textContent = currentPlayerScore;
    computerScore.textContent = currentComputerScore;
}

function getComputerChoice() {
    return computerChoices[Math.floor(Math.random()*computerChoices.length)]
}

function playSingleRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

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

function updateResult(singleRoundResult) {
    switch(singleRoundResult) {
        case 0:
            if (messageDisplay.textContent === "You and Zombie boss chose the same.") {
                messageDisplay.textContent = "You draw the Zombie boss again!"
            } else {
                messageDisplay.textContent = "You and Zombie boss chose the same.";
            }
            break;
        case 1:
            if (messageDisplay.textContent === "You defeat Zombie boss this round.") {
                messageDisplay.textContent = "You defeat Zombie boss again!"
            } else {
                messageDisplay.textContent = "You defeat Zombie boss this round.";
            }
            playerScore.textContent = ++currentPlayerScore;
            break;
        case -1:
            if (messageDisplay.textContent === "You lost to Zombie boss this round.") {
                messageDisplay.textContent = "Zombie boss wins against you again!"
            } else {
                messageDisplay.textContent = "You lost to Zombie boss this round.";
            }
            computerScore.textContent = ++currentComputerScore;
            break;
        default:
            messageDisplay.textContent = "Uh oh.. Something went really wrong!?";
            break;
    }

    if (currentPlayerScore === roundsToWin) {
        alert("You win the game! Congrats");
        location.reload();
    } else if (currentComputerScore === roundsToWin) {
        alert("You lose the game! Yikes!");
        location.reload();
    }
}

initializeScore();
