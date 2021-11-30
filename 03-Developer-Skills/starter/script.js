// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const age = '70';
// const calcBirthYear = age => 2021 - age;
// const b = 233;
// console.log(calcBirthYear(age), b);
// console.log();

// Problem_1
// We work for a company building a smart home thermometer. Our most recent task is this : "Given an array of tempertures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem
//What is temp amplitude? Ans: temp amplitude_substitution the lowest temp from highest temp
//How to find a max temp?
//How to find a min temp?
//How to ignore the error?

//Divide the problem
// max temp/ min temp/ ignore the error/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const calcAmplitude = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] > max) {
//       max = temp[i];
//     }
//     if (temp[i] < min) {
//       min = temp[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcAmplitude(temperatures);
// console.log(amplitude);

//Problem: There will be two temp arrays for the case.

// const t1 = [0, 1, -3, 101];
// const t2 = [33, -44, 78, 100, 'error'];

// const calcAmplitude = function (t1, t2) {
//   const t3 = t1.concat(t2);

//   let max = t3[0];
//   let min = t3[0];
//   for (let i = 0; i < t3.length; i++) {
//     if (t3[i] > max) {
//       max = t3[i];
//     }
//     if (t3[i] < min) {
//       min = t3[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcAmplitude(t1, t2);
// console.log(amplitude);

//Reverse an array
// const a = [3, 2, 1, 'naing', true];

// const b = a.reverse();

// console.log(b);

// const a = Number(prompt(`Temp Degree in Celsi`));

// const kelvinTemp = a + 273;
// console.log(kelvinTemp);

// const calcTemp = function () {
//   const measurement = {
//     type: 'celsi',
//     value: Number(prompt(`Degree of temperature in celsi`)),
//   };

//   // console.log(measurement);
//   // console.table(measurement);

//   const kelvinTemp = measurement.value + 273;
//   return kelvinTemp;
// };

// console.log(calcTemp());

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "...17°C in 1 days ...21°C in 2 days ... 23°C in 3 days..."

Create a function "printForecast" which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 0, 4]
*/

//Understand the problem: Make a function & put the array in it & log the console with the given message.

//Break it up into sub-problems:
//1) make a function
//2) change array to string
//3) find the index of array

//Ans:
// const arr = [12, 5, -5, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`...${arr[i]}°C in ${i + 1}days`);
// }

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let a = '';
  for (let i = 0; i < arr.length; i++) {
    a = a + `...${arr[i]}°C in ${i + 1}days `;
  }
  console.log(a + '...');
};

printForecast(data2);
