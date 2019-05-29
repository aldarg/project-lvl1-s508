import startGame from '..';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const isEven = n => (n % 2 === 0);

const makeTest = () => {
  const question = getRandomInt(minNum, maxNum);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

const startEvenGame = () => {
  startGame(description, makeTest);
};

export default startEvenGame;
