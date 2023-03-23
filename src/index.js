import readlineSync from 'readline-sync';

const startNewGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?\n');

  console.log(`Hello, ${name}!`);

  const gamesCount = 3;

  for (let i = 0; i < gamesCount; i += 1) {
    const gameResult = game();

    const [correctAnswer, gameTask, gameQuestion] = gameResult;

    console.log(gameTask);

    const userAnswer = readlineSync.question(`Question: ${gameQuestion}\n`);

    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default startNewGame;
