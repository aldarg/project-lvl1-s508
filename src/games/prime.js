import startGame from '..';
import getRandomInt from '../utils';

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
];

const isPrime = number => primes.find(prime => number === prime);

const makeTest = () => {
  const minNum = 1;
  const maxNum = 100;
  const question = getRandomInt(minNum, maxNum);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const startPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(description, makeTest);
};

export default startPrimeGame;
