// Pseudo Code:
// On page load - Scores for computer are established as zero and printed on the screen.

// User selects one of three options from buttons: Paper, Rock, Scissors
function play_game(player){
console.log("Player choice = " + player);
outcome(player, computer_choice());
}

// Computer is assigned a value of 0-2 using RNG
function computer_choice(){
    let rng = Math.floor(Math.random()*3);
    console.log("Computer choice = " + rng);
    return rng;
}

// Comparison of inputs, returns win-lose-tie
function outcome(player, computer){
    let result = null;
    if (player === computer){
        result = 0;
    } else if ((+player + 1)%3 === computer){
        result = -1
    } else{
        result = 1
    }
    console.log(result);
    return(result);
    }

// Update scores, evaluate end game conditions - Loop until either player reaches makes 5.
// Announce winner - reset scores