import startGame from '..';
import getRandomInt from '../utils';

const operations = [
  {
    sign: '+',
    func: (a, b) => a + b,
  },
  {
    sign: '-',
    func: (a, b) => a - b,
  },
  {
    sign: '*',
    func: (a, b) => a * b,
  },
];

const makeTest = () => {
  const min = 1;
  const max = 20;

  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);
  const operationId = getRandomInt(0, operations.length - 1);

  const test = {
    question: `${a} ${operations[operationId].sign} ${b}`,
    answer: `${operations[operationId].func(a, b)}`,
  };

  return test;
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  startGame(description, makeTest);
};

export default startCalcGame;
