import startGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const min = 1;
const max = 100;

const isEven = n => (n % 2 === 0);

const makeTest = () => {
  const question = getRandomInt(min, max);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => {
  startGame(description, makeTest);
};
