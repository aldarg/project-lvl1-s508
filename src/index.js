import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export default getName;