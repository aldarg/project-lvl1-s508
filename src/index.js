import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have you name? ');

  return name;
};

export { getName };
