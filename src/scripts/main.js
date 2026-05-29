/* eslint-disable no-shadow */
'use strict';
import Game from '../modules/Game.class.js';

const game = new Game();

const gameScore = document.querySelector('.game-score');
const button = document.querySelector('.button');
const messageLose = document.querySelector('.message-lose');
const messageWin = document.querySelector('.message-win');
const messageStart = document.querySelector('.message-start');
const field = document.querySelector('tbody');

button.addEventListener('click', () => {
  if (button.textContent === 'Start') {
    game.start();
    button.textContent = 'Restart';
    button.classList.remove('start');
    button.classList.add('restart');
    messageStart.classList.add('hidden');
  } else {
    game.restart();
    messageWin.classList.add('hidden');
    messageLose.classList.add('hidden');
  }

  render();
});

document.addEventListener('keydown', (e) => {
  if (game.getStatus() !== 'playing') {
    return;
  }

  const moves = {
    ArrowUp: () => game.moveUp(),
    ArrowDown: () => game.moveDown(),
    ArrowLeft: () => game.moveLeft(),
    ArrowRight: () => game.moveRight(),
  };

  if (moves[e.key]) {
    e.preventDefault();
    moves[e.key]();
    render();
  }
});

function render() {
  const fieldGame = game.getState();

  fieldGame.forEach((row, i) => {
    row.forEach((value, j) => {
      const cell = field.rows[i].cells[j];

      cell.textContent = value > 0 ? value : '';

      cell.className =
        value > 0 ? `field-cell field-cell--${value}` : 'field-cell';
    });
  });

  gameScore.textContent = game.getScore();

  const status = game.getStatus();

  if (status === 'win') {
    messageWin.classList.remove('hidden');
  } else if (status === 'lose') {
    messageLose.classList.remove('hidden');
  }
}
