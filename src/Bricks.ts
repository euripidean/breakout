import Brick from './Brick';

class BrickDisplay {
  colorTheme: string;
  rows: number;
  cols: number;
  bricks: Array<any>;
  brickWidth: number;
  brickHeight: number;
  brickPadding: number;
  brickOffset: number;
  brickTop: number;
  constructor(colorTheme: string, rows = 8, cols = 11) {
    this.colorTheme = colorTheme;
    this.rows = rows;
    this.cols = cols;
    this.bricks = [];
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffset = 30;
    this.brickTop = 80;
    // invoke method
    this.setup();
  }

  setup() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  render(ctx: any) {
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        if (this.bricks[c][r].status === 1) {
          const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffset;
          const brickY = (r * (this.brickHeight + this.brickPadding))
          + (this.brickOffset + this.brickTop);
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          const brick = new Brick(brickX, brickY, this.colorTheme);
          brick.render(ctx);
        }
      }
    }
  }
}

export default BrickDisplay;
