import Game from './Game';

// Build Canvas
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function startGame() {
  const game: Game = new Game(canvas, ctx);
  game.start();
}


document.body.addEventListener('click', (e) => {
  const target = e.target as HTMLBodyElement
  if (target.matches('#start') || target.matches('#playAgain') || target.matches('#winPlayAgain')) {
    startGame();
  }
}, false);
