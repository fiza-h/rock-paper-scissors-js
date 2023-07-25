function getComputerChoice() {
    let n = Math.random();
    if (n <= 0.33) {
        return "rock";
    }
    else if (n <= 0.66) { 
        return "paper";
    }
    else return "scissor";
}

function playerSelection() {
    return prompt("Rock, Paper or Scissors: ").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection == "rock" && playerSelection == "scissor") || 
        (computerSelection == "paper" && playerSelection == "rock") || 
        (computerSelection == "scissor" && playerSelection == "paper")) {
        return "You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection);
    } 
    else if ((computerSelection == "scissor" && playerSelection == "rock") || 
            (computerSelection == "rock" && playerSelection == "paper") || 
            (computerSelection == "paper" && playerSelection == "scissor")) {
        return "You Win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection);
    }
    else return "It's a tie";
}

function capitalizeFirstLetter(inputString) {
    if (!inputString || typeof inputString !== "string") {
      return ""; // Return an empty string if input is not a valid string
    }
  
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function game() {
    let level; //keeps track of level
    let p_score = 0 //player score
    let c_score = 0 //computer score

    for (level = 0; level <= 5; level++) {

        let computerSelection = getComputerChoice();
        let playerOption = playerSelection();
        console.log("Computer Selection: " + computerSelection);
        console.log("Player Selection: " + playerOption);
        let result = playRound(playerOption, computerSelection);
        console.log(result);

        if (scoreChecker(result) == 0) {
            p_score++;
        }
        else if (scoreChecker(result) == 1) {
            c_score++;
        }
        else if (scoreChecker(result) == 2) {
            c_score++;
            p_score++;
        }
        console.log("Player Score: " + p_score);
        console.log("Computer Score: " + c_score);
    }

    if (p_score > c_score) {
        console.log("You Win the Game! Yay")
    }
    else if (c_score > p_score) {
        console.log("Oops! you Lost the game")
    }
    
}

function scoreChecker(string) {
    if (string.substring(0, 7) == "You Win") {
        return 0;
    }
    else if (string.substring(0, 8) == "You Lose") {
        return 1;
    }
    else if (string.substring(0, 4) == "It's") {
        return 2;
    }
}

game();