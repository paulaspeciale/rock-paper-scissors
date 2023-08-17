const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result');
const gameResult = document.getElementById('game-result')
const possibleChoices = document.querySelectorAll('button')

let result;
let computerScoreDisplay = document.getElementById('computer-score');
let playerScoreDisplay = document.getElementById('player-score');
let computerScore;
let playerScore;

function game(){
  let playerSelection;
  let computerSelection;
  computerScore=playerScore=0;
 
 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerSelection = e.target.id
  userChoiceDisplay.innerHTML = playerSelection
  computerSelection=getComputerChoice();
  playRound(playerSelection,computerSelection)

  if (playerScore >= 5 && computerScore<=5){
    gameResult.innerHTML='Game over! Player Won, congratulations'
   // alert('Game over! Player Won, congratulations')
   resetScores()
   }
  else {
    if (computerScore >= 5 && playerScore<=5){
      gameResult.innerHTML='Game over! Computer Won'
    //  alert('Game over! Computer Won')
      resetScores();
    }
  }
  
})
)}

function resetScores(){
 
  setTimeout(() => {
  gameResult.innerHTML='';
  computerScoreDisplay.innerHTML=0;
  playerScoreDisplay.innerHTML=0;
  
  
}, 5000);
  
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerSelection = 'rock'
  }
  if (randomNumber === 2) {
    computerSelection = 'scissors'
  }
  if (randomNumber === 3) {
    computerSelection = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerSelection
  return computerSelection;
}

function playRound(playerSelection,computerSelection) {
 
  if (computerSelection === playerSelection) {
    result = 'its a draw!'
  }
  if (computerSelection === 'rock' && playerSelection === "paper") {
    result = 'you win!'
    playerScore++;
  }
  if (computerSelection === 'rock' && playerSelection === "scissors") {
    result = 'you lost!'
    computerScore++;
  }
  if (computerSelection === 'paper' && playerSelection === "scissors") {
    result = 'you win!'
    playerScore++;
  }
  if (computerSelection === 'paper' && playerSelection === "rock") {
    result = 'you lose!'
    computerScore++;
  }
  if (computerSelection === 'scissors' && playerSelection === "rock") {
    result = 'you win!'
    playerScore++;
  }
  if (computerSelection === 'scissors' && playerSelection === "paper") {
    result = 'you lose!'
    computerScore++;
  }
  
  resultDisplay.innerHTML = result
  computerScoreDisplay.innerHTML = computerScore
  playerScoreDisplay.innerHTML = playerScore
}
game();