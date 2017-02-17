var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

var compare = function(choice1, choice2){
    choice1 = choice1.toLowerCase();
    choice2 = choice2.toLowerCase();
    if(choice1 === choice2){
        return "The result is a tie!";
    } 
    if(choice1 === "rock"){
        if(choice2 === "paper"){
            return "paper wins";
        } else {
            return "rock wins";
        }
    } 
    if(choice1 === "paper"){
        if(choice2 === "scissors"){
            return "scissors wins";
        } else {
            return "paper wins";
        }
    } else {
        if(choice2 === "paper"){
            return "scissors wins";
        } else {
            return "rock wins";
        }
    }
}
console.log(compare(userChoice, computerChoice));