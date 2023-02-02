// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(x, y, radius, color) {
    super(x, y, radius * 2, radius * 2, color);
    this.radius = radius;
    this.dx = 4;
    this.dy = -4;
  }

  moveTo() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
