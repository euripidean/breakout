class Paddle {
  constructor(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  render(ctx, canvas) {
    const paddleX = (canvas.width - this.width) / 2;
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
