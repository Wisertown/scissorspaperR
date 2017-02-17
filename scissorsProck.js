window.onload = function(){



var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 

var compare = function(choice1, choice2){
    

    if(choice1 === choice2){
       alert("The result is a tie!");
       compare(userChoice(), choice2);
    } 
    if(choice1 === "rock"){
        if(choice2 === "paper"){
            return "paper wins YOU SUCK AT THIS!";
        } else {
            return "rock wins GOOD JOB!";
        }
    } 
    if(choice1 === "paper"){
        if(choice2 === "scissors"){
            return "scissors wins You jerk! You win nothing!";
        } else {
            return "paper wins GOOD JOB!";
        }
    } else {
        if(choice2 === "paper"){
            return "scissors wins GOOD JOB!";
        } else {
            return "rock wins you idiot! Good luck next time!";
        }
    }
}
var userChoice = function(){
    var check = prompt("Do you choose rock, paper or scissors?");
    check = check.toLowerCase();
    var picks = ["rock", "paper", "scissors"];
    if(picks.includes(check) !== true){
    alert("You can only pick rock, paper or scissors");
     userChoice();
    } else {
        return check;
    }
}



var finality = compare(userChoice(), computerChoice);
console.log(finality);
var show = document.getElementById('result');
console.log(show);
show.innerHTML = finality;

    playagain = function(){
        finality = compare(userChoice(), computerChoice);
        console.log(finality);
        var show = document.getElementById('result');
        console.log(show);
        show.innerHTML = finality;
    }


}






