'use strict';

const mockData = require('./mockData.js').data;

console.log("Welcome to the WincWinc dating app")

const userProfile = {
  first_name: "",
  last_name: "",
  age: 0,
  gender: "",
  gender_interest: "",
  location: "",
  min_age_interest: 0,
  max_age_interest: 0,
}

while (true) {
  let answer = prompt("What is your First Name?");
  if (answer === "" || answer === null) {
    console.log("Please fill in your first name");
  } else {
    console.log(`Your first name is ${answer}`);
    userProfile.first_name = answer;
    break;
  }
}

while (true) {
  let answer = prompt("What is your Last Name?");
  if (answer === "" || answer === null) {
    console.log("Please fill in your last name");
  } else {
    console.log(`Your last name is ${answer}`);
    userProfile.last_name = answer;
    break;
  }
}

while (true) {
  let answer = prompt("What is your age?");
  if (answer === "" || answer === null) {
    console.log("Please fill in your age");
  } else if (answer < 18) {
    console.log("You are to young for the WincWinc app")
  } else {
    console.log(`Your age is ${answer}`);
    userProfile.age = Number(answer);
    break;
  }
}
let answer = "";
while (true) {
  answer = prompt("What is your gender; M, F or X?");
  if (answer === "F") {
    console.log("Your gender is female");
    userProfile.gender = answer;
    break;
  } else if (answer === "M") {
    console.log("Your gender is male");
    userProfile.gender = answer;
    break;
  } else if (answer === "X") {
    console.log("Your are a transgender");
    userProfile.gender = answer;
    break;
  } else {
    console.log("Please choose between M, F or X");
    continue;
  }
}  

while (true) {
  let answer = prompt("What gender are you interested in; M, F, X or B?");
  if (answer === "F") {
    console.log("You are interested in dating a female");
    userProfile.gender_interest = answer;
    break;
  } else if (answer === "M") {
    console.log("You are interested in dating a male");
    userProfile.gender_interest = answer;
    break;
  } else if (answer === "X") {
    console.log("You are interested in dating a transgender");
    userProfile.gender_interest = answer;
    break;
  } else if (answer === "B") {
    console.log("You are interested in dating a male and female");
    userProfile.gender_interest = answer;
    break;
  } else {
    console.log("Please choose between M, F, X or B"); 
    continue;
  } 
}  userProfile.gender = answer;

while(true) {
  answer = prompt("Where are you located; city or rural?");
  if (answer === "city" || answer === "rural") {
    console.log(`You live in a ${answer} area`); break;
  } else {console.log(`Please choose city or rural`);
  }
  } userProfile.location = answer;


while(true) {
  let answer = prompt("What is the minimal age of your match candidate?");
  if (answer < 18) {
    console.log("The minimal age is 18, please choose again");
  } else {
    console.log(`You are interested in a candidate with the minimal age of ${answer}`);
    userProfile.min_age_interest = Number(answer);
    break;
    
  }
}

while(true) {
  let answer = prompt("What is the maximal age of your match candidate?");
  if (answer < 18) {
    console.log("The maximal age is 18, please choose again");
  } else if (answer < userProfile.min_age_interest) {
    console.log("The maximal age interest is lower than the minimal age, please choose again ");
  } else {
    console.log(`You are interested in a candidate with the maximal age of ${answer}`);
    userProfile.max_age_interest = Number(answer);
    break;
  }
}
console.log("hieronder vind je een handig overzicht van jouw ingevoerde data")
console.table(userProfile);


const ageMatches = mockData.filter(user => {
  const isBX = user.gender_interest.includes('B') || user.gender_interest.includes('X');

  const isUserBX = userProfile.gender_interest.includes('B') || userProfile.gender_interest.includes('X');

  const ageMatch = user.min_age_interest <= userProfile.age && 
                   user.max_age_interest >= userProfile.age &&
                   userProfile.min_age_interest <= user.age &&
                   userProfile.max_age_interest >= user.age &&
                   user.location === userProfile.location;

  const orientationMatch = user.gender_interest.includes(userProfile.gender) || isBX || isUserBX ||
                           (user.gender_interest.includes('M') && userProfile.max_age_interest >= user.age) ||
                           (user.gender_interest.includes('F') && userProfile.min_age_interest <= user.age);

  return ageMatch && orientationMatch;
});

console.log(`Hieronder staan alle matches die vallen binnen ${userProfile.min_age_interest} en ${userProfile.max_age_interest} jaar en leven in dezelfde ${userProfile.location} omgeving als jij.`)
console.log(`Je hebt ${ageMatches.length} matches!`)
console.log(ageMatches);
