import startGame from '..';
import getRandomInt from '../utils';

const findGCD = (a, b, start = b) => {
  if (a / b < 1) {
    return findGCD(b, a);
  }

  if (a % start === 0 && b % start === 0) {
    return start;
  }

  return findGCD(a, b, start - 1);
};

const makeTest = () => {
  const min = 1;
  const max = 47;

  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);

  const answer = findGCD(a, b).toString();

  return { question: `${a} ${b}`, answer };
};

const startCalcGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, makeTest);
};

export default startCalcGame;
