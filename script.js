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
            ++playerScoreValue;
            playerScore.textContent='you: '+playerScoreValue;
            return "You Win! Rock beats Scissors";
        }
        else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
            ++computerScoreValue;
            computerScore.textContent='computer: '+computerScoreValue;
            return "You Lose! Paper beats Rock";
        }
        else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
            ++playerScoreValue;
            playerScore.textContent='you: '+playerScoreValue;
            return "You Win! Paper beats Rock";
        }
        else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
            ++computerScoreValue;
            computerScore.textContent='computer: '+computerScoreValue;
            return "You Lose! Scissors beats Paper"
        }    
        else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
            ++playerScoreValue;
            playerScore.textContent='you: '+playerScoreValue;
            return "You Win! Scissors beats Paper"
        }    
        else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
            ++computerScoreValue;
            computerScore.textContent='computer: '+computerScoreValue;
            return "You Lose! Rock beats Scissors"
        }
        else{
            return "Something is not right";
        }
    }
}
const body = document.querySelector('body');
const button = document.querySelectorAll('button');

const rock = button[0].addEventListener('click',selectRock);
const rockCheck = button[0].addEventListener('click',whoWin);
const paper = button[1].addEventListener('click',selectPaper);
const paperCheck = button[1].addEventListener('click',whoWin);
const scissors = button[2].addEventListener('click',selectScissors);
const scissorsCheck = button[2].addEventListener('click',whoWin);

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

const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again';

function replay(){
    playerScoreValue=0;
    computerScoreValue=0;
    playerScore.textContent='you: '+playerScoreValue;
    computerScore.textContent='computer: '+computerScoreValue;
    playerScore.style.display='block'
    computerScore.style.display='block';
    button[0].style.display='initial';
    button[1].style.display='initial';
    button[2].style.display='initial';
    result.textContent='Select your move';
    playAgain.style.display='none';
}
function whoWin(){
    if(playerScoreValue===5){
        playerScore.style.display='none';
        computerScore.style.display='none';
        button[0].style.display='none';
        button[1].style.display='none';
        button[2].style.display='none';

        playAgain.style.display='initial'
        body.appendChild(playAgain);
        playAgain.addEventListener('click',replay);
        
        return result.textContent='You Win!';
    }
    if(computerScoreValue===5){
        playerScore.style.display='none'
        computerScore.style.display='none';
        button[0].style.display='none';
        button[1].style.display='none';
        button[2].style.display='none';

        playAgain.style.display='initial'
        body.appendChild(playAgain);
        playAgain.addEventListener('click',replay);

        return result.textContent='Computer Win!';
    }
}




















