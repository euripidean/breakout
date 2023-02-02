function lightColor(): string {
  const letters: string[] = 'BCDEF'.split('');
  let color: string = '#';
  for (let i: number = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export default lightColor;
