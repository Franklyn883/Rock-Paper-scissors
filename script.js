
//caching the DOM
let playerScore=0;
let computerScore=0;
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById('Scissors');
const playerScoreSpan = document.getElementById('player-score');
const scoreBoardDiv = document.getElementsByClassName('score-board');
const computerScoreSpan = document.getElementById('computer-score');
const resultDivP = document.querySelector('.result-p');
const resultDiv = document.querySelector('.result');
const choices = document.querySelectorAll(".choice");
const choice = document.querySelector('.choice')
let playerChoice;
let computerChoice;

//getComputerChoice
let getComputerChoice = function(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
};

//handle the click events.
const handleClick = function(){
    choices.forEach((choice) =>{
        choice.addEventListener('click', () =>{
            playerChoice = choice.id;
            computerChoice = getComputerChoice();
            playRound();
            game();
        })
    })
}
 
// Function for the Various OutComet
const win = function (){
    playerScore++;
    computerScore;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultDivP.textContent = `You Win! ${playerChoice} beats ${computerChoice} `
}
const lose = function (){
    playerScore;
    computerScore++;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultDivP.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
}

const draw = function (){
    playerScore;
    computerScore;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultDivP.textContent =`You Picked the same weapon. Its a tie!`
}

//Play a single Round of the Game!!!
const playRound = function(){
    switch(playerChoice+computerChoice){
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
            win();
            break;
        case "PaperScissors":
        case "RockPaper":
        case "ScissorsRock":
            lose();
            break;
        default:
            draw();
    }


}

const game = function(){
    
    
    if (computerScore == 5 || playerScore== 5){
        computerScore = 0;
            playerScore = 0;
            
        if(playerScore > computerScore){
            
            resultDivP.textContent = "Congratulations you won the Game! Refresh to play again";
        }
        else{ resultDivP.textContent = "Sorry you Lost. Try Again! Refresh to play again"}
    }
}

handleClick();