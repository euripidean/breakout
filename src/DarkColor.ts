function DarkColor(): string {
  let color: string = '#';
  for (let i: number = 0; i < 6; i += 1) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export default DarkColor;
