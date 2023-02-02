// eslint-disable-next-line import/extensions
import Sprite from './Sprite';

class Ball extends Sprite {
  x: number;
  y: number;
  radius: number;
  color: string;
  dx: number;
  dy: number;
  constructor(x: number, y: number, radius: number, color: string) {
    super(x, y, color, radius * 2, radius * 2);
    this.radius = radius;
    this.dx = 4;
    this.dy = -4;
  }

  moveTo(): void {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx: any) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
