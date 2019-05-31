import startGame from '..';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const min = 1;
const max = 20;

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
  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);
  const operationId = getRandomInt(0, operations.length - 1);

  const question = `${a} ${operations[operationId].sign} ${b}`;
  const answer = `${operations[operationId].calculate(a, b)}`;

  return { question, answer };
};

export default () => {
  startGame(description, makeTest);
};
