'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentscore, activePlayer, playing, scores;

//STARTING CONDITIONS
const innit = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  playing = true;
  scores = [0, 0];
  currentscore = 0;
  activePlayer = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

//SWITCHING PLAYER
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //Switching BackgroundColor of the Active Player
  //Method 1 (using "contains" method)
  // if (player0El.classList.contains('player--active')) {
  //   player0El.classList.remove('player--active');
  //   player1El.classList.add('player--active');
  // } else {
  //   player1El.classList.remove('player--active');
  //   player0El.classList.add('player--active');
  // }

  //Method 2 (using "toggle" method)
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  //Notes about toogle method : Toggle method add the content if it's not there and remove it if it's there
};

innit();

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.Checked for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentscore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Adding current score of active player to its global score
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //When the global score hits 100, active player wins!
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      playing = false;
    } else {
      //Switch Player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', innit);
