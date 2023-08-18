export function randomNumberBetween(min, max) {
  const range = max - min + 1;
  const randomOffset = Math.random() * range;
  const randomNum = Math.floor(randomOffset) + min;
  return randomNum;
}
