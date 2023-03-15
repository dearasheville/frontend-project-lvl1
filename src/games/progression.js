import startNewGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const progressionGame = () => {
  const randomNumber = getRandomNumber(0, 10);
  const progressionStep = getRandomNumber(0, 10);
  const questionStep = getRandomNumber(0, 9);
  let correctAnswer;

  let progressionAccumulator = randomNumber;
  let progressionString = `${randomNumber}`;

  for (let i = 0; i < 9; i += 1) {
    progressionAccumulator += progressionStep;

    if (i === questionStep) {
      progressionString += ' ..';

      correctAnswer = progressionAccumulator;
    } else {
      progressionString += ` ${progressionAccumulator}`;
    }
  }

  const gameTask = 'What number is missing in the progression?';
  const gameQuestion = `Question: ${progressionString}\n`;

  return [String(correctAnswer), gameTask, gameQuestion];
};

export default () => startNewGame(progressionGame);
