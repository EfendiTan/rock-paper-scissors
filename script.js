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
    if(playerScoreValue !== 5 && computerScoreValue !== 5){
        if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
            return "It's Draw";
        }
        else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
            playerScoreValue++;
            playerScore.textContent='you: '+playerScoreValue;
            return "You Win! Rock beats Scissors";
        }
        else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
            computerScoreValue++;
            computerScore.textContent='computer: '+computerScoreValue;
            return "You Lose! Paper beats Rock";
        }
        else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
            playerScoreValue++;
            playerScore.textContent='you: '+playerScoreValue;
            return "You Win! Paper beats Rock";
        }
        else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
            computerScoreValue++;
            computerScore.textContent='computer: '+computerScoreValue;
            return "You Lose! Scissors beats Paper"
        }    
        else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
            playerScoreValue++;
            playerScore.textContent='you: '+playerScoreValue;
            return "You Win! Scissors beats Paper"
        }    
        else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
            computerScoreValue++;
            computerScore.textContent='computer: '+computerScoreValue;
            return "You Lose! Rock beats Scissors"
        }
        else{
            return "Something is not right";
        }
    }
    else if(playerScoreValue===5){
        playerScore.remove();
        computerScore.remove();
        button[0].remove();
        button[1].remove();
        button[2].remove();

        const playAgain = document.createElement('button');
        console.log(playAgain)
        return result.textContent='You Win!';

    }
    else if(computerScoreValue===5){
        playerScore.remove()
        computerScore.remove();
        button[0].remove();
        button[1].remove();
        button[2].remove();

        const playAgain = document.createElement('button');
        console.log(playAgain)
        
        return result.textContent='Computer Win!';
    }
}

const button = document.querySelectorAll('button');

const rock = button[0].addEventListener('click',selectRock);
const paper = button[1].addEventListener('click',selectPaper)
const scissors = button[2].addEventListener('click',selectScissors)

const result = document.querySelector('.result');

function selectRock(){result.textContent=playRound('rock',getComputerChoice())}
function selectPaper(){result.textContent=playRound('paper',getComputerChoice())}
function selectScissors(){result.textContent=playRound('scissors',getComputerChoice())}

result.textContent='Select your move';

let playerScoreValue = 0;
let computerScoreValue = 0;

const playerScore=document.querySelector('.playerScore');
const computerScore=document.querySelector('.computerScore');

playerScore.textContent='you: '+playerScoreValue;
computerScore.textContent='computer: '+computerScoreValue;




















