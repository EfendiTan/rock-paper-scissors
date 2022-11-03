function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    if(random === 0){
        return "Rock";
    }
    else if(random === 1){
        return "Paper";
    }   
    else if(random === 2){
        return "Scissors";
    }
}
function playRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's Draw";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        return "You Lose! Scissors beats Paper"
    }    
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        return "You Win! Scissors beats Paper"
    }    
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        return "You Lose! Rock beats Scissors"
    }
    else{
        return "Something is not right";
    }    
}
function game(n){
    for(let i = 0; i<n; i++){
        playerSelection = prompt("Rock, Paper, Scissors?");
        console.log(playRound(playerSelection,getComputerChoice()));
    }
}
game(prompt("How many round would you like to play?"));
