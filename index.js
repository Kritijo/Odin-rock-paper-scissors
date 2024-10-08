function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random()*choices.length)];
}

let humanScore = 0;
let compScore = 0;

function playRound(playerChoice){
    compChoice = getComputerChoice();
    const outcomes = {
        'rock':'scissor',
        'paper' : 'rock',
        'scissor' : 'paper'
    };

    if(playerChoice === compChoice){
        return "It's a tie!";
    }
    else if (outcomes[playerChoice] === compChoice){
        humanScore++;
        return "You Win!"
    }
    else {
        compScore++;
        return "You lose!";
    }
}

let display = document.querySelector(".result");
let buttonDiv = document.querySelector(".bttns");
const buttonDivClone = buttonDiv.innerHTML;

function resetGame(){
    humanScore = 0;
    compScore = 0;
    buttonDiv.innerHTML = '';

    let playAgain = document.createElement("button");
    playAgain.textContent = "Play again!";
    display.append(playAgain);
    
    playAgain.addEventListener("click",()=>{
        display.textContent=''
        buttonDiv.innerHTML = buttonDivClone;
        buttonEvent();
    });
}

function endGame(){
    display.textContent = `${humanScore == 5 ? `You've won!` : `You've lost! `} Your score : ${humanScore} Computer Score : ${compScore} `;
    resetGame();
}

function buttonEvent(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button=>{
        button.addEventListener("click", ()=> {
            if (humanScore == 5 || compScore == 5){
                endGame();
            } else{
                display.textContent = playRound(button.className);
            }
        })
    });
}

buttonEvent();