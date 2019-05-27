import startGame from '../..';
import getRandomInt from '../../utils';

const makeTest = () => {
  const ops = [
    {
      name: '+',
      op: (a, b) => a + b,
    },
    {
      name: '-',
      op: (a, b) => a - b,
    },
    {
      name: '*',
      op: (a, b) => a * b,
    },
  ];

  const min = 1;
  const max = 20;

  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);
  const opId = getRandomInt(0, ops.length - 1);

  const test = {
    question: `${a} ${ops[opId].name} ${b}`,
    answer: `${ops[opId].op(a, b)}`,
  };

  return test;
};

const startCalcGame = () => {
  const game = {
    rules: 'What is the result of the expression?',
    makeTest,
  };

  startGame(game);
};

export default startCalcGame;
