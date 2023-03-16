import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGame = () => {
  const randomNumber = getRandomNumber();

  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameQuestion = `Question: ${randomNumber}\n`;

  return [correctAnswer, gameDescription, gameQuestion];
};

export default () => startNewGame(primeGame);
