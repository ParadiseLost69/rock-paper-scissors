
    //generates R,P,S randomly
    function computerPlay (actions) {
        actions = ["rock", "paper", "scissors"]
        selector = actions[Math.floor(Math.random() *actions.length)];
        return selector;
    }


    //enter your name
    let playerName = prompt("Please enter your name") + (": ")


   //score counter
   let playerScore = 0
   let computerScore = 0


    //plays a game
   function roundOne (playerSelection, computerSelection) {
       playerSelection;
       
       computerSelection = computerPlay();
      
            if (playerSelection == computerSelection) {
                console.log ("It's a tie!")
            } 
            else if (playerSelection == "rock" && computerSelection == "scissors") {
                playerScore +=1;
                console.log ("You WIN! Rock beats Scissors. " + playerName + playerScore + " Computer: " + computerScore)
            }
            else if (playerSelection == "rock" && computerSelection == "paper") {
                computerScore+=1;
                console.log("You LOSE! Paper beats Rock." + playerName + playerScore + " Computer: " + computerScore)
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
                playerScore +=1;
                console.log ("You WIN! paper beats Rock." +  playerName  + playerScore + " Computer: " + computerScore)
            }
            else if (playerSelection == "paper" && computerSelection == "scissors") {
                computerScore+=1
                console.log ("You LOSE! Scissors beats Paper. " + playerName + playerScore + " Computer: " + computerScore)
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
                computerScore+=1
                console.log ("You LOSE! Rock beats Scissors." + playerName + playerScore + " Computer: " + computerScore)
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
                playerScore+=1
                console.log("You WIN! Scissors beats Paper." + playerName + playerScore + " Computer: " + computerScore)
             }
             else
             return "Please try again"
         }

    function game() {
        for (let i = 0; i<5; i++) {
            console.log (roundOne(playerSelection, computerSelection))
        }

    }

    // Button ui
    const container = document.querySelector("#container")
    
    const rock = document.createElement("button")
    rock.textContent = "ROCK"
    rock.addEventListener ("click", function () {
        roundOne("rock")
    })
    container.appendChild(rock)

    const paper = document.createElement("button")
    paper.textContent = "Paper"
    paper.addEventListener ("click", function () {
        roundOne("paper")
    })
    container.appendChild(paper)

    const scissors = document.createElement("button");
    scissors.textContent = "Scissors"
    scissors.addEventListener ("click", function () {
        roundOne("scissors")
    })
    container.appendChild(scissors)


    //player score counter
    const scoreField = document.querySelector("#score");
    let playerScoreCounter = document.createElement ("div")
    playerScoreCounter.classList.add = ("player-score")
    playerScoreCounter.textContent = "Player Score is: " + playerScore
    scoreField.appendChild(playerScoreCounter)

    //computer score counter
    let computerScoreCounter = document.createElement ("div")
    computerScoreCounter.classList.add = ("computer-score")
    computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
    scoreField.appendChild (computerScoreCounter)



    














 //   function playARound(playerSelection, computerSelection) {
 //       computerSelection = computerPlay()
 //       if (playerSelection == computerSelection) {
 //           return "It's a tie!"
 //       }
 //       switch (playerSelection) {
 //           case "rock":
 //               switch (computerSelection) {
 //                   case "scissors":
 //                       return "you win"
 //                   break;
 //                   case "paper":
 //                       return "you lose"
 //                   default:
 //                   return "Try again."
 //               }
//
 //       }
//         THIS IS A GOOD EXAMPLE OF HOW TO USE NESTED SWITCHES
 //   }