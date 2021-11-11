
let compScore = 0
let playerScore = 0

function computerPlay(){
    let items = ["rock", "paper", "scissors"]
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}

function playRound(playerSelection, computerSelection){
  if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
  (playerSelection == 'paper' && computerSelection == 'rock') || 
  (playerSelection == 'scissors' && computerSelection == 'paper')){
      playerScore += 1
      return `You win ${playerSelection} beats ${computerSelection}`
  }
  else if(playerSelection == computerSelection){
      return "You tie"
  }
  else {
      compScore += 1
      return `You lose ${computerSelection} beats ${playerSelection}`
  }
}

function game(){
    for (let i =0; i < 5; i++ ){
        let ui = prompt("Enter your choice")
        console.log(playRound(ui, computerPlay()))
    }
    if (playerScore > compScore){
        console.log("You win!")
    }
    else if ( playerScore == compScore){
        console.log("You Tie")
    }
    else{
        console.log(" Oops You lose!")
    }
}

game()






