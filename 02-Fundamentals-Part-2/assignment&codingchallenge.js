"use strict";

/*
// const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;

//Data1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// console.log(avgDolphins, avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win(${avgDolphins} vs ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `No team wins!`;
//   }
// };

// console.log(checkWinner(avgDolphins, avgKoalas));

//Data2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(avgDolphins, avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win(${avgDolphins} vs ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `No team wins!`;
//   }
// };

// console.log(checkWinner(avgDolphins, avgKoalas));

// Coding Challenge #2, Part 2

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//Introduction to Objects
const myCountry = {
  country: "Myanmar",
  capital: "Yangon",
  language: "burmese",
  population: 56,
  neighbours: ["Thailand, China, India"],
};

console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbouring countries and a capiatl called ${myCountry.capital}.`
);

console.log(
  `${myCountry.country} has ${myCountry.population + 2} million ${
    myCountry.language
  }-speaking people, 3 neighbouring countries and a capiatl called ${
    myCountry.capital
  }.`
);

console.log(
  `${myCountry.country} has ${myCountry["population"] - 2} million ${
    myCountry.language
  }-speaking people, 3 neighbouring countries and a capiatl called ${
    myCountry.capital
  }.`
);


const myCountry = {
  country: "Myanmar",
  capital: "Yangon",
  language: "burmese",
  population: 56,
  neighbours: ["Thailand, China, India"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, 3 neighbouring countries and a capiatl called ${this.capital}.`;
  },

  isIsland: true,
  checkIsland: "isIsland"
    ? "no neighrboring countries"
    : "neighboring countries",
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland);


//Coding Challenge 3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();
console.log(john.bmi, mark.bmi);

//Using if/else statement
if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi}!`);
} else if (john.bmi > mark.bmi) {
  console.log(
    `John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})!`
  );
}

//Using Ternary Operator
const higher =
  mark.bmi > john.bmi
    ? `Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi}!`
    : `John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})!`;

console.log(higher);


//Iteration: The for Loop
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

Looping Arrays, Breaking and Continuing
const population = [1990, 1386, 56, 25];
const percentages2 = [];

//Method---1
for (let i = 0; i < population.length; i++) {
  percentages2[i] = (population[i] / 7900) * 100;
}

Method---2
const percentageOfWorld1 = function (pop) {
  return (pop / 7900) * 100;
};

for (let i = 0; i < population.length; i++) {
  percentages2[i] = percentageOfWorld1(population[i]);
}

console.log(percentages2);


const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);



//The while Loop
const population = [1990, 1386, 56, 25];
const percentages3 = [];

const percentageOfWorld1 = function (pop) {
  return (pop / 7900) * 100;
};

let i = 0;
while (i < population.length) {
  percentages3[i] = percentageOfWorld1(population[i]);
  i++;
}
console.log(percentages3);

//Coding Challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

//Method---1
for (let i = 0; i < bills.length; i++) {
  if (bills[i] >= 50 && bills[i] <= 300) {
    tips[i] = bills[i] * 0.15;
  } else {
    tips[i] = bills[i] * 0.2;
  }
  totals[i] = bills[i] + tips[i];
}

//Method---2
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
*/
