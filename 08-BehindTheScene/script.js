'use strict';
/*
const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh ${firstName}, you're a millenial.`;
      var millenial = true;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);


const naing = {
  firstName: 'Naing',
  birthYear: 1997,
  calcAge: function () {
    // *But arrow functions are useful while using inside a method. In this case 'this' keyword works well.
    const millenial = () => {
      console.log(`${this.firstName} is not millenial!`);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    millenial();
    console.log(2021 - this.birthYear);
  },

  //Never use arrow function as a method. "This" keyword doesn't work in arrow functions if they are used as methods.
  arrow: () => {
    console.log(this.firstName);
  },
};

// console.log(naing.calcAge());
naing.calcAge();
naing.arrow();

const goodLook = (a, b) => {
  console.log(true);
  return a + b;
};
goodLook(8, 9);
*/

let age = 24;
let next2yrs = 26;
console.log(next2yrs, age);

const me = {
  firstName: 'naing',
  age: 24,
};
const friend = me;
friend.age = 27;
console.log(me);
console.log(friend);
