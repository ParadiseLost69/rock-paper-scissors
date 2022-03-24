
function gradeCalc (gradeOne, gradeTwo, gradeThree, gradeFour) {
    finalGrade = (gradeOne + gradeTwo + gradeThree + gradeFour) / 4 // retrieve average
    if (finalGrade < 50) {
        console.log ("Your grade is " + finalGrade + " YOU ARE FAILING")  //indicate failing grade
    } else {
        console.log ("Your grade is " + finalGrade + " Keep trying your best!") //indicate passing grade
    }

    
    console.log (finalGrade)
}

//randomly returns ROCK PAPER or SCISSORS
// set var R P S
//use random to select
//output selection
//make random number - if 0 display rock, if 1 display paper, if 2 display scissors





////generates number 0-2 then outputs rock/paper/scissors string
//function computerPlayOne() {
//    selection = Math.floor(Math.random() * 3) ///generate number 0-2
//    if (selection === 0){
//        return "rock"
//    } else if (selection === 1) {
//        return "paper"
//    } else {
//        return "scissors"
//    }
//}



    function computerPlay (actions) {
        actions = ["rock", "paper", "scissors"]
        selector = actions[Math.floor(Math.random() *actions.length)];
        return selector;
    }

    //two parameters playerSelection and computerSelection
    //play round
    //return a string that declares the winner

    //user inputs: rock, paper or scissors
    ///



   function roundOne (playerSelection, computerSelection) {
       playerSelection = prompt("Choose rock OR paper OR scissors")
       ;
       computerSelection = computerPlay()
      
       if (playerSelection == computerSelection) {
           return "It's a tie!"
       } 
       else if (playerSelection == "rock" && computerSelection == "scissors") {
       return "You WIN! Rock beats Scissors."
       }
       else if (playerSelection == "rock" && computerSelection == "paper") {
           return "You LOSE! Paper beats Rock."
       }
       else if (playerSelection == "paper" && computerSelection == "rock") {
           return "You WIN! paper beats Rock."
       }
       else if (playerSelection == "paper" && computerSelection == "scissors") {
           return "You LOSE! Scissors beats Paper."
       }
       else if (playerSelection == "scissors" && computerSelection == "rock") {
           return "You LOSE! Rock beats Scissors."
       }
       else if (playerSelection == "scissors" && computerSelection == "rock") {
           return "You WIN! Scissors beats Paper."
        }
        else
        return "Please try again"
    }


    function game() {
        for (let i = 0; i<5; i++) {
            console.log (roundOne(playerSelection, computerSelection))
        }

    }













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