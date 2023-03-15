import startNewGame from '../index.js';
import { getRandomNumber, isEven } from '../utils.js';

const evenGame = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestion = `Question: ${randomNumber}\n`;

  return [correctAnswer, gameTask, gameQuestion];
};

export default () => startNewGame(evenGame);
