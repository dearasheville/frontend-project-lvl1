import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const randomNumber = getRandomNumber();

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestion = `${randomNumber}`;

  return [correctAnswer, gameDescription, gameQuestion];
};

export default () => startNewGame(evenGame);
