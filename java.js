let teddy = "hello"
console.log(teddy)

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




let x = Math.floor(Math.random() * 3) // values of 0,1,2
console.log(x) 

function computerPlay() {
    selection = Math.floor(Math.random() * 3)
    if (selection === 0){
        console.log("rock")
    } else if (selection === 1) {
        console.log("paper")
    } else {
        console.log("scissors")
    }
}
function rockPaperScissors (playerSelection, computerSelection)