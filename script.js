const ComputerChoiceDisplay = document.getElementById("computer-choice")
const UserChoiceDisplay = document.getElementById("user-choice")
const ResultDisplay = document.getElementById("result")
const PossibleChoices = document.querySelectorAll("button")
let UserChoice
let ComputerChoice
let Result
PossibleChoices.forEach(PossibleChoices => PossibleChoices.addEventListener("click", (e) => {
    UserChoice = e.target.id
    UserChoiceDisplay.innerHTML = UserChoice
    GenerateComputerChoice()
    GetResult()
}))
function GenerateComputerChoice() {
    const RandomNumber = Math.floor(Math.random() * 3) + 1
    if (RandomNumber == 1) {
        ComputerChoice = 'Rock'
    }
    if (RandomNumber == 2) {
        ComputerChoice = 'Paper'
    }
    if (RandomNumber == 3) {
        ComputerChoice = 'Scissors'
    }
    ComputerChoiceDisplay.innerHTML = ComputerChoice
}
function GetResult() {
    if (UserChoice === ComputerChoice) {
        Result = "ITS A DRAW!"
    }
    if (UserChoice === 'Rock' && ComputerChoice === 'Scissors') {
        Result = "YOU WIN!"
    }
    if (UserChoice === 'Rock' && ComputerChoice === 'Paper') {
        Result = "YOU LOST!"
    }
    if (UserChoice === 'Paper' && ComputerChoice === 'Rock') {
        Result = "YOU WIN!"
    }
    if (UserChoice === 'Paper' && ComputerChoice === 'Scissors') {
        Result = "YOU LOST!"
    }
    if (UserChoice === 'Scissors' && ComputerChoice === 'Paper') {
        Result = "YOU WIN!"
    }
    if (UserChoice === 'Scissors' && ComputerChoice === 'Rock') {
        Result = "YOU LOST!"
    }
    ResultDisplay.innerHTML = Result
}