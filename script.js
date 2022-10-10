const body = document.querySelector('body');
const buttonRock = document.createElement('button');
const buttonPaper = document.createElement('button');
const buttonScissors = document.createElement('button');
const result = document.createElement('div');
const buttonContainer = document.createElement('div');
const currentScore = document.createElement('div');
let playerChoice;
let roundResult;
let playerScore = 0;
let computerScore = 0;

function playRound() {
    playerChoice = playerChoice.toLowerCase(); //Makes the player input case insensitive
    computerChoice = getComputerChoice(); // Use getComputerChoice() function to determine a random computer choice
    if(playerChoice === computerChoice) {  // decide the outcome of one game
        roundResult =  "It's a tie!";
        console.log(roundResult)
        result.textContent = `${roundResult}` //This line change the text in the result container.
        return roundResult;
    } else if(playerChoice === "rock" && computerChoice === "scissors" ||
              playerChoice === "paper" && computerChoice === "rock" || 
              playerChoice === "scissors" && computerChoice === "paper") {
        roundResult = `You win! ${playerChoice} beats ${computerChoice}!` ;
        console.log(roundResult)
        ++playerScore;  //increase playerScore
        result.textContent = `${roundResult}`
        return roundResult;
    } else {
        roundResult = `You lose! ${computerChoice} beats ${playerChoice}!`;
        console.log(roundResult)
        ++computerScore;  //increase computerScore
        result.textContent = `${roundResult}`
        return roundResult;
    }
}

function getComputerChoice() {      
    const randomNumber = Math.floor(Math.random() * 3 +1)
    if(randomNumber === 1) {
        return "rock"
    } else if(randomNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function resetValues() {
    playerScore = 0;
    computerScore = 0;
}

function endGame () {
if(playerScore === 5 && playerScore > computerScore) {
          result.textContent = ""  
          result.textContent += `You Won! It's ${playerScore} to ${computerScore} in your favour!`;
          resetValues()
       } else if(computerScore === 5 && playerScore < computerScore ) {
          result.textContent = "" 
          result.textContent += `You Loose! It's ${computerScore} to ${playerScore} in computer favour!`;
          resetValues()
       } 
}


buttonRock.textContent = "Rock"
buttonPaper.textContent = "Paper"
buttonScissors.textContent = "Scissors"

body.appendChild(buttonContainer)
buttonContainer.appendChild(buttonRock)
buttonContainer.appendChild(buttonPaper)
buttonContainer.appendChild(buttonScissors)
body.appendChild(result)
body.appendChild(currentScore)
const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.textContent;
        console.log(playerChoice);
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
})

buttons.forEach((button) => {
    button.addEventListener('click', endGame)
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    })
})

result.style.textAlign = 'center';
buttonContainer.style.textAlign = 'center';
currentScore.style.textAlign = 'center';


