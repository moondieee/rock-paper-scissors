const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const div = document.querySelector(".restart");
const restart = document.createElement("button");
restart.textContent = "restart";
restart.style = "opacity: 0;";
div.append(restart);

const h1 = document.querySelector("h1");

let humanScore = 0;
let computerScore = 0;

let humanChoice = "";
let computerChoice = "";

rock.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
paper.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

restart.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  restart.style = "opacity: 0;";
});

function playRound(humanChoice, computerChoice) {
  if (computerScore == 4) {
    h1.textContent = "Computer have won!";
    restart.style = "opacity: 1;";
    return 1;
  } else if (humanScore == 4) {
    h1.textContent = "You have won!";
    restart.textContent = "Restart";
    restart.style = "opacity: 1;";
    return 1;
  }

  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "rock" && computerChoice == "rock") {
    computerScore += 1;
    humanScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    computerScore += 1;
    humanScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    computerScore += 1;
    humanScore += 1;
    h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
  }
  h1.textContent = `Computer: ${computerScore} | You: ${humanScore}`;
}

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
