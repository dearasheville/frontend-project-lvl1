import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const minNumber = 1;
const maxNumber = 10;

const signs = ['+', '-', '*'];

const toCalculateExpression = (firstNumber, secondNumber, sign) => {
  let result;

  switch (sign) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  return result;
};

const calcGame = () => {
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const randomSign = signs[getRandomNumber(0, signs.length - 1)];

  const correctAnswer = toCalculateExpression(firstRandomNumber, secondRandomNumber, randomSign);

  const gameDescription = 'What is the result of the expression?';
  const gameQuestion = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;

  return [String(correctAnswer), gameDescription, gameQuestion];
};

export default () => startNewGame(calcGame);
