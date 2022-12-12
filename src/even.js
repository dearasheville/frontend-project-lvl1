import readlineSync from 'readline-sync';

const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const isEven = (num) => num % 2 === 0;

const isEvenGame = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const userAnswer = readlineSync.question(`Question: ${randomNumber}\n`);

  console.log(`Your answer: ${userAnswer}`);

  return [userAnswer, correctAnswer];
};

const startNewGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?\n');

  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i += 1) {
    const result = isEvenGame();

    const userAnswer = result[0];
    const correctAnswer = result[1];

    // console.log(result);

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);

      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);

  return true;
};

export default startNewGame;
