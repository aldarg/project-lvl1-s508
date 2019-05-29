import startGame from '..';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 47;

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
  const a = getRandomInt(minNum, maxNum);
  const b = getRandomInt(minNum, maxNum);

  const question = `${a} ${b}`;
  const answer = findGCD(a, b).toString();

  return { question, answer };
};

const startCalcGame = () => {
  startGame(description, makeTest);
};

export default startCalcGame;
