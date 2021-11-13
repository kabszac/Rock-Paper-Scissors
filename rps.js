
let compScore = 0
let playerScore = 0
const buttons = document.querySelectorAll("button")



function computerPlay(){
    let items = ["rock", "paper", "scissors"]
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}


// function playRound(playerSelection, computerSelection){
//     if ((playerSelection == "rock" && computerSelection == 'scissors') ||
//         (playerSelection == "paper" && computerSelection == "rock")  ||
//         (playerSelection == "scissors" && computerSelection == "paper")){
//             playerScore += 1
//             return 'Y'
//         }
//   }
//   else if(playerSelection == computerSelection){
//       return "You tie"
//   }
//   else {
//       compScore += 1
//       //return `You lose ${computerSelection} beats ${playerSelection}`
      
      
//   }

// }

function playRound(playerSelection){
    let computerSelection = computerPlay()
    output = ""
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')){
            playerScore += 1
            output = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

            if (playerScore == 5){
                output += "<br> You Win the game"
                setTimeout(()=>{location.reload(true)}, 3000)
            }
    }else if(playerSelection == computerSelection){
        output = `you tie ${playerSelection} is same as ${computerSelection}`
    }else {
        compScore += 1
        output = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + compScore)

        if (compScore == 5){
            output += ' <br> You lost the game'
            setTimeout(()=>{location.reload(true)}, 3000)
        }
    }
    document.querySelector('.result').innerHTML = output
    return output
  }

// function game(){
//     for (let i =0; i < 5; i++ ){
//         let ui = prompt("Enter your choice")
//         console.log(playRound(ui, computerPlay()))
//     }
//     if (playerScore > compScore){
//         console.log("You win!")
//     }
//     else if ( playerScore == compScore){
//         console.log("You Tie")
//     }
//     else{
//         console.log(" Oops You lose!")
//     }
// }

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id)
    })
});

// game()






