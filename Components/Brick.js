class Brick {
  constructor(x, y, color, width, height, status = 1) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.status = status;
  }

  render(ctx) {
    const brickRowCount = 8;
    const brickColumnCount = 11;
    const brickPadding = 10;
    const brickOffsetTop = 80;
    const brickOffsetLeft = 30;

    const bricks = [];
    for (let c = 0; c < brickColumnCount; c += 1) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r += 1) {
        bricks[c][r] = new Brick();
      }
    }

    for (let c = 0; c < brickColumnCount; c += 1) {
      for (let r = 0; r < brickRowCount; r += 1) {
        if (bricks[c][r].status === 1) {
          const brickX = c * (this.width + brickPadding) + brickOffsetLeft;
          const brickY = r * (this.height + brickPadding) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.width, this.height);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Brick;
