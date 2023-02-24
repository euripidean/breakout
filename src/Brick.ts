import Sprite from './Sprite';

class Brick extends Sprite {
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;
  status: number;
  constructor(x: number, y: number, color: string, width = 75, height = 20) {
    super(x, y, color, width, height);
    this.status = 1;
  }
}

export default Brick;
