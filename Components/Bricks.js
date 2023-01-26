// eslint-disable-next-line import/extensions
import Brick from './Brick.js';

class Bricks {
  constructor(rows = 8, cols = 11) {
    this.rows = rows;
    this.cols = cols;
    this.bricks = [];
    this.setup();
  }

  setup() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brick = new Brick(20, 20, 75, 20, '#2A9D8F');
        brick.x = (c * (brick.width + 10)) + 30;
        brick.y = (r * (brick.height + 10)) + 80;
        this.bricks[c][r] = brick;
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        if (this.bricks[c][r].status === 1) {
          this.bricks[c][r].render(ctx);
        }
      }
    }
  }
}

export default Bricks;
