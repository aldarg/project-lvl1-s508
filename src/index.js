import readlineSync from 'readline-sync';

const startGame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.rules);
  console.log('');

  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
  console.log('');

  const attemptsTotal = 3;

  for (let i = 1; i <= attemptsTotal; i += 1) {
    const test = game.makeTest();

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
