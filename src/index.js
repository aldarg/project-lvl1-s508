import readlineSync from 'readline-sync';

const attemptsTotal = 3;

export default (description, makeTest) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');

  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
  console.log('');

  for (let i = 1; i <= attemptsTotal; i += 1) {
    const { question, answer } = makeTest();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
