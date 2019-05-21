import readlineSync from 'readline-sync';
import config from './config';

const getNumber = () => {
    const min = config.minNumber;
    const max = config.maxNumber;

    const result = Math.floor(min + Math.random() * (max - min + 1));

    return result;
};

const isEven = (n) => (n % 2 === 0);

const getAnswer = () => {
    const answer = readlineSync.question('Your answer: ');

    return answer;
};

const checkAnswer = (number, answer) => {
    switch (answer) {
        case 'yes':
            return isEven(number);
        case 'no':
            return !isEven(number);
        default:
            return false;
    }
};

const getCorrectAnswer = (number) => {
    return isEven(number) ? 'yes' : 'no';
};

const startGame = () => {
    for (let i = 1; i <= config.attemptsTotal; ++i) {
        const number = getNumber();
        console.log(`Question: ${number}`);
        const answer = getAnswer();

        if (checkAnswer(number, answer)) {
            console.log('Correct!');
        } else {
            const correctAnswer = getCorrectAnswer(number);
            console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);

            return false;
        }
    }

    return true;
}

const endGame = (name, result) => {
    if (result) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
}

export { startGame, endGame };