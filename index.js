let playerScore = 0;
let computerScore = 0;

function computerPlay()
{
  let pick = Math.floor(Math.random() * 3 + 1);
   if (pick == 1) {
     return "rock";
   }
   else if (pick == 2) {
     return "paper";
   }
   else if (pick == 3) {
     return "scissors";
   }
}

function playRound(playerSelection, computerSelection)
{
  let selection = playerSelection.toLowerCase();
  if (computerSelection == "rock") {
    if (selection == "rock") {
      return "It's a draw!";
    }
    else if (selection == "paper") {
      playerScore++;
      return "You win! Paper beats rock";
    }
    else if (selection == "scissors") {
      computerScore++;
      return "You lose! Rock beats scissors";
    }
  }
  else if (computerSelection == "paper") {
    if (selection == "rock") {
      computerScore++;
      return "You lose! Paper beats rock";
    }
    else if (selection == "paper") {
      return "It's a draw!";
    }
    else if (selection == "scissors") {
      playerScore++;
      return "You win! Scissors beats paper";
    }
  }
  else if (computerSelection == "scissors") {
    if (selection == "rock") {
      playerScore++;
      return "You win! Rock beats scissors";
    }
    else if (selection == "paper") {
      computerScore++;
      return "You lose! Scissors beats paper";
    }
    else if (selection == "scissors") {
      return "It's a draw!";
    }
  }
}

function game()
{
  for (var i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose either rock, paper, or scissors");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score is: " + playerScore);
    console.log("Your opponent's score is " + computerScore);
  }
  if (playerScore > computerScore) {
    return "You win!";
  }
  else if (playerScore < computerScore) {
    return "You lose!";
  }
  else {
    return "It's a draw!";
  }
}
