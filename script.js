function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)]
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if ((playerSelection === "rock" && computerSelection === "paper")
                || (playerSelection === "paper" && computerSelection === "scissors")
                || (playerSelection === "scissors" && computerSelection === "rock")) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}
