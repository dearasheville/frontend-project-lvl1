import readlineSync from 'readline-sync';

const startNewGame = (gameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?\n');

  console.log(`Hello, ${userName}!`);

  const gamesCount = 3;

  for (let i = 0; i < gamesCount; i += 1) {
    const gameResult = gameData();

    console.log(gameDescription);

    const [correctAnswer, gameQuestion] = gameResult;

    const userAnswer = readlineSync.question(`Question: ${gameQuestion}\n`);

    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startNewGame;
