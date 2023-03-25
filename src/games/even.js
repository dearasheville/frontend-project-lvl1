import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const randomNumber = getRandomNumber();

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const gameQuestion = `${randomNumber}`;

  return [correctAnswer, gameQuestion];
};

export default () => startNewGame(evenGame, gameDescription);
