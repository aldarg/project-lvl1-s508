import startGame from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 47;

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGcd(b, a % b);
};

const makeTest = () => {
  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);

  const question = `${a} ${b}`;
  const answer = findGcd(a, b).toString();

  return { question, answer };
};

export default () => {
  startGame(description, makeTest);
};
