import Sprite from './Sprite';
import Ball from './Ball';
import BrickDisplay from './Bricks';
import Paddle from './Paddle';
import GameLabel from './GameLabel';
import darkColor from './DarkColor';
import lightColor from './lightColor';

class Game {
  canvas: HTMLCanvasElement;
  ctx: any;
  x: number;
  y: number;
  paddleWidth: number;
  paddleX: number;
  background: Sprite;
  brickDisplay: BrickDisplay;
  ball: Ball;
  paddle: Paddle;
  score: GameLabel;
  lives: GameLabel;
  rightPressed: Boolean;
  leftPressed: Boolean;

  constructor(canvas: HTMLCanvasElement, ctx: any) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.paddleWidth = 75;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;
    // Game Elements
    this.background = new Sprite(0, 0, lightColor(), canvas.width, canvas.height);
    this.brickDisplay = new BrickDisplay(darkColor());
    this.ball = new Ball(this.x, this.y, 10, darkColor());
    this.paddle = new Paddle(this.paddleX, this.canvas.height - 10, darkColor());
    this.score = new GameLabel(800, 60, darkColor(), 'Score', 0);
    this.lives = new GameLabel(50, 60, darkColor(), 'Lives', 3);
    // Game State
    this.rightPressed = false;
    this.leftPressed = false;
    // Functions
    this.setupListeners();
    this.drawAll();
  }

  setupListeners() {
    const { addEventListener } = document;
    addEventListener('keydown', this.keyDownHandler.bind(this), false);
    addEventListener('keyup', this.keyUpHandler.bind(this), false);
    addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
  }

  // eslint-disable-next-line class-methods-use-this
  toggleScreen(id: string, toggle: Boolean): void {
    const element = document.getElementById(id);
    const display = (toggle) ? 'block' : 'none';
    element.style.display = display;
  }

  stop(): void {
    this.toggleScreen('myCanvas', false);
    this.toggleScreen('gameover', true);
  }

  start(): void {
    this.toggleScreen('start-screen', false);
    this.toggleScreen('gameover', false);
    this.toggleScreen('win-screen', false);
    this.toggleScreen('myCanvas', true);
  }

  win(): void {
    this.toggleScreen('myCanvas', false);
    this.toggleScreen('win-screen', true);
  }

  collisionDetection(): void {
    for (let c = 0; c < this.brickDisplay.cols; c += 1) {
      for (let r = 0; r < this.brickDisplay.rows; r += 1) {
        const b = this.brickDisplay.bricks[c][r];
        if (b.status === 1) {
          if (
            this.ball.x > b.x
            && this.ball.x < b.x + this.brickDisplay.brickWidth
            && this.ball.y > b.y
            && this.ball.y < b.y + this.brickDisplay.brickHeight
          ) {
            this.ball.dy = -this.ball.dy;
            b.status = 0;
            this.score.value += 1;
            this.ball.color = darkColor();
            if (this.score.value === this.brickDisplay.rows * this.brickDisplay.cols) {
              this.win();
            }
          }
        }
      }
    }
  }

  movePaddle(): void {
    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
      // right hand side limit
      this.paddle.moveBy(7);
    } else if (this.leftPressed && this.paddle.x > 0) {
      // left hand side limit
      this.paddle.moveBy(-7);
    }
  }

  keyDownHandler({ key }: KeyboardEvent) {
    if (key === 'Right' || key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (key === 'Left' || key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler({ key }: KeyboardEvent) {
    if (key === 'Right' || key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (key === 'Left' || key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler({ clientX }: MouseEvent) {
  // restricts to the size of the Canvas
    const relativeX = clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddle.moveTo(relativeX - this.paddle.width / 2);
    }
  }

  drawAll(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Render all elements
    this.background.render(this.ctx);
    this.brickDisplay.render(this.ctx);
    this.ball.render(this.ctx);
    this.ball.moveTo();
    this.paddle.render(this.ctx);
    this.score.render(this.ctx);
    this.lives.render(this.ctx);
    // Implement Game Play
    this.collisionDetection();
    // Ball positioning - left/right
    if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius
      || this.ball.x + this.ball.dx < this.ball.radius) {
      this.ball.dx = -this.ball.dx;
    }
    // Ball positioning - top/bottom
    if (this.ball.y + this.ball.dy < this.ball.radius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
        // Ball positioning - ball hitting paddle
        this.ball.dy = -this.ball.dy * 1.1;
        // increase speed of ball slightly each time paddle is hit!
        this.ball.color = 'red'; // change colour of ball when it hits the paddle
      } else {
        this.lives.value -= 1;
        this.ball.dx = 4;
        this.ball.dy = -4; // reset ball speed to original
        if (this.lives.value === -1) {
          this.stop();
        } else {
          // reset to starting position and paddle
          this.ball.x = this.canvas.width / 2;
          this.ball.y = this.canvas.height - 30;
          this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
        }
      }
    }
    this.movePaddle();
    requestAnimationFrame(this.drawAll.bind(this));
  }
}

export default Game;
