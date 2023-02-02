// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(x, y, color, width = 400, height = 10) {
    super(x, y, width, height, color);
  }

  moveTo(x) {
    this.x = x;
  }

  moveBy(dx) {
    this.x += dx;
  }
}

export default Paddle;
