/* eslint-disable import/extensions */
import Game from './Components/Game.js';

// Build Canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function startGame() {
  const game = new Game(canvas, ctx);
  game.start();
}

document.body.addEventListener('click', (e) => {
  if (e.target.matches('#start') || e.target.matches('#playAgain') || e.target.matches('#winPlayAgain')) {
    startGame();
  }
}, false);
