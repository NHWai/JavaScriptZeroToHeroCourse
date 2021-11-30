'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interests = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interests}€`;
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
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
}

//Event Handlers

let currentAccount;

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

    //Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    //UpdateUI
    updateUI(currentAccount);
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

    //UpdateUI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add Movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);

    //CLearing Input Value
    inputLoanAmount.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(movements, !sorted);
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
*/

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
