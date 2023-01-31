/* eslint-disable import/extensions */
import Game from './Components/Game.js';

// Build Canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// eslint-disable-next-line no-unused-vars
function startGame() {
  const game = new Game(canvas, ctx);
  game.start();
}

const startButton = document.getElementById('start');
startButton.addEventListener('click', startGame, false);
