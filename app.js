let favMov = prompt("User enter your favorite movie:");

let guess = prompt("Guess the favorite movie:");

while(guess != favMov){
    if(guess == "quit"){
        console.log("You quit.");
        break;
    }
    guess = prompt("Wrong guess.Please try again");
}
if(guess == favMov){
    console.log("Congrats.You guessed it right");
}