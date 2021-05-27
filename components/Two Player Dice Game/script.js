'use strict';

/* DECLARATIONS */

let diceImg = document.querySelector('.dice');
let rolledDice;

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let score0 = document.querySelector('#score--0').textContent;
let score1 = document.querySelector('#score--1').textContent;

let currentScore0 = document.querySelector('#current--0').textContent;
let currentScore1 = document.querySelector('#current--1').textContent;

let newScore0; //pomoćna varijabla
let newScore1; //pomoćna varijabla

/* CATCHERS */
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let targetScore = 100;

/* BUTTONS */
btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);

/* FUNCTIONS */

function newGame() {
  score0 = 0;
  score1 = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  document.querySelector('#current--0').textContent = currentScore0;
  document.querySelector('#current--1').textContent = currentScore1;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  removeWinnerClass('.player--0');
  removeWinnerClass('.player--1');
  btnRoll.addEventListener('click', diceRoll);
  btnHold.addEventListener('click', holdScore);
  showDice;
}

function diceRoll() {
  rolledDice = Math.trunc(Math.random() / 0.1666666666666 + 1);

  //ANALIZIRATI ZAŠTO NE RADI KADA STAVIŠ currentScore1 = currentScore1 - trenutni statement document.querySelector('#current--1').textContent je isto gde ga vodi currentScore1
  if (rolledDice === 1) {
    showDice();
    diceImg.src = 'dice-1.png';

    if (player0.classList.contains('player--active') === true) {
      currentScore0 = 0;
      document.querySelector('#current--0').textContent = currentScore0;
      removeActiveClass('.player--0');
      addActiveClass('.player--1');
    } else {
      currentScore1 = 0;
      document.querySelector('#current--1').textContent = currentScore1;
      removeActiveClass('.player--1');
      addActiveClass('.player--0');
    }
  } else {
    showDice();
    diceImg.src = `dice-${rolledDice}.png`;
    if (player0.classList.contains('player--active') === true) {
      currentScore0 = Number(currentScore0) + Number(rolledDice);
      document.querySelector('#current--0').textContent = currentScore0;
    } else {
      currentScore1 = Number(currentScore1) + Number(rolledDice);
      document.querySelector('#current--1').textContent = currentScore1;
    }
  }
}

function holdScore() {
  if (player0.classList.contains('player--active') === true) {
    newScore0 =
      Number(document.querySelector('#score--0').textContent) +
      Number(currentScore0);
    currentScore0 = 0;
    document.querySelector('#score--0').textContent = newScore0;
    document.querySelector('#current--0').textContent = currentScore0;
    removeActiveClass('.player--0');
    addActiveClass('.player--1');

    if (
      Number(document.querySelector('#score--0').textContent) >= targetScore
    ) {
      addWinnerClass('.player--0');
      btnRoll.removeEventListener('click', diceRoll);
      btnHold.removeEventListener('click', holdScore);
      hideDice();
    }
  } else {
    newScore1 =
      Number(document.querySelector('#score--1').textContent) +
      Number(currentScore1);
    currentScore1 = 0;
    document.querySelector('#score--1').textContent = newScore1;
    document.querySelector('#current--1').textContent = currentScore1;

    removeActiveClass('.player--1');
    addActiveClass('.player--0');

    if (
      Number(document.querySelector('#score--1').textContent) >= targetScore
    ) {
      addWinnerClass('.player--1');
      btnRoll.removeEventListener('click', diceRoll);
      btnHold.removeEventListener('click', holdScore);
      hideDice();
    }
  }
}

function addWinnerClass(a) {
  document.querySelector(a).classList.add('player--winner');
}

function removeWinnerClass(a) {
  document.querySelector(a).classList.remove('player--winner');
}

function addActiveClass(a) {
  document.querySelector(a).classList.add('player--active');
}

function removeActiveClass(a) {
  document.querySelector(a).classList.remove('player--active');
}

function hideDice() {
  document.querySelector('.dice').classList.add('hidden');
}

function showDice() {
  document.querySelector('.dice').classList.remove('hidden');
}

//  NE USPEVAM DA NAPRAVIM DA RADI FUNKCIJA ZA PROVERU KLASE
// function checkActiveClass(a) {
//   document.querySelector('.player--0');
// }
