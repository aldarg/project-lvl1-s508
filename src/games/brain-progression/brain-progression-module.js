import startGame from '../..';
import getRandomInt from '../../utils';

const makeTest = () => {
  const progressionLength = 10;
  const minFirst = 1;
  const maxFirst = 5;
  const minDiff = 2;
  const maxDiff = 4;

  const first = getRandomInt(minFirst, maxFirst);
  const difference = getRandomInt(minDiff, maxDiff);

  const numbers = [first];
  for (let i = 1; i < progressionLength; i += 1) {
    numbers[i] = numbers[i - 1] + difference;
  }

  const hidden = getRandomInt(1, progressionLength);
  const answer = numbers[hidden - 1].toString();
  numbers[hidden - 1] = '..';
  const question = numbers.join(' ');

  return { question, answer };
};

const startProgressionGame = () => {
  const game = {
    rules: 'What number is missing in the progression?',
    makeTest,
  };

  startGame(game);
};

export default startProgressionGame;
