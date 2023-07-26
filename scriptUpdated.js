const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
let gameResult = document.getElementById("result");
let chooseMove = document.getElementById("move");
let player_score_display = document.getElementById('p_score');
let computer_score_display = document.getElementById('c_score');
let round_count = document.getElementById('round');

let computerSelection;
let playerSelection;

let rockIsClicked = false;
let paperIsClicked = false;
let scissorIsClicked = false;

let level = 1; //keeps track of level
let p_score = 0 //player score
let c_score = 0 //computer score

//first listen for clicks
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', clickListener));

//checks which button is clicked
function clickListener(e) {
    let clickedText = e.target.textContent;
    console.log(clickedText);
    if (clickedText=="Rock") {
        rockIsClicked = true;
        paperIsClicked = false;
        scissorIsClicked = false;
    }
    else if (clickedText=="Paper") {
        rockIsClicked = false;
        paperIsClicked = true;
        scissorIsClicked = false;
    }
    else if (clickedText=="Scissors") {
        rockIsClicked = false;
        paperIsClicked = false;
        scissorIsClicked = true;
    }
    console.log(rockIsClicked);
    console.log(paperIsClicked);
    console.log(scissorIsClicked);

    if (rockIsClicked==true || paperIsClicked==true || scissorIsClicked==true) {
        game();
    }
}

function game() {
    if (level <= 5) {
        round_count.textContent = level;
        showPlayerChoice(); //only display player image
        getComputerChoice(); //calculate computer choice
        showComputerChoice(); //only display computer image
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        gameResult.textContent = result;

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
        player_score_display.textContent = p_score;
        computer_score_display.textContent = c_score;

        level++;
    }

    if (level==6) {
        if (p_score > c_score) {
            console.log("You Win the Game! Yay")
            gameResult.textContent = "You Win the Game! Yay";
        }
        else if (c_score > p_score) {
            console.log("Oops! you Lost the game")
            gameResult.textContent = "Oops! you Lost the game";
        }
    }
}

function showPlayerChoice() {
    if (rockIsClicked == true) {
        playerSelection = "rock";
        chooseMove.textContent = "";
        displayImg.src = "Untitled design (2)/p_rock.png";
        displayImg.style.display = "flex";
        console.log('function works');
    }
    else if (paperIsClicked == true) {
        playerSelection = "paper";
        chooseMove.textContent = "";
        displayImg.src = "Untitled design (2)/p_paper.png";
        displayImg.style.display = "flex";
    }
    else if (scissorIsClicked == true) {
        playerSelection = "scissor";
        chooseMove.textContent = "";
        displayImg.src = "Untitled design (2)/p_scissor.png";
        displayImg.style.display = "flex";
    }
}

function getComputerChoice() {
    let n = Math.random();
    if (n <= 0.33) {
        computerSelection = "rock";
    }
    else if (n <= 0.66) { 
        computerSelection = "paper";
    }
    else computerSelection = "scissor";
}

function showComputerChoice() {
    if (computerSelection=="rock") {
        computerDisplay.src = "Untitled design (2)/c_rock.png";
        computerDisplay.style.display = "flex";
    }
    else if (computerSelection=="paper") {
        computerDisplay.src = "Untitled design (2)/c_paper.png";
        computerDisplay.style.display = "flex";
    }
    else if (computerSelection=="scissor") {
        computerDisplay.src = "Untitled design (2)/c_scissor.png";
        computerDisplay.style.display = "flex";
    }
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

function capitalizeFirstLetter(inputString) {
    if (!inputString || typeof inputString !== "string") {
      return ""; // Return an empty string if input is not a valid string
    }
  
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}