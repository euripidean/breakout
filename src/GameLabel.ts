import Sprite from './Sprite';

class GameLabel extends Sprite {
  x: number;
  y: number;
  color: string;
  text: string;
  value: number;
  font: string;
  align: string;
  constructor(x: number, y: number, color: string, text: string, value: number, font = '32px Helvetica', align = 'left') {
    super(x, y, color);
    this.text = text;
    this.value = value;
    this.font = font;
    this.align = align;
  }

  render(ctx: any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.text}: ${this.value}`, this.x, this.y);
  }
}

export default GameLabel;
