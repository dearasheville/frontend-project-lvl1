import readlineSync from 'readline-sync';

const startNewGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?\n');

  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i += 1) {
    const gameResult = game();

    const correctAnswer = gameResult[0];
    const gameQuestion = gameResult[1];

    const userAnswer = Number(readlineSync.question(gameQuestion));

    console.log(`Your answer: ${userAnswer}`);

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
