import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const squareRootNumber = Math.sqrt(number);

  for (let i = 2; i < squareRootNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGame = () => {
  const randomNumber = getRandomNumber();

  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const gameQuestion = `${randomNumber}`;

  return [correctAnswer, gameQuestion];
};

export default () => startNewGame(primeGame, gameDescription);
