/*
let js = 'amazing';
console.log(40 + 30 - 20 + 50);

console.log(30);
console.log("Bob");

let FirstName = "Htet";

console.log(FirstName);
console.log(FirstName);
console.log(FirstName);

let country = "Myanmar";
let continent = "Asia";
let population = 50.6;

console.log(country);
console.log(continent);
console.log(population);


let javaScripit = true;
console.log(javaScripit);

console.log(typeof javaScripit);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "dd");
console.log(typeof jj);
console.log(typeof jj);
console.log(typeof null);

javaScripit = "Fun!";
console.log(javaScripit);
console.log(typeof javaScripit);


// Maths Operators
const now = 2021;
const myAge = now - 1997;
const dadAge = now - 1962;

console.log(dadAge / myAge, 17 ** 2);
// 17 *** 2 means 17 to the power 2 = 17 * 17

const firstName = "Naing ";
const lastName = "Htet Wai";
console.log(firstName + lastName);

// Assignment Operators
let x = 10 - 8; // x = 2
x += 1; // x = x + 1 = 3
x -= 2; // x = x - 2 = 1
x *= 8; // x = x * 8 = 8
x /= 4; // x = x / 4 = 2
x++; // x = x + 1 = 3
x--; // x = x - 1 = 2
x **= 3; // x = x to the power 3
console.log(x);

//Comparison Operators
console.log(myAge > dadAge); // >, <, >=, <=
console.log(myAge >= 21);

const legitToVote = myAge >= 18;

console.log(now - 1997 > now - 1962);


const now = 2021;
const myAge = now - 1997;
const dadAge = now - 1962;
const averageAge = (myAge + dadAge) / 2
console.log(myAge, dadAge, averageAge);

const country = "Myanmar";
const continent = "Asia";
let population = 50.6;
const isIsLand = false;

let language;
language = "Burmese";
console.log(isIsLand, population, country, language);
console.log(typeof isIsLand);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population > 33);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

// codingchallenge#1
// const wMarks = 78;
// const hMarks = 1.69;
// const wJohn = 92;
// const hJohn = 1.95;
const wMarks = 95;
const hMarks = 1.88;
const wJohn = 85;
const hJohn = 1.76;

const marksBMI = wMarks / hMarks ** 2;
const johnBMI = wJohn / hJohn ** 2;
const markHigherBMI = marksBMI > johnBMI;

console.log(marksBMI, johnBMI, markHigherBMI);

// Strings and Template literals
const fname = 'Naing';
const job = 'student';
const nowyear = 2021;
const birthyear = 1997;
const naing = "I'm " + fname + ", a " + (nowyear - birthyear) + " years old " + job + "!";
const newnaing = `I'm ${fname}, a ${nowyear - birthyear} years old ${job}!`;
console.log(naing);
console.log(newnaing);

console.log(`Just a regular string...`)

//multiline strings
console.log(`String with \n\
multiple \n\
lines`)

console.log(`String with
multiple
lines`)

//assignment for Strings and Template Literals
const country = "Myanmar";
const continent = "Asia";
const language = 'burmese';
let population = 50.6;
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// const age = 18;

// if (age >= 18) {
//     console.log("Full age to start driving liscience!");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Wait for another ${yearsLeft} years!`)
// }

// let birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//     century = "Born in 19 century";
// } else {
//     century = "Born in 20 century";
// }
// console.log(century);

//coding challenge 2
// const wMarks = 78;
// const hMarks = 1.69;
// const wJohn = 92;
// const hJohn = 1.95;
const wMarks = 95;
const hMarks = 1.88;
const wJohn = 85;
const hJohn = 1.76;

const marksBMI = wMarks / hMarks ** 2;
const johnBMI = wJohn / hJohn ** 2;

console.log(marksBMI, johnBMI);

if (johnBMI > marksBMI) {
    console.log("John's BMI is higher than Marks's BMI!")
} else {
    console.log("Marks' BMI is higher than John's BMI!")
}

if (johnBMI > marksBMI) {
    console.log(`John's BMI(${johnBMI}) is higher than Marks's BMI(${marksBMI})!`)
} else {
    console.log(`Marks' BMI(${marksBMI}) is higher than John's BMI(${johnBMI})!`)
}


//conversion (changed by manually)
const studyhrs = "7";
console.log(Number(studyhrs));
console.log(Number(studyhrs) + 1);
console.log(Number("subject"));
console.log(typeof NaN);

//coercion (changed automatically)
console.log('9' - '3' / 2);
let x = '3';
x--;
console.log(x ** 3);

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //'617'
console.log('19' - '13' + 17);// 23
console.log('123' < 57); //
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

let kk = Number('jj');
console.log(typeof kkdd);
if (kk) {
    console.log("it's defined")
} else {
    console.log("it's undefined!")
}

let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// console.log(numNeighbours);
console.log(typeof numNeighbours);
if (numNeighbours === 1) {
    console.log("Only 1 border!")
} else if (numNeighbours > 1) {
    console.log("More than 1 border")
} else {
    console.log("No Borders")
};
const speakE = true; //A
const lessthanfiftymill = true; //B
const anIsland = false; //C
console.log(speakE && !anIsland);
if (speakE && lessthanfiftymill && !anIsland) {
    console.log('You should live in Butan')
} else {
    console.log('Butan does not meet your criteria!')
};

//Data1
const game1D = 96;
const game2D = 108;
const game3D = 89;
const game1K = 88;
const game2K = 91;
const game3K = 110;
const avgscoreD = (game1D + game2D + game3D) / 3;
const avgscoreK = (game1K + game2K + game3K) / 3;
console.log(avgscoreD, avgscoreK);

// if (avgscoreD >= 100 && avgscoreD > avgscoreK) {
//     console.log('Dolphin Win')
// } else if (avgscoreD >= 100 && avgscoreK > avgscoreD) {
//     console.log('Koalas Wins')
// } else if (avgscoreD >= 100 && avgscoreK >= 100 && avgscoreD === avgscoreK) {
//     console.log('Draw')
// } else {
//     console.log('Avgscore of both team is less than 100')
// }


//Databonus1
// const game1D = 97;
// const game2D = 112;
// const game3D = 101;
// const game1K = 109;
// const game2K = 95;
// const game3K = 123;
// const avgscoreD = (game1D + game2D + game3D) / 3;
// const avgscoreK = (game1K + game2K + game3K) / 3;
// console.log(avgscoreD, avgscoreK);

// if (avgscoreD >= 100 && avgscoreD > avgscoreK) {
//     console.log('Dolphin Win')
// } else if (avgscoreD >= 100 && avgscoreK > avgscoreD) {
//     console.log('Koalas Wins')
// } else if (avgscoreD >= 100 && avgscoreK >= 100 && avgscoreD === avgscoreK) {
//     console.log('Draw')
// } else {
//     console.log('Avgscore of both team is less than 100')
// }


// Databonus2
// const game1D = 97;
// const game2D = 112;
// const game3D = 101;
// const game1K = 109;
// const game2K = 95;
// const game3K = 106;
// const avgscoreD = (game1D + game2D + game3D) / 3;
// const avgscoreK = (game1K + game2K + game3K) / 3;
// console.log(avgscoreD, avgscoreK);
// const absD = avgscoreD > 100;
// const absK = avgscoreK > 100;

// if (avgscoreD >= 100 && avgscoreD > avgscoreK) {
//     console.log('Dolphin Win')
// } else if (avgscoreD >= 100 && avgscoreK > avgscoreD) {
//     console.log('Koalas Wins')
// } else if (avgscoreD >= 100 && avgscoreK >= 100 && avgscoreD === avgscoreK) {
//     console.log('Draw')
// } else {
//     console.log('Avgscore of both team is less than 100')
// }

// const day = 'day';
// if (day === 'monday') {
//     console.log('Plan course structure and Go to coding meetup')
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos')
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples')
// } else if (day === 'friday') {
//     console.log('Record Videos')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend')
// } else {
//     console.log('Not a valid day')
// };

const lang = 'burmese';
switch (lang) {
    case ('chinese'):
    case ('mandarin'):
        console.log('MOST number of native speakers!');
        break;
    case ('spanish'):
        console.log('2nd place in number of native speakers');
        break;
    case ('english'):
        console.log('3rd place');
        break;
    case ('hindi'):
        console.log('Number4');
        break;
    case ('arabic'):
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}*/

// //The Conditional(Ternary) Operator
// const age = 55;
// // age >= 18 ? console.log('Legal age to drink 🍷') : console.log('Under age to drink 🍷');

// // const drink = age >= 18 ? 'Legal age to drink 🍷' : 'Under age to drink 🍷';
// // console.log(drink);

// let drink;
// if (age >= 18) {
//     drink = 'Drink wine 🍷'
// } else {
//     drink = 'Drink water 💦'
// };
// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);

// const population = 56;
// console.log(population > 33 ? "Portugal's population is above average" : "Portugal's population is under average")

const billV = 275;
// if (billV >= 50 && billV <= 300) {
//     console.log(billV * 0.15)
// } else {
//     console.log(billV * 0.2)
// };

// billV >= 50 && billV <= 300 ? console.log(billV * 0.15) : console.log(billV * 0.2);

const tip = billV >= 50 && billV <= 300 ? billV * 0.15 : billV * 0.2;
console.log(
  `The bill was ${billV}, the tip was ${tip}, and the total value ${
    tip + billV
  }.`
);
