
    //generates R,P,S randomly
    function computerPlay (actions) {
        actions = ["rock", "paper", "scissors"]
        selector = actions[Math.floor(Math.random() * 3)];
        return selector;
    }


    //enter your name
    let playerName = prompt("Please enter your name")


   //score counter
   let playerScore = 0
   let computerScore = 0


    //plays a game
   function roundOne (playerSelection, computerSelection) {
       playerSelection;
       
       computerSelection = computerPlay();
      
            if (playerSelection == computerSelection) {
                return "It's a tie!"
            } 
            else if (playerSelection == "rock" && computerSelection == "scissors") {
                playerScore+=1;

                return "You WIN! Rock beats scissors."
            }
            else if (playerSelection == "rock" && computerSelection == "paper") {
                computerScore+=1;
                return "You LOSE! Paper beats Rock." 
                    
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
                playerScore +=1;
                return "You WIN! paper beats Rock." 
            }
            else if (playerSelection == "paper" && computerSelection == "scissors") {
                computerScore+=1
                return "You LOSE! Scissors beats Paper. " 
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
                computerScore+=1
                return "You LOSE! Rock beats Scissors." 
            }
            else if (playerSelection == "scissors" && computerSelection == "paper") {
                playerScore+=1
                return "You WIN! Scissors beats Paper." 
             }
             else
             return "Please try again"
         }


    // Button ui
    const container = document.querySelector("#container")

    
    

    ///rock
    const rock = document.createElement("button")
    rock.textContent = "ROCK"
    rock.addEventListener ("click", function () {
        roundOne("rock")
        computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
        playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
        if (playerScore == 5){
            const endGame = document.createElement ("p")
            endGame.classList.add = ("game-over")
            endGame.textContent = "You win!"
            playerScore = 0
            computerScore = 0
            computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
            playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
            container.appendChild(endGame)

        } else if (computerScore == 5) {
            const endGame = document.createElement ("p")
            endGame.classList.add = ("game-over")
            endGame.textContent = "You lose!"
            playerScore = 0
            computerScore = 0
            computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
            playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
            container.appendChild(endGame)

        }



        
    }
    )
    container.appendChild(rock)

    ///paper
    const paper = document.createElement("button")
    paper.textContent = "Paper"
    paper.addEventListener ("click", function () {
        roundOne("paper")
        computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
        playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
        if (playerScore == 5){
            const endGame = document.createElement ("p")
            endGame.classList.add = ("game-over")
            endGame.textContent = "You win!"
            playerScore = 0
            computerScore = 0
            computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
            playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
            container.appendChild(endGame)

        } else if (computerScore == 5) {
            const endGame = document.createElement ("p")
            endGame.classList.add = ("game-over")
            endGame.textContent = "You lose!"
            playerScore = 0
            computerScore = 0
            computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
            playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
            container.appendChild(endGame)

        }

    })
    container.appendChild(paper)



    //scissors
    const scissors = document.createElement("button");
    scissors.textContent = "Scissors"
    scissors.addEventListener ("click", function () {
        roundOne("scissors")
        computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
        playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
        if (playerScore == 5){
            const endGame = document.createElement ("p")
            endGame.classList.add = ("game-over")
            endGame.textContent = "You win!"
            playerScore = 0
            computerScore = 0
            computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
            playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
            container.appendChild(endGame)

        } else if (computerScore == 5) {
            const endGame = document.createElement ("p")
            endGame.classList.add = ("game-over")
            endGame.textContent = "You lose!"
            playerScore = 0
            computerScore = 0
            computerScoreCounter.textContent = ("Computer Score is: ") + computerScore
            playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
            container.appendChild(endGame)

        }
    })
    container.appendChild(scissors)


    //player score counter
    const scoreField = document.querySelector("#score");
    let playerScoreCounter = document.createElement ("div")
    playerScoreCounter.classList.add = ("player-score")
    playerScoreCounter.textContent = (playerName + "'s " + "Score is: ") + playerScore
    scoreField.appendChild(playerScoreCounter)

    //computer score counter
    let computerScoreCounter = document.createElement ("div")
    computerScoreCounter.classList.add = ("computer-score")
    computerScoreCounter.textContent = ("Computer Score is: ") + computerScore

    scoreField.appendChild (computerScoreCounter)


    
    
    
    
    //have to get a variable that updates.
   //  onclick computer score +1

    //input box
    














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