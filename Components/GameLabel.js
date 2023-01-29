// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class GameLabel extends Sprite {
  constructor(x, y, color, text, value, font = '32px Helvetica', align = 'left') {
    super(x, y, color);
    this.text = text;
    this.value = value;
    this.font = font;
    this.align = align;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.text}: ${this.value}`, this.x, this.y);
  }
}

export default GameLabel;
