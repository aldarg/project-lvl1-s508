import startGame from '../..';
import { getRandomInt } from '../../utils';

const isEven = n => (n % 2 === 0);

const makeTest = () => {
  const min = 1;
  const max = 100;

  const num = getRandomInt(min, max);
  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';

  return { question, answer };
};

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  console.log('');

  startGame(makeTest);
};

export default startEvenGame;
