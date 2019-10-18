const input =require("readline-sync");

const firstName = input.question("What is your first name?");
const lastName = input.question("What is your last name?");
const age = input.questionInt("How old are you?");
const birthMonth = input.questionInt("What is your birth month (i.e Jan =1?"
);
const favoriteColor = input.question("What is your favorite ROYGBIV color?");
const numberofSiblings = input.questionInt("How many siblings do you have?");

let retirmentAge; 

if (age % 2===0) {
retirementYears = "13 years";
} else { 
    retirementYears = "30 years";
}


