const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possiblechoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or u can use possiblechoices.length
    // console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!'
    }

    resultDisplay.innerHTML = result
}