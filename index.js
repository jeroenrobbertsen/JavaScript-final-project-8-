'use strict';

const mockData = require('./mockData.js').data;

// console.log("Welcome to the WincWinc dating app")

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
  if (answer === "city" || answer === "rural") {
    console.log(`You live in a ${answer} area`); break;
  } else {console.log(`Please choose city or rural`);
  }
    userProfile.location = answer;
  }


while(true) {
  let answer = prompt("What is the minimal age of your match candidate?");
  if (answer <= 18) {
    console.log("The minimal age is 18, please choose again");
  } else {
    console.log(`You are interested in a candidate with the minimal age of ${answer}`);
    userProfile.min_age_interest = Number(answer);
    break;
    
  }
}

while(true) {
  let answer = prompt("What is the maximal age of your match candidate?");
  if (answer <= 18) {
    console.log("The maximal age is 18, please choose again");
  } else if (answer < userProfile.min_age_interest) {
    console.log("The maximal age interest is lower than the minimal age, please choose again ");
  } else {
    console.log(`You are interested in a candidate with the maximal age of ${answer}`);
    userProfile.max_age_interest = Number(answer);
    break;
  }
}

console.log(userProfile);


// Filter alle gebruikers die voldoen aan de leeftijdsvereisten van de huidige gebruiker
const ageMatches = mockData.filter(user => 
  user.min_age_interest <= userProfile.age && 
  user.max_age_interest >= userProfile.age &&
  userProfile.min_age_interest <= user.age &&
  userProfile.max_age_interest >= user.age);

// Log de gevonden matches in de console
console.log(ageMatches);


// Filter alle gebruikers waarvoor de leeftijd van de huidige gebruiker valt binnen hun min_age_interest en max_age_interest
const ageRangeMatches = mockData.filter(user =>
  userProfile.age >= user.min_age_interest && userProfile.age <= user.max_age_interest);

// Maak een array met alleen de voornamen van de matches
const matchNames = ageRangeMatches.map(match => match.first_name);

// Maak er een zin van
const matchMessage = `Jouw leeftijd valt binnen de leeftijdscategorie van ${matchNames.join(', ')}!`;

// Log de zin in de console
console.log(matchMessage);

const matchCount = ageRangeMatches.length;

// Log het aantal matches in de console
console.log(`Je hebt ${matchCount} matches!`);

const genderMatches = ageRangeMatches.filter(user => user.gender === userProfile.gender_interest);
console.log(`Je hebt ${genderMatches.length} matches van het gewenste geslacht!`);
genderMatches.forEach(match => {
  console.log(`Je hebt een match met ${match.first_name}!`);
});

const sameGenderMatches = genderMatches.filter(match => match.gender_interest === userProfile.gender);
console.log(`Aantal matches met dezelfde gender interesse is: ${sameGenderMatches.length}`);
console.log(`Voornamen van matches met dezelfde gender interesse: ${sameGenderMatches.map(match => match.first_name).join(", ")}`);

const sameLocationMatches = sameGenderMatches.filter(match => match.location === userProfile.location);
console.log(`Aantal matches met dezelfde locatie is: ${sameLocationMatches.length}`);
console.log(`Voornamen van de matches met dezelfde locatie: ${sameLocationMatches.map(match => match.first_name).join(", ")}`);













