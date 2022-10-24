//getComputerChoice
const getComputerChoice = function(){
    const choices = ["Rock", "Paper", "Scissor"];
    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
console.log(getComputerChoice());