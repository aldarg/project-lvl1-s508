import startGame from '..';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const minFirst = 1;
const maxFirst = 5;
const minDiff = 2;
const maxDiff = 4;

const makeTest = () => {
  const start = getRandomInt(minFirst, maxFirst);
  const difference = getRandomInt(minDiff, maxDiff);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + difference * i;
  }

  const hiddenElementIndex = getRandomInt(0, progressionLength - 1);
  const answer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

export default () => {
  startGame(description, makeTest);
};
