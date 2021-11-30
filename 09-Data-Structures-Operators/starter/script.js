'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/
// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[2 + 3]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderPasta(ingre1, ingre2, ingre3) {
    console.log(
      `Here is your delicious Pasta with ${ingre1}, ${ingre2}, and ${ingre3}.`
    );
  },

  orderPizza: function (a, ...others) {
    console.log(a);
    // console.log(others);
    for (let i = 0; i < others.length; i++) console.log(others[i]);
  },
};

/*

// const arr = [2, 3, 4];
// const [a, , c] = arr;
// console.log(a, c);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//Using Destructing
// [second, first] = [first, second];
// console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

//Nested Destructuring
// const [e, , [f, d]] = [2, 4, [5, 6]];
// console.log(e, f, d);

//Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//SPREAD OPERATOR (Use when we need the elements of an array individually)
const arr = [7, 8, 9];
const newA = [1, 2, arr[0], arr[1], arr[2]];
console.log(newA);

const newEs6 = [1, 2, ...arr];
console.log(newEs6);
console.log(...newEs6);
console.log(1, 2, 7, 8, 9);

const newM = [...restaurant.mainMenu, 'Gelato'];
console.log(newM);
//(Note: Spread Operator is similar to destructuring arrays but it doesn't store the value into new variables)

//Shallow Copy Array
const newCopy = [...restaurant.mainMenu];
console.log(newCopy);

//Join Two Arrays
const menU = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menU);

//What are ITERABLES?
//They are arrays, strings, maps, sets. But Not Objects
const str = 'Naing';
const letter = [...str, '', '.'];
console.log(letter);

const pastaIngre = [
  // prompt("Let's make a delicious Pasta with ingredient1"),
  // prompt('ingredient2'),
  // prompt('ingredient3'),
];
// console.log(pastaIngre);
// restaurant.orderPasta(...pastaIngre);

//Objects (Spread Operator also works on Objects)
const newRestaurant = { founder: 'Someone', foundedIn: '1997', ...restaurant };
console.log(newRestaurant);

//Copy Objects
const copyRestaurant = { ...restaurant };
copyRestaurant.name = 'La La Land';
console.log(copyRestaurant.name);
console.log(restaurant.name);

//Rest Pattern & Parameters

//In Return Operator '...' is in the right side of the '=' while it is in the left in Spread Operator.
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum = sum + number[i];
  console.log(sum);
};

add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
restaurant.orderPizza(
  'mushroom',
  'pineapple',
  'grape',
  'blue cheese',
  'tomato'
);

//Note: Difference between Spread Operator & Return Operator is that Spread Operator seperates the values but Return Opera tor seperates the variables.
console.log('-----OR-----');
console.log(true || undefined);
console.log(false || null);
console.log(0 || null || undefined || 'Nobody' || 23);

const guest1 = restaurant.guest ? restaurant.guest : 0;
console.log(guest1);

const guest2 = restaurant.guest || 2;
console.log(guest2);

//Note : 'OR' operator is used to set default values.

console.log('------AND------');
console.log(false && true);
console.log(20 && 'Jp');
console.log(22 && 'G' && true && 0 && false && 'FB');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'tomato', 'garlic');
}

restaurant.orderPasta &&
  restaurant.orderPasta('watercress', 'potato', 'tomato');
//Note: 'AND' operator is used to execute in the second operand.


//Nullish: null and undefined (NOT 0 or "");
restaurant.guest = 0;
const guest1 = restaurant.guest ?? 10;
console.log(guest1);

//Coding Challenge : #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allplayers = [...players1, ...players2];
console.log(allplayers);

//4
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(draw);

//6
const printGoals = function (...name) {
  console.log(...name);
  console.log(`${name.length} goals were scored!`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 > team2 && console.log('Team2 is more likely to win');
team2 > team1 && console.log('Team1 is more likely to win');
console.log(false && true);


//The 'for of' Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log([...menu.entries()]);

for (const [no, item] of menu.entries()) {
  console.log(`${no + 1} : ${item}`);
}


\\\OPTIONAL CHAINING///
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//With Optional Chaining
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
console.log(restaurant.orderKebab?.(0, 1) ?? 'Method does not exit');

//Arrays
const users = [{ name: 'Naing', email: 'nayhtetwinee@gmail.com' }];
console.log(users[0]?.name ?? 'No User');


\\\Looping Objects : Looping Keys, Values, Entries ///

//Looping Keys
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days :`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Looping Values
const values = Object.values(openingHours);
console.log(values);

//Looping Entry
//Entry includes key and value.
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}


_____Coding Challenge #_______


Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///My Own Answers
//1
let str = `Goal`;
for (let i = 0; i < game.scored.length; i++) {
  str = `Goal ${Number([i]) + 1}: ${game.scored[i]}`;
  console.log(str);
}

//2
const gameOdd = Object.values(game.odds);
console.log(gameOdd);
function calcAvg() {
  let total = 0;
  for (let i = 0; i < gameOdd.length; i++) {
    total = total + gameOdd[i];
  }
  console.log(total);
  let avg = total / gameOdd.length;
  return avg;
}
console.log(calcAvg());

//3
const arr = [
  `victory ${Object.values(game)[0]}`,
  'draw',
  `victory ${Object.values(game)[1]}`,
];
// console.log(arr);
for (let i = 0; i < arr.length; i++)
  console.log(`Odd of ${arr[i]} is ${gameOdd[i]}. `);

///Typical Answers
//1
for (const [l, player] of game.scored.entries())
  console.log(`Goal ${l + 1}: ${player}`);

//2
const odds = Object.values(game.odds);
let average = 0;
for (const item of odds) average += item;
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd} `);
}
   

//   \\\Sets///

const arr = ['pizza', 'paparazi', 'alonso', 'pizza', 'alonso', 'frozan'];
console.log(arr);
const siuuu = new Set([
  'pizza',
  'paparazi',
  'alonso',
  'pizza',
  'alonso',
  'frozan',
]);
console.log(siuuu);

console.log(siuuu.size);
console.log(siuuu.has('alonso'));
console.log(siuuu.has('alono'));
siuuu.add('Ronaldo');
siuuu.add('Ronaldo');
siuuu.delete('alonso');
console.log(siuuu);
const uiss = new Set('Uwu');
console.log(uiss);
 
// \\\Maps:Fundamentals///
const rest = new Map();
rest.set('name', 'Zahaeeera');
rest.set(1, 'Cape Town, South Africa');
rest.set(2, 'Casablanca, Morroco');
console.log(rest);

rest
  .set('categories', ['Italy', 'Moroocaan', 'Hebrew', 'Arabia'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest.get('name'));
console.log(rest.get(2));
console.log(rest.get(true));

const time = 13;
const check = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(check);

//We can use Objects as map keys.
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

//Maps: Iteration
const quest = new Map([
  ['question', `What's the best programming language in the world?`],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🤴'],
  [false, 'Try again!'],
]);

console.log(quest);
const openH = Object.entries(restaurant.openingHours);
console.log(openH);
for (const [d, { open, close }] of openH)
  console.log(`On ${d}, we open at ${open} and close at ${close}`);

//Convert Object To Map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//Quizz App
console.log(quest.get('question'));
for (const [key, value] of quest) {
  if (typeof key === 'number') {
    console.log(`${key} : ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(quest.get(quest.get('correct') === answer));

//Converting Maps to Arrays
console.log(...quest);
console.log([...quest.entries()]);
console.log([...quest.keys()]);
console.log([...quest.values()]);

function add(...input) {
  let total = 0;
  for (const num of input) {
    total += num;
  }
  return total;
}

console.log(add(1, 2, 3));

function addUpto(x) {
  let total = 0;
  for (let i = 1; i <= x; i++) total += i;
  return total;
}
console.log(addUpto(10));





//Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const gg = [...gameEvents.keys()].pop();
console.log(gg);
console.log(gameEvents.size);

console.log(
  `An event happened, on average, every ${Math.round(
    gg / gameEvents.size
  )} minutes`
);

//4
for (const [key, values] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key} : ${values}`);
}


const airline = 'Bo Jose DeBurnham';
const plane = 'B770';

console.log(airline[0]);
console.log(plane[0]);
console.log(airline[2]);
console.log(plane[1]);
console.log('htethtet'[3]);
console.log(plane.lastIndexOf('7'));
console.log(airline.slice(4));
console.log(airline.slice(0, 2));
console.log(airline.slice(3, airline.indexOf('D')));
console.log(airline.slice(airline.lastIndexOf('B')));
console.log(airline.slice(airline.lastIndexOf('e') + 1));

console.log(airline.slice(-3));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  console.log(seat[seat.length - 1]);
  console.log(s[0] === 'B' || s[-1] === 'E' ? 'Middle Seat' : 'Side Seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('3E');
checkMiddleSeat('22A');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Capitalizing the passenger name
const passenger = 'kokoOOMg'; //Naing

console.log(
  passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLowerCase()
);

function correctName(pass) {
  console.log(pass.slice(0, 1).toUpperCase() + pass.slice(1).toLowerCase());
}

correctName('kOKo');

//Comparing Emails
const email = 'kyaukkaelay@gmail.com';
const loginEmail = ' KyaUkKaeLay@gmail.com \n';

//...lowering all characters
const loweringEmail = loginEmail.toLowerCase();
//....trimming the spaces
const correctingEmail = loweringEmail.trim();
console.log(correctingEmail);

const normalizingEmail = loginEmail.toLowerCase().trim();
console.log(normalizingEmail);

//Let's write a function to check email format
function checkEmail(input) {
  const normalizing = input.toLowerCase().trim();

  normalizing === email
    ? console.log(`Your email is true.`)
    : console.log(`Email is false. Try Again!`);
}
checkEmail(loginEmail);

//Replacing
const myanmar = '260,00 MMK';
const usd = myanmar.replace('MMK', '$');
//At this point 'myanmar.replace('MMK', '$')' returns a string. So we can call next replace method on that string.
const usdd = myanmar.replace('MMK', '$').replace(',', '.');
console.log(usd);
console.log(usdd);

const announcement = `All passengers are requested to go to door 32. To door 32.`;
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//Three Methods that return Boolean!!
const bino = `Naing/Hnin Htet Htet Wai`;
console.log(bino.includes('Htet'));
console.log(bino.startsWith('Naing'));
console.log(bino.startsWith('Hnin'));
console.log(bino.endsWith('Wai'));

bino.startsWith('Naing') && bino.endsWith('Wai')
  ? console.log(`They are soul mates!`)
  : console.log(`They aren't`);

//Practiscing
const checkBags = function (items) {
  const itlist = items.toLowerCase();
  itlist.includes('knife') || itlist.includes('gun')
    ? console.log(`You are not allowed on board`)
    : console.log(`You can go on board`);
};

checkBags(`I have a laptop, some food and A pocket Knife`);
checkBags(`Socks and camera`);
checkBags(`Got some soda and a gun for protection`);

const profile = 'Naing Htet Wai is a junior software developer';

console.log(profile.split(' '));
console.log('Naing Htet Wai'.split(' '));
const [firstName, middleName, lastName] = 'Naing Htet Wai'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join('_');
console.log(newName);

const passName = 'naing htet wai';

function correctingName(nam) {
  const namspl = nam.split(' ');
  const correction = [];

  for (const n of namspl) {
    //   correction.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    correction.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(correction.join(' '));
}

correctingName(passName);
correctingName('hnin hin lay nae yay myin lay');

//Padding
console.log('credit card'.padStart(20, '+'));
console.log('credit card'.padStart(15, '+').padEnd(20, '+'));

function maskingcreditcardNo(no) {
  // const str = String(no);
  const str = no + '';
  console.log(str.slice(-4).padStart(str.length, '*'));
}

maskingcreditcardNo(3256521489);

//Repeat
console.log('Naing ngan yay '.repeat(5));

function flightDelay(n) {
  console.log(
    `Flights delay due to bad weather. ${n} flights in line to depart.${'✈'.repeat(
      n
    )}`
  );
}

flightDelay(3);
 */

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


// function caseCorrect(input) {
//   const chg = input.toLowerCase().split('_');
//   const output = [];
//   for (const item of chg) {
//     output.push(
//       item !== chg[0] ? item.replace(item[0], item[0].toUpperCase()) : item
//     );
//   }
//   return output.join('');
//   // console.log(chg[0] + chg[1].replace(chg[1][0], chg[1][0].toUpperCase()));
// }

// const btn = document.querySelector('button');
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const code = str => str.slice(0, 3).toUpperCase();

const flight = flights.split('+');
for (const item of flight) {
  // console.log(item.split(';').slice(' '));
  const [fly, from, to, time] = item.split(';').slice(' ');
  const output = `${fly.startsWith('_Delayed') ? '⛔' : ''}${fly.replaceAll(
    '_',
    ' '
  )} from ${code(from)} to ${code(to)} (${time.replace(':', 'h')})`.padStart(
    45
  );
  console.log(output);
}
