import startGame from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const minNum = 1;
const maxNum = 20;

const operations = [
  {
    sign: '+',
    calculate: (a, b) => a + b,
  },
  {
    sign: '-',
    calculate: (a, b) => a - b,
  },
  {
    sign: '*',
    calculate: (a, b) => a * b,
  },
];

const makeTest = () => {
  const a = getRandomInt(minNum, maxNum);
  const b = getRandomInt(minNum, maxNum);
  const operationId = getRandomInt(0, operations.length - 1);

  const question = `${a} ${operations[operationId].sign} ${b}`;
  const answer = `${operations[operationId].calculate(a, b)}`;

  return { question, answer };
};

const startCalcGame = () => {
  startGame(description, makeTest);
};

export default startCalcGame;
