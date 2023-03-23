import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const minNumber = 1;
const maxNumber = 10;

const progressionLength = getRandomNumber(5, 15);

const getProgression = (initNumber, stepNumber, stepOrder) => {
  let progressionAccumulator = initNumber;
  let progressionString = `${initNumber}`;

  let progressionAnswer;

  for (let i = 1; i < progressionLength; i += 1) {
    progressionAccumulator += stepNumber;

    if (i === stepOrder) {
      progressionString += ' ..';

      progressionAnswer = progressionAccumulator;
    } else {
      progressionString += ` ${progressionAccumulator}`;
    }
  }

  return [progressionAnswer, progressionString];
};

const progressionGame = () => {
  const progressionInitNumber = getRandomNumber(minNumber, maxNumber);
  const progressionStepNumber = getRandomNumber(minNumber, maxNumber);
  const questionStepOrder = getRandomNumber(minNumber, progressionLength - 1);
  const progressionGameData = getProgression(progressionInitNumber, progressionStepNumber, questionStepOrder);

  const [correctAnswer, progressionString] = progressionGameData;

  const gameDescription = 'What number is missing in the progression?';
  const gameQuestion = `${progressionString}`;

  return [String(correctAnswer), gameDescription, gameQuestion];
};

export default () => startNewGame(progressionGame);
