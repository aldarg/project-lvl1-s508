import startGame from '..';
import getRandomInt from '../utils';

const isEven = n => (n % 2 === 0);

const makeTest = () => {
  const min = 1;
  const max = 100;

  const question = getRandomInt(min, max);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

const startEvenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  startGame(description, makeTest);
};

export default startEvenGame;
