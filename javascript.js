
let wins;
let losses;
let ties;

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
        losses++;
        return 'You lose! Paper beats rock';
    }
    else if(playerSelection === 'rock' && computerSelection ==='scissors'){
        wins++;
        return 'You win! Rock beats Scissors';
    }
    else if(playerSelection === 'rock' && computerSelection ==='rock'){
        ties++;
        return "It's a tie!";
    }
    else if(playerSelection === 'scissors' && computerSelection ==='rock'){
        losses++;
        return "You lose! Rock beats Scissors";
    }
    else if(playerSelection === 'scissors' && computerSelection ==='paper'){
        wins++;
        return "You win! Scissors beats paper";
    }
    else if(playerSelection === 'scissors' && computerSelection ==='scissors'){
        ties++;
        return "It's a tie!";
    }
    else if(playerSelection === 'paper' && computerSelection ==='rock'){
        wins++;
        return "You win! Paper beats Rock";
    }
    else if(playerSelection === 'paper' && computerSelection ==='scissors'){
        losses++;
        return "You lose! Scissors beats paper";
    }
    else{
        ties++;
        return "It's a tie!";
    }
}

function game(){
    
    wins = 0;
    losses = 0;
    ties = 0;

    for(let i = 0; i < 5; i++){
        alert(playRound(prompt('Select rock, paper, or scissors'), getComputerChoice(3)));
    }
    if(wins > 2){
        return 'Congratulations, you won! Wins: '+ wins + ' Losses: ' + losses + ' Ties: ' + ties ;
    }
    else if(losses > 2){
        return 'Sorry, you lost! Wins: '+ wins + ' Losses: ' + losses + ' Ties: ' + ties ;
    }
    else{
        return "It's a tie game! Wins: "+ wins + ' Losses: ' + losses + ' Ties: ' + ties ;
    }
}



alert(game());
