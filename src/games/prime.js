import startGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 1;
const max = 100;

const isPrime = (number) => {
  if (number <= 2 || number % 2 === 0) {
    return false;
  }

  const maxDivisor = Math.sqrt(number);

  for (let i = 3; i <= maxDivisor; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const makeTest = () => {
  const question = getRandomInt(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => {
  startGame(description, makeTest);
};
