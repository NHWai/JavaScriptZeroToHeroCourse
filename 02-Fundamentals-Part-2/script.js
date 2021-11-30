"use strict";
/*
function logger() {
  console.log("My name is NHWai.");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
const appleOrange = fruitProcessor(3, 3);
console.log(appleOrange);
console.log(fruitProcessor(2, 3));

function describeCountry(country, population, capitalCity) {
  const line = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return line;
}

console.log(describeCountry("Myanmar", 56, "Yangon"));
console.log(describeCountry("Butan", 1, "Butain"));
console.log(describeCountry("Japan", 85, "Tokyo"));


function declaration
const Age1 = calcAge1(1997);
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

//fucntion expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const Age2 = calcAge2(1997);

console.log(Age1, Age2);

Assignment 2
const x = 56;
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populationPercentage1 = percentageOfWorld1(x);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const populationPercantage2 = percentageOfWorld2(x);

console.log(populationPercentage1, populationPercantage2);

Arrow Funtions
const calcAge3 = (birthYear) => 2021 - birthYear;
const Age3 = calcAge3(1997);
console.log(Age3);

const yearsUntilrRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}.`;
};
console.log(yearsUntilrRetirement(1997, "NHWai"));

// Assignment for Arrow Function
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));


function fruitPieces(fruit) {
  return fruit * 4;
}

function foodProcessor(apple, orange) {
  const applePieces = fruitPieces(apple);
  const orangePieces = fruitPieces(orange);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

const fruitPieces = function (fruit) {
  return fruit * 4;
};

const foodProcessor = function (apple, orange) {
  const applePieces = fruitPieces(apple);
  const orangePieces = fruitPieces(orange);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(foodProcessor(2, 3));

Assignment

const percentageOfWorld = function (percentage) {
  return (percentage / 7900) * 100;
};

const describePopulation = function (country, population) {
  const popPer = percentageOfWorld(population);
  return `${country} has ${population} million people, which is about ${popPer}% of the world.`;
};
const country = "India";
const population = 1336;

console.log(describePopulation(country, population));


const calcAge = function (year) {
  return 2021 - year;
};

const yearsUntilrRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilrRetirement(1997, "NHWai"));

const ageCalc = function (year) {
  return 2021 - year;
};

function calcAge(birthYear, firstName) {
  const age = ageCalc(birthYear);
  const retirement = 60 - age;
  // return `${firstName} is ${age} years old`;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} already retired.`);
    return -1;
  }
}

// console.log(calcAge(1997, "NHWai"));
console.log(calcAge(1960, "Dad"));

const ageCalc = function (year) {
  return 2021 - year;
};

function calcAge(birthYear, firstName) {
  const age = ageCalc(birthYear);
  // const retirement = 60 - age;
  // return `${firstName} is ${age} years old`;
  if (60 - age > 0) {
    // console.log(`${firstName} retires in ${retirement} years`);
    return `${firstName} retires in ${60 - age} years.`;
  } else {
    // console.log(`${firstName} already retired.`);
    return `${firstName} already retired.`;
  }
}

// console.log(calcAge(1997, "NHWai"));
console.log(calcAge(1997, "Naing"));


const friends = ["kyw kyw", "nyi nyi", "ag ag", "htet htet"];
console.log(friends);

const y = new Array(1991, 1984, 1997, 2020);
console.log(y);

// to retrieve elements from array
// Retrieve first element
console.log(friends[0]);

// Retrieve numbers of elements in an array
console.log(friends.length);

// Retrieve the last element in the array
console.log(friends[friends.length - 1]);

// To exchange the content of the array
friends[2] = "ag thein";
console.log(friends);

const firstName = "Naing";
const naing = [firstName, "Htet", "Wai", 2021 - 1997, "Student", friends];
console.log(naing);
console.log(naing.length);

// Exercise
const calcAge = (birthYear) => 2021 - birthYear;

const years = [1997, 1962, 1969, 2001];
console.log(years);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
console.log(age1, age2, age3, age4);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];

console.log(ages);

// Basic Array Operations
// To add an element at the end of the array
friends.push("ko ko");
console.log(friends);

// To add an element at the beginning of the array
friends.unshift("mg mg");
console.log(friends);

// To substract the first element of the array
friends.shift();
console.log(friends);

// To substract the last element of the array
friends.pop();
console.log(friends);

console.log(friends.indexOf("htet htet"));
// friends.includes("htet htet");
console.log(friends.includes("htet htet"));

if (friends.includes("htet htet")) {
  console.log(`Htet Htet is in my emergency contact`);
}


// Assignment for Introduction to Arrays

const populationArray = [1441, 56, 1368, 220];
const population = populationArray;
console.log(population);

const checked = population.length === 4;
console.log(checked);

const percentageOfWorld1 = (population) => (population / 7900) * 100;

const percentArray = [
  percentageOfWorld1(populationArray[0]),
  percentageOfWorld1(populationArray[1]),
  percentageOfWorld1(populationArray[2]),
  percentageOfWorld1(populationArray[3]),
];
console.log(percentArray);

// Assignment for Basic Array Operations (Methods)
const neighArray = ["India", "China", "Thailand"];
const neighbours = neighArray;
console.log(neighbours);

neighArray.push("Utopia");
console.log(neighArray);

neighArray.pop();
console.log(neighArray);

if (neighArray.includes("Germany")) {
  console.log(`An European Country`);
} else {
  console.log(`Probably not a central European country`);
}

neighArray[neighArray.indexOf("China")] = "Indo";
console.log(neighArray);


// Object
const friends = ["Kyw Kyw", "Nyi Nyi", "Ag Ag"];

const naing = {
  firstName: "Naing",
  lastName: "Wai",
  age: 2021 - 1997,
  job: "student",
  friends: ["Kyw Kyw", "Nyi Nyi", "Ag Ag"],
};

console.log(naing);

//To retrive element from object
// Dot Notation
console.log(naing.firstName);

//Bracket Notation
console.log(naing["firstName"]);

const namekey = "Name";

console.log(naing["first" + namekey], naing["last" + namekey]);

const interestedIn = prompt(
  `What do you want to know about NHWai? Choose from firstName, lastName, age, job and friends.`
);

// if (naing[interestedIn]) {
//   console.log(naing[interestedIn]);
// } else {
//   console.log(`Wrong Request!`);
// }

// Adding elements to Object
naing.location = "Myanmar";
naing["nativetown"] = "Yangon";
console.log(naing);

//Challenge
//Naing has 3 friends, and his best friend is Kyw Kyw

console.log(
  `${naing.firstName} has ${naing.friends.length} friends, and his best friend is ${naing.friends[0]}`
);


const naing = {
  firstName: "Naing",
  lastName: "Wai",
  birthYear: 1997,
  job: "student",
  friends: ["Kyw Kyw", "Nyi Nyi", "Ag Ag"],
  eligibletoVote: false,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  // calcAge: function () {
  //   return this.age;
  // },

  calcAge: function () {
    this.dd = 2021 - this.birthYear;
    return this.dd;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${this.eligibletoVote ? "is" : "is not"} eligible to vote.`;
  },
};

console.log(naing.calcAge());
// console.log(naing["calcAge"]());
console.log(naing.dd);

//Challenge__ "Naing is a 24-year old student, and he has is eligible to vote"

console.log(naing.getSummary());


//Iteration: The for Loop
//for loop keeps running while condition is True
// for (let rep = 1; rep <= 20; rep++) {
//   console.log(`Lifting weighs repititon ${rep} 🏋️‍♂️.`);
// }

const naing = [
  "Naing",
  "Wai",
  2021 - 1997,
  "student",
  ["kyw kyw", "nyi nyi", "ag ag"],
  true,
];

const types = [];

for (let i = 0; i < naing.length; i++) {
  //Reading from naing array
  console.log(naing[i], typeof naing[i]);

  //Filling types of array
  //Method1
  // types[i] = typeof naing[i];

  //Method2
  types.push(typeof naing[i]);
}

console.log(types);

const years = [1997, 1962, 1969, 2001];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2021 - years[i];
}

console.log(ages);

//continue and break
console.log("---Only Strings---");
for (let i = 0; i < naing.length; i++) {
  if (typeof naing[i] !== "string") continue;
  console.log(naing[i], typeof naing[i]);
}

console.log("---Breaking With Number---");
for (let i = 0; i < naing.length; i++) {
  if (typeof naing[i] === "number") break;
  console.log(naing[i], typeof naing[i]);
}


//Looping Backwards and Loop in Looping
const naing = [
  "Naing",
  "Wai",
  2021 - 1997,
  "student",
  ["kyw kyw", "nyi nyi", "ag ag"],
];

for (let i = naing.length - 1; i >= 0; i--) {
  console.log(i, naing[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}:Repetition ${rep}`);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
//   rep++;
// }

//This will give value between 1 to Zero
// let dice = Math.random();
// console.log(dice);

let dic = Math.trunc(1.9);
// console.log(dic);

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a 6`);
  if (dice === 6) {
    console.log(`Loop is about to end`);
  }
}
