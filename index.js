'use strict';

const mockData = require('./mockData.js').data;

console.log("Welcome to the WincWinc dating app")

const userProfile = {
  first_name: "",
  last_name: "",
  age: "",
  gender: "",
  gender_interest: "",
  location: "",
  min_age_interest: "",
  max_age_interest: "",
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
  } else {
    console.log(`Your age is ${answer}`);
    userProfile.age = Number(answer);
    break;
  }
}

while (true) {
  let answer = prompt("What is your gender; M, F or X?");
  if (answer === "F") {
    console.log("Your gender is female");
    userProfile.gender = answer;
    break;
  } else if (answer === "M") {
    console.log("Your gender is Male");
    userProfile.gender = answer;
    break;
  } else if (answer === "X") {
    console.log("Your are a transgender");
    userProfile.gender = answer;
    break;
  } else {
    console.log("Please choose between M, F or X"); answer = prompt("What is your gender?");
    userProfile.gender = answer;
    break;
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
    console.log("Please choose between M, F, X or B"); answer = prompt("What is your gender?");
    userProfile.gender = answer;
    break;
  }
}

while(true) {
  let answer = prompt("Where are you located; city or rural?");
  if (answer === "" || answer === null) {
    console.log("Please choose city or rural");
  } else {
    console.log(`Your live in a ${answer} area`);
    userProfile.location = answer;
    break;
  }
}

while(true) {
  let answer = prompt("What is the minimal age of your match candidate?");
  if (answer <= 18) {
    console.log("The minimal age is 18, please choose again");
  } else {
    console.log(`You are interested in a candidate with the minimal age of ${answer}`);
    userProfile.min_age_interest = Number(answer);
    break;jeroen
    
  }
}

while(true) {
  let answer = prompt("What is the maximal age of your match candidate?");
  if (answer <= 18) {
    console.log("The maximal age is 18, please choose again");
  } else {
    console.log(`You are interested in a candidate with the maximal age of ${answer}`);
    userProfile.max_age_interest = Number(answer);
    break;
  }
}

console.log(userProfile);






