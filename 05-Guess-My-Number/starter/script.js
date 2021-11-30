'use strict';
/*
document.querySelector('.number').textContent = '😃';

____Difference Between Math.trunc Vs. Math.floor_______
Math.Floor rounds down, Math.Ceiling rounds up, and Math.Truncate rounds towards zero. Thus, Math.Truncate is like Math.Floor for positive numbers, and like Math.Ceiling for negative numbers.
*/

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const ans = Number(document.querySelector('.guess').value);
  if (!ans) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displaymessage('⛔ No Number');
  } else if (ans === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number';
    displaymessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Refactoring the code
  else if (ans !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   ans > secreztNumber ? 'Too High' : 'Too low';
      displaymessage(ans > secretNumber ? 'Too High' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displaymessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // //When it is too high!
  // else if (ans > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When it is too low!
  // else if (ans < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//CodingChallenge_1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
