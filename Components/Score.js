class Score {
  constructor(x, y, color, score, font) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
    this.font = font;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }
}

export default Score;
