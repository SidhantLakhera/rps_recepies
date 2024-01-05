const playerChoice = prompt('Choose rock,paper or scissors').toLocaleLowerCase();





function getComputerChoice(){
    const arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random() * arr.length)]

}



function playRound(playerChoice,computerChoice){
   

    console.log('Player choice:', playerChoice);
    console.log('Computer choice:', computerChoice);

    if(playerChoice === computerChoice){
        console.log("Tie")

    }
    else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log('Player Wins')
    }
    else if(playerChoice === 'paper' && computerChoice === 'rock'){
        console.log('Player Wins')
    }
    else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        console.log('Player Wins')
    }
    else{
        console.log('Computer Wins')
    }
}

playRound(playerChoice,getComputerChoice())