import startNewGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gcdGame = () => {
  const firstRandomNumber = getRandomNumber(10, 100);
  const secondRandomNumber = getRandomNumber(10, 100);
  let correctAnswer;

  let smallerNumber;

  if (firstRandomNumber > secondRandomNumber) {
    smallerNumber = secondRandomNumber;
  } else {
    smallerNumber = firstRandomNumber;
  }

  while (smallerNumber > 0) {
    if (firstRandomNumber % smallerNumber === 0 && secondRandomNumber % smallerNumber === 0) {
      correctAnswer = smallerNumber;

      break;
    }

    smallerNumber -= 1;
  }

  const gameTask = 'Find the greatest common divisor of given numbers.';
  const gameQuestion = `Question: ${firstRandomNumber} ${secondRandomNumber}\n`;

  return [String(correctAnswer), gameTask, gameQuestion];
};

export default () => startNewGame(gcdGame);
