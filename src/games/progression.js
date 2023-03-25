import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const minNumber = 1;
const maxNumber = 10;

const progressionLength = 10;

const getProgression = (start, step, questionPosition) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }

  progression[questionPosition] = '..';

  return progression.join(' ');
};

const progressionGame = () => {
  const progressionStart = getRandomNumber(minNumber, maxNumber);
  const progressionStep = getRandomNumber(minNumber, maxNumber);
  const questionPosition = getRandomNumber(minNumber, progressionLength - 1);

  const progression = getProgression(progressionStart, progressionStep, questionPosition);

  const correctAnswer = progressionStart + (progressionStep * questionPosition);
  const gameQuestion = `${progression}`;

  return [String(correctAnswer), gameQuestion];
};

export default () => startNewGame(progressionGame, gameDescription);
