import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const minNumber = 10;
const maxNumber = 100;

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }

  return getGcd(secondNumber, firstNumber % secondNumber);
};

const gcdGame = () => {
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);

  const correctAnswer = getGcd(firstRandomNumber, secondRandomNumber);
  const gameQuestion = `${firstRandomNumber} ${secondRandomNumber}`;

  return [String(correctAnswer), gameQuestion];
};

export default () => startNewGame(gcdGame, gameDescription);
