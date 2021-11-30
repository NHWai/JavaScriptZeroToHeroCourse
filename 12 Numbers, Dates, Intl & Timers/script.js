'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2021-11-01T14:43:26.374Z',
    '2021-11-05T18:49:59.371Z',
    '2021-11-08T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Functions

const formatMovementDate = (date, locale) => {
  const calcDays = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (24 * 60 * 60 * 1000)));

  const daysPassed = calcDays(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const year = date.getFullYear();
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // return ` ${day}/ ${month}/ ${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatted = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const currFormat = formatted(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type} 
  </div>   <div class="movements__date">${displayDate}</div> 
    <div class="movements__value">${currFormat}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = formatted(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatted(incomes, acc.locale, acc.currency);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatted(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  );

  const interests = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = formatted(interests, acc.locale, acc.currency);
};

const createUsername = function (accs) {
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};
createUsername(accounts);

function updateUI(acc) {
  //Display movements
  displayMovements(acc);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
}

const startLogOutTimer = function () {
  //Set time to 5 minutes
  let time = 120;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
      inputLoginUsername.focus();
    }

    //Decrease 1s
    time--;
  };

  //Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//Event Handlers

let currentAccount, timer;

//Faking Login as account1
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

inputLoginUsername.focus();

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    //Create Current Date and Time
    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      // weekday: 'short',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);
    // const now = new Date();
    // console.log(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minute = `${now.getMinutes()}`.padStart(2, 0);
    // const second = now.getSeconds();

    // labelDate.textContent = ` ${day}/ ${month}/ ${year}, ${hour}:${minute}`;

    //Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    //UpdateUI
    updateUI(currentAccount);

    //Log out Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAcc &&
    receiverAcc.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Adding TransferDates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //UpdateUI
    updateUI(currentAccount);

    //Restarting Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add Movement
    currentAccount.movements.push(amount);

    //Adding LoanDates
    currentAccount.movementsDates.push(new Date().toISOString());

    //Update UI
    updateUI(currentAccount);

    //CLearing Input Value
    inputLoanAmount.value = '';

    //Restarting Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete Account
    accounts.splice(index, 1);

    //Logout Acc
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Coding Challenge #1
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const correctedJulia = dogsJulia.slice(1, -2);
  const total = [...correctedJulia, ...dogsKate];
  console.log(total);

  total.forEach(function (dog, i) {
    dog < 3
      ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
      : console.log(
          `Dog number ${i + 1} is an adult, and is ${dog} years old.`
        );
  });
};
const Juliasdata = [3, 5, 2, 12, 7];
const Katedata = [4, 1, 15, 8, 3];
const Juliasdata1 = [9, 16, 6, 8, 3];
const Katedata1 = [10, 5, 6, 1, 4];
checkDogs(Juliasdata, Katedata);
console.log(`testdata2`);
checkDogs(Juliasdata1, Katedata1);


const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);
*/

const chgus = function (us) {
  us.toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
};

// console.log(accounts);

// console.log(movements);

//Filter Method
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
// console.log(deposits, withdrawals);

//Reduce Method -> SNOWBALL Method
// array.reduce(callback function, starting value)
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   // console.log(`Iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 100);
// console.log(balance);

const balance = movements.reduce((acc, curr) => acc + curr, 0);
// console.log(balance);

let totalbl = 0;
for (const mov of movements) {
  totalbl += mov;
}
// console.log(totalbl);

//Maximum
const maxim = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
// console.log(maxim);
/*
//Coding Challenge #2
const calcAverageHumanAge = function (ages) {
  // const humanage = ages.map(agem => (agem <= 2 ? 2 * agem : 16 + agem * 4));
  // console.log(humanage);
  // const ageEx = humanage.filter(agef => agef >= 18);
  // console.log(ageEx);
  // const avg = ageEx.reduce(function (acc, age, i, arr) {
  //   return acc + age / ageEx.length;
  // }, 0);
  // const avg = ageEx.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  // console.log(avg);

  const humanage = ages
    .map(agem => (agem <= 2 ? 2 * agem : 16 + agem * 4))
    .filter(agef => agef >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanage;
};

const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(test1));
console.log(calcAverageHumanAge(test2));
*/
/*
// console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Sarah Smith');

const accountfor = function (accs) {
  for (const acc of accs) {
    if (acc.owner === 'Sarah Smith') return acc;
  }
};
// console.log(account);
// console.log(accountfor(accounts));

//______SOME And EVERY Method________

console.log(movements);

//Test Equality
console.log(movements.includes(-650));

const deposit = mov => mov > 0;
//Test Condition (Some Method)
console.log(movements.some(mov => mov === -650));
console.log(movements.some(mov => mov === -650));
console.log(movements.some(deposit));
//Test Condition (Every Method)
console.log(movements.every(deposit));
console.log(account4.movements.every(deposit));


//___Flat____(solving Nested Array)
const arr = [[1, 2], 3, 4, [5, 6], 7];
console.log(arr.flat());

const arr2 = [[1, 2], [4, [5, 6], 7], 8];
console.log(arr2.flat(2));

console.log(accounts);

//Using Flat
const totalBal = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalBal);

//Using flatMap

const totalBal2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalBal2);


const namE = ['John', 'Bg', 'KoKyaw', 'KoAg'];

console.log(namE.sort());

const nuM = [4, 9, 5, -9, 3, 0, 2, -7, -15, -55];
const nO = [4, 9, 5, -9, 3, 0, 2, -7, -15, -55];

console.log(nuM.sort());

// nuM.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
nuM.sort((a, b) => a - b);
console.log(nuM);

// nO.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
nO.sort((a, b) => b - a);
console.log(nO);


const arr = [1, 2, 3, 4, 5];
const x = new Array(6, 7, 8, 9, 10);
console.log(arr);
console.log(x);

const y = new Array(5);
console.log(y);
y.fill(12, 1, 2);
y.fill(11, 0, 1);
y.fill(15, 4);
y.fill(14, 3, 4);
console.log(y);

//Array.from
console.log(Array.from({ length: 5 }, () => 3));
const z = Array.from({ length: 5 }, (curr, idx) => idx + 1);
console.log(z);
const dice = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(dice);

btnTransfer.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    e => +e.textContent.replace('€', '')
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
    e => +e.textContent.replace('€', '')
  );
  console.log(movementsUI2);
});

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, cur) =>
    // (cur >= 1000 ? sum + 1 : sum)
    {
      if (cur >= 1000) {
        sum = sum + 1;
      }
      return sum;
    }, 0);

console.log(numDeposit1000);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposits = sum.deposits + cur) : (sum.withdrawals += cur);
      sum[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
      return sum;
    },

    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

const convertTitleCase = function (str) {
  const capitalize = st => st[0].toUpperCase() + st.slice(1);
  const notUpper = ['and', 'is', 'but', 'a', 'an', 'and'];
  const word = str
    .toLowerCase()
    .split(' ')
    .map(wor => (notUpper.includes(wor) ? wor : capitalize(wor)))
    .join(' ');
  return capitalize(word);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a nice title but not too long'));
console.log(
  convertTitleCase('and here is another LONG title which is extremely long')
);


//Coding Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1)
dogs.map(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2)
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    dog.curFood > dog.recommendedFood
      ? console.log(
          `${dog.owners[0]}'s dog eats larger than the recommended portion `
        )
      : dog.curFood < dog.recommendedFood
      ? console.log(
          `${dog.owners[0]}'s dog eats lower than the recommended portion `
        )
      : console.log(`${dog.owners[0]}'s dog eats the recommended portion `);
  }
});

//3)
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4)
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much. `);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eat too little. `);

//5)
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6
const checkEatingOkay = dog =>
  dog.curFood >= 0.9 * dog.recommendedFood &&
  dog.curFood <= 1.1 * dog.recommendedFood;
console.log(dogs.some(checkEatingOkay));

//7
const dogsOkayAmountFood = dogs.filter(checkEatingOkay);
console.log(dogsOkayAmountFood);

//8
const doggs = dogs.slice();
doggs.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(doggs);


const randomInt = (min, max) => Math.trunc(Math.random() * max) + min;
// console.log(randomInt(1, 6));
const randdd = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randdd(0, 6));


const isEven = num => num % 2 === 0;
// console.log(isEven(1978));

labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    //Every 2nd element
    //0,2,4,6
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }

    //Every 3rd element
    //0,3,6,9
    if (i % 3 === 0) {
      row.style.backgroundColor = 'steelblue';
    }
  });
});

// i % n -> for every nth time

//Creating Dates
const now = new Date();
console.log(now);
console.log(new Date('July 24,1969'));
console.log(account1);
console.log(new Date(1997, 10, 1, 6, 30, 0));
console.log(new Date(account1.movementsDates[0]));

//Working with Dates
const future = new Date(2021, 10, 1, 3, 30, 60);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(1659313800000));
console.log(Date.now());
console.log(new Date());


//Operation with dates
const future = new Date(2024, 11, 25);
const now = new Date(2021, 10, 9);
console.log((future - now) / (24 * 60 * 60 * 1000));
const calcDays = (date1, date2) =>
  Math.abs((date2 - date1) / (24 * 60 * 60 * 1000));
const ng = new Date(1997, 10, 1);
const hh = new Date(1997, 6, 26);
console.log(calcDays(ng, hh));
const tt = +ng + (365.25 * 3 + 92 + 22) * 24 * 60 * 60 * 1000;
console.log(new Date(tt));
console.log(ng);


const num = 382912363.88;
const option = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
};

console.log('en-US: ', new Intl.NumberFormat('en-US', option).format(num));
console.log('sr-BA: ', new Intl.NumberFormat('sr-BA', option).format(num));


//setTimeout
const ing = ['olive', 'melon'];

const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Your pizza with ${ing1} and ${ing2} is ready 🍕.`),
  3000,
  ...ing
);
console.log('Waiting');

if (ing.includes('melon')) clearTimeout(pizzaTimer);

//setInterval
setInterval(() => {
  const now = new Date();
  // console.log(
  //   `${new Intl.DateTimeFormat('en-US', {
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     second: 'numeric',
  //   }).format(now)}`
  // );
}, 1000);
*/
const randomInt = (min, max) => Math.trunc(Math.random() * max) + min;
// console.log(randomInt(1, 6));
const randdd = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randdd(0, 6));

// const ran = Math.random();

// console.log(ran);
// console.log(ran * 1);
const randdd2 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(randdd2(0, 4));

const test = [];
for (let x = 0; x <= 7; x++) {
  test.push(randdd2(0, 4));
}

console.log(test);
