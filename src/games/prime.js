import startGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const isPrime = (number) => {
  if (number <= 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const makeTest = () => {
  const question = getRandomInt(minNum, maxNum);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const startPrimeGame = () => {
  startGame(description, makeTest);
};

export default startPrimeGame;
