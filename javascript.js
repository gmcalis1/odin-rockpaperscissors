
let playerWins = 0;
let computerWins = 0;
let ties = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let num = getRandomInt(3);
    if(num === 0){
        return 'rock';
    }
    else if(num === 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();

    console.log('Player: ' + playerSelection);
    console.log('Computer: '+ computerSelection);

    if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerWins++;
        checkScore(playerWins, computerWins);
        return 
    }
    else if(playerSelection === 'rock' && computerSelection ==='scissors'){
        playerWins++;
        checkScore(playerWins, computerWins);
        return 
    }
    else if(playerSelection === 'rock' && computerSelection ==='rock'){
        ties++;
        checkScore(playerWins, computerWins);
        return 
    }
    else if(playerSelection === 'scissors' && computerSelection ==='rock'){
        computerWins++;
        checkScore(playerWins, computerWins);
        return 
    }
    else if(playerSelection === 'scissors' && computerSelection ==='paper'){
        playerWins++;
        checkScore(playerWins, computerWins);
        return 
    }
    else if(playerSelection === 'scissors' && computerSelection ==='scissors'){
        ties++;
        checkScore(playerWins, computerWins);
        return 
    }
    else if(playerSelection === 'paper' && computerSelection ==='rock'){
        playerWins++;
        checkScore(playerWins, computerWins);
        return 
    }
    else if(playerSelection === 'paper' && computerSelection ==='scissors'){
        computerWins++;
        checkScore(playerWins, computerWins);
        return 
    }
    else{
        ties++;
        checkScore(playerWins, computerWins);
        return 
    }
}

function checkScore(playerWins, computerWins){
    if(playerWins == 5){
        results.textContent = 'You win!';
        return;
    }
    else if(computerWins == 5){
        results.textContent = 'Computer wins!'
        return;
    }
    return;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const playerWinner = document.createElement('p')
const computerWinner= document.createElement('p');

results.textContent = 'Player wins: '+ playerWins + ' Computer wins: ' + computerWins + ' Ties: ' + ties;
rock.addEventListener('click', function (e){
    playRound('rock', getComputerChoice(3));
    results.textContent = 'Player wins: '+ playerWins + ' Computer wins: ' + computerWins + ' Ties: ' + ties;
    checkScore(playerWins, computerWins)
});

paper.addEventListener('click', function (e){
    playRound('paper', getComputerChoice(3));
    results.textContent = 'Player wins: '+ playerWins + ' Computer wins: ' + computerWins + ' Ties: ' + ties;
    checkScore(playerWins, computerWins)
});

scissors.addEventListener('click', function (e){
    playRound('scissors', getComputerChoice(3));
    results.textContent = 'Player wins: '+ playerWins + ' Computer wins: ' + computerWins + ' Ties: ' + ties;
    checkScore(playerWins, computerWins)
});




// function game(){   
//     playerWins = 0;
//     computerWins = 0;
//     ties = 0;
    
//     if(playerWins > 2){
//         return 'Congratulations, you won! Wins: '+ playerWins + ' computerWins: ' + computerWins + ' Ties: ' + ties ;
//     }
//     else if(computerWins > 2){
//         return 'Sorry, you lost! Wins: '+ playerWins + ' computerWins: ' + computerWins + ' Ties: ' + ties ;
//     }
//     else{
//         return "It's a tie game! Wins: "+ playerWins + ' computerWins: ' + computerWins + ' Ties: ' + ties ;
//     }
// }

