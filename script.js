"use strict";
//caching the DOM
let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const playerScoreSpan = document.getElementById("player-score");
const scoreboard = document.getElementsByClassName("scoreboard")[0];
const computerScoreSpan = document.getElementById("computer-score");
const resultDivP = document.querySelector(".result-p");
const resultDiv = document.querySelector(".result");
const choices = document.querySelectorAll(".choice");
const choice = document.querySelector(".choice");
let playerChoice;
let computerChoice;
let playerImg = document.getElementById("player-img");
let computerImg = document.getElementById("comp-img");
let playing = true;
const modal = document.getElementById("myModal");
const resultMssg = document.getElementById("result-mssg");
const playAgain = document.getElementById("play-again");
const closeModal = document.getElementsByClassName("close")[0];
const about = document.getElementById("about");
const aboutModal = document.getElementById("about-modal");
const aboutClose = document.getElementsByClassName('close')[0]
//getComputerChoice
let getComputerChoice = function () {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};
//initialization
const init = function () {
  playerScore = 0;
  computerScore = 0;
  playerImg.setAttribute("src", `images/player.png`);
  computerImg.setAttribute("src", `images/computer.png`);
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  resultDivP.textContent = "Welcome! Can you defeat the machine?";
  modal.style.display = "none";
  playing = true;
};
init();

//add eventlistener to playAgain button and close-modal
closeModal.addEventListener("click", () => (modal.style.display = "none"));
playAgain.addEventListener("click", init);
about.addEventListener("click", () => {
  aboutModal.style.display = "block";
});

aboutClose.addEventListener('click',()=>{
  aboutModal.style.display = 'none'
})
//handle the click events.
const handleClick = function () {
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      if (playing) {
        playerChoice = choice.id;
        computerChoice = getComputerChoice();
        playRound();
        game();
      }
    });
  });
};
//update scoreboard
const updateScoreboard = function () {
  playerImg.setAttribute("src", `images/${playerChoice}.png`);
  computerImg.setAttribute("src", `images/${computerChoice}.png`);
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
};
// Function for the Various OutComet

const win = function () {
  playerScore++;
  computerScore;
  updateScoreboard();
  scoreboard.style.borderColor = "green";
  setTimeout(() => (scoreboard.style.borderColor = "white"), 1000);
  resultDivP.textContent = `You Win! ${playerChoice} beats ${computerChoice} `;
};
const lose = function () {
  playerScore;
  computerScore++;
  updateScoreboard();
  scoreboard.style.borderColor = "red";
  setTimeout(() => (scoreboard.style.borderColor = "white"), 1000);
  resultDivP.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
};

const draw = function () {
  playerScore;
  computerScore;
  updateScoreboard();
  resultDivP.textContent = `You Picked the same weapon. Its a tie!`;
};

//Play a single Round of the Game!!!
const playRound = function () {
  switch (playerChoice + computerChoice) {
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
};

const game = function () {
  const gameOver = document.getElementById("gameover");
  if (computerScore == 5 || playerScore == 5) {
    playing = false;
    modal.style.display = "block";
    if (playerScore > computerScore) {
      resultMssg.style.color = "green";
      gameOver.style.color = "green";
      resultMssg.textContent = "🏆  YOU WON 🏆 ";
    } else {
      resultMssg.style.color = "red";
      gameOver.style.color = "red";
      resultMssg.textContent = "😞 YOU LOST 😞";
    }
  }
};
handleClick();
