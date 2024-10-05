function getComputerChoice(){
    let val = Math.random();
    if (val <= 0.25){
        return 'rock';
    } else if (val <= 0.75){
        return 'paper';
    } else{
        return 'scissors';
    }
}

function getHumanChoice(){

    while(true){
        let val = prompt("Choose your pick {rock, paper, scissors} : ");
        val = val.toLowerCase();
        if(val == 'rock'){
            return 'rock';
        } else if (val == 'scissors'){
            return 'scissors';
        } else if (val == 'paper'){
            return 'paper'
        } else{
            alert("Enter a valid option!");
        }
    }
}

let round = 0;
let humanScore = 0;
let compScore = 0;

function playRound(humanChoice, compChoice){
    if (humanChoice == 'rock' && compChoice == 'scissors' || humanChoice == 'paper' && compChoice == 'rock' || humanChoice == 'scissors' && compChoice == 'paper'){
        alert(`You win round ${round+1}!`);
        humanScore++;
    }
    else if (compChoice == 'rock' && humanChoice == 'scissors' || compChoice == 'paper' && humanChoice == 'rock' || compChoice == 'scissors' && humanChoice == 'paper'){
        alert(`You lose round ${round+1}!`);
        compScore++;
    }
    else{
        alert("It's a tie!");
    }
}

function playGame(){
    
    while(round < 5){
        let humanChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        playRound(humanChoice,compChoice);
        round++;
    }
    alert('*****Game Over!*****');
    if(humanScore > compScore){
        alert("Congrats! You've won the game!");
    } else if (compScore > humanScore){
        alert("Well well, you've lost.");
    } else{
        alert("Too bad, the game ends in a tie..");
    }
    round = 0;
}

playGame();