import Sprite from './Sprite';

class Paddle extends Sprite {
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;
  constructor(x: number, y: number, color: string, width = 75, height = 10) {
    super(x, y, color, width, height);
  }

  moveTo(x: number): void {
    this.x = x;
  }

  moveBy(dx: number): void {
    this.x += dx;
  }
}

export default Paddle;
