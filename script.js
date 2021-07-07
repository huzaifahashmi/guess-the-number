'use strict';
let computerGuess = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let userGuess = Number(document.querySelector('.guess').value);
  if (!userGuess) {
    alert('Please enter a number');
  }
  if (score > 0) {
    if (userGuess === computerGuess) {
      document.querySelector('.message').textContent = 'You guessed it';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = userGuess;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (userGuess !== computerGuess && userGuess) {
      document.querySelector('.score').textContent = score = score - 1;
    }

    if (userGuess < computerGuess) {
      document.querySelector('.message').textContent = 'Too low!';
    } else if (userGuess > computerGuess) {
      document.querySelector('.message').textContent = 'Too high!';
    }
  }
  if (score == 0) {
    document.querySelector('.message').textContent =
      'You lost the game, try again!';
    document.querySelector('body').style.backgroundColor = '#991c1c';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  computerGuess = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});
console.log(computerGuess);
