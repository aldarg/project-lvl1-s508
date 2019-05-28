import startGame from '..';
import getRandomInt from '../utils';

const makeTest = () => {
  const progressionLength = 10;
  const minFirst = 1;
  const maxFirst = 5;
  const minDiff = 2;
  const maxDiff = 4;

  const start = getRandomInt(minFirst, maxFirst);
  const difference = getRandomInt(minDiff, maxDiff);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + difference * i;
  }

  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

const startProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  startGame(description, makeTest);
};

export default startProgressionGame;
