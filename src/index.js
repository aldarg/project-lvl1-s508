import readlineSync from 'readline-sync';

const startGame = (makeTest) => {
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
  console.log('');

  const attemptsTotal = 3;

  for (let i = 1; i <= attemptsTotal; ++i) {
    const test = makeTest();

    console.log(`Question: ${test.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === test.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${test.answer}'.`);
      console.log(`Let's try again, ${name}!`);

      return false;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};

export default startGame;
