
//caching the DOM
const Rock = document.querySelector('#Rock');
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector('#Scissors');

//getComputerChoice
const getComputerChoice = function(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
const computerChoice = getComputerChoice();

//getplayer's input
function capitalized(str){
    const capitalizedText= str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
return capitalizedText; }


const getPlayerChoice = function() {

    }
const playerChoice = getPlayerChoice();

//display message and score update
const win = function(){
    
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    
}
const lose = function(){
   
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
}

const draw = function(){
    
    console.log("You pick the same Weapon! It's a tie")
}


//function to play round
const playRound = function(playerSelection, computerSelection){
    let roundWinner;
    if(playerSelection == computerSelection){
        draw();
        roundWinner = "tie";

    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        win();
        roundWinner ="player";
        playerScore++;
        
       }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        win();
        roundWinner ="player";
        playerScore++;
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        win();
        roundWinner ="player";
        playerScore++;
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        lose();
        roundWinner ="computer";
        computerScore++;
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors")
    {
        lose();
        roundWinner ="computer";
        computerScore++;
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        lose();
        roundWinner ="computer";
        computerScore++;
    }
};



//Game
const game = function(){
    
    
    
    
     for (i = 1; playerScore < 3 && computerScore < 3; i++){
        const result = (playRound(playerChoice, computerChoice));
        if (roundWinner="player"){
           
            
            console.log(`Player's Score:${playerScore} | Computer's Score:${computerScore}`);
        }
        else if (roundWinner="computer"){
           
            
            console.log(`Player's Score:${playerScore} | Computer's Score:${computerScore}`);

        }
        else if(roundWinner="tie"){
            
           
            console.log(`Player's Score:${playerScore} | Computer's Score:${computerScore}`);
        }
        
        if (playerScore > computerScore) {
            return ('You win ' + playerScore + ' to ' + computerScore + '.');
          } else if (playerScore < computerScore) {
            return ('You lose ' + computerScore + ' to ' + playerScore + '.');
          } else {
            return 'It was a tie, you both won the same number of rounds.';
          }    
    }
}
  
game();