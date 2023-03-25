import startNewGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 10;

const signs = ['+', '-', '*'];

const getRandomSign = () => {
  const signsLength = signs.length;
  const signsIndex = Math.round(Math.random() * (signsLength - 1));

  return signs[signsIndex];
};

const calculateExpression = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Operation ${sign} is not supported`);
  }
};

const calcGame = () => {
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const randomSign = getRandomSign();

  const correctAnswer = calculateExpression(firstRandomNumber, secondRandomNumber, randomSign);
  const gameQuestion = `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;

  return [String(correctAnswer), gameQuestion];
};

export default () => startNewGame(calcGame, gameDescription);
