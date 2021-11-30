'use strict';
/*
function plane(flightNo, passenger = 1, price = 2000 / passenger) {
  const booking = {
    flightNo,
    passenger,
    price,
  };

  console.log(booking);
}

plane('L613', undefined, '10');

const laD = { koleman: 10, nowhen: 11 };

laD.koleman = laD.koleman + 11;

console.log(laD);

const flight = 'LH234'; //Primitive Value
const naing = {
  passengerName: 'NHWai',
  passport: 306670597154,
}; // Reference Value

const checkin = function (plane, passenger) {
  plane = '99H1';
  passenger.passengerName = `Mr.` + passenger.passengerName;

  if (passenger.passport === 306670597154) {
    alert(`Checked in`);
  } else {
    alert(`Wrong Passport`);
  }
};

checkin(flight, naing);
console.log(flight);
console.log(naing);

const newFun = function (passNo) {
  passNo.passport = Math.trunc(Math.random() * 10000000);
};
newFun(naing);
console.log(naing);
checkin(flight, naing);


//Functions Accepting CallBack Function

const oneword = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
console.log(oneword(`naing htet wai`));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // return first.toUpperCase();
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Functions
const transform = function (str, fn) {
  console.log(`${fn(str)}`);
  console.log(`Original String : ${str}`);
  console.log(`Name of Tranformed String : ${fn.name}`);
};

transform(`Kaja is the best in the world.`, upperFirstWord);
transform(`Kaja is the best in the world.`, oneword);

//JS uses callback all the time
const addCheck = function () {
  console.log('✅');
};

document.body.addEventListener('click', addCheck);


//Function Returning Function
const greet = function (gret) {
  return function (name) {
    console.log(`${gret} ${name}`);
  };
};

greet('Hola')('Miho');

const hi = hiword => hier => console.log(`${hiword} ${hier}`);
hi('Hooray')('Hojberg');


const mai = {
  airline: 'MAI',
  iataCode: 'MI',
  bookings: [],
  book: function (flightno, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightno}.`
    );
    this.bookings.push({ Flight: `${this.iataCode}${flightno}`, name });
  },
};

mai.book(213, 'Nag');
console.log(mai);

const airbg = {
  airline: 'AirBagan',
  iataCode: 'BG',
  bookings: [],
};

const aia = {
  airline: 'AirAsia',
  iataCode: 'AA',
  bookings: [],
};

const bookinfo = mai.book;
bookinfo.call(aia, 199, 'James Bond');
console.log(aia);

bookinfo.call(airbg, 199, 'James Joyce');
console.log(airbg);

//Apply Method
const flightData = [449, 'Norman Clay'];
bookinfo.apply(mai, flightData);

bookinfo.call(aia, ...flightData);

//Bind Method
//Bind Method returns a function

const bookAA = bookinfo.bind(aia);
const bookBG = bookinfo.bind(airbg);
bookAA(123, 'Noah');
bookBG(223, 'BVBoand');
const bookAA456 = bookinfo.bind(aia, 456, 'Crooked');
bookAA456();

mai.planes = 300;
mai.buyplanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
mai.buyplanes();
mai.buyplanes();
mai.buyplanes();
mai.buyplanes();

document
  .querySelector('.buy')
  .addEventListener('click', mai.buyplanes.bind(mai));

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 100));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(1000));
console.log(addVAT(100));
console.log(addVAT(500));

// const oneF = function (rate) {
//   return function (value) {
//     console.log(value * rate);
//   };
// };

const oneF = rate => value => console.log(value + value * rate);

const rateF = oneF(0.2);
rateF(600);
oneF(0.2)(1000);

///////////////////////////////////////
// Coding Challenge #1
*/

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const ans = Number(
    prompt(
      `${this.question} \n ${this.options.join('\n')}  \n (Write option number)`
    )
  );
  // ans >= 1 && ans <= 3
  //   ? this.answers[ans]++
  //   : alert(`Out of options. Try again!`);

  typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;

  this.displayResults();
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function () {
  let type = this.answers;
  console.log(type);
};


//IIFE (Immediately Invoked Function Expression)
(function () {
  console.log(`This is an IIFE function`);
  const aa2b = 23;
})();

(() => {
  console.log(`This is an IIFE function`);
  const bbre3 = 33;
})();

// console.log(aa2b);
// console.log(bbre3);

{
  const pri = `is private`;
  var npri = `is not private`;
}

console.log(npri);
// console.log(pri);



//Examples of Closure
let f;
const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
};

const j = function () {
  const b = 30;
  f = function () {
    console.log(b * 3);
  };
};

g();
f();

//Re-assigning f
j();
f();

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(
      `There are 3 groups, each with ${perGroup} passengers, and ${cargo}lbs cargo`
    );
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const cargo = 2000;
boardPassengers(150, 3);

*/
//Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// document
//   .querySelector('body')
//   .addEventListener('click', (header.style.color = 'blue'));
