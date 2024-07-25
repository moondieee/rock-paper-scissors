let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);

  if (result == 1) {
    return "rock";
  } else if (result == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What is your choice?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    computerScore += 1;
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    computerScore += 1;
    humanScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    computerScore += 1;
    humanScore += 1;
  }
  console.log(`Computer: ${computerScore} : Human: ${humanScore}`);
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  playRound(humanSelection, computerSelection);
}
for (let i = 0; i < 5; i++) playGame();
