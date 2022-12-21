import readlineSync from 'readline-sync';

import startNewGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const signs = ['+', '-', '*'];

const calcGame = () => {
  const firstRandomNumber = getRandomNumber(10);
  const secondRandomNumber = getRandomNumber(10);
  const randomExpression = signs[getRandomNumber(signs.length - 1)];

  let correctAnswer;

  switch (randomExpression) {
    case '+':
      correctAnswer = firstRandomNumber + secondRandomNumber;
      break;
    case '-':
      correctAnswer = firstRandomNumber - secondRandomNumber;
      break;
    case '*':
      correctAnswer = firstRandomNumber * secondRandomNumber;
      break;
    default:
      break;
  }

  console.log('What is the result of the expression?');

  const gameQuestion = `Question: ${firstRandomNumber} ${randomExpression} ${secondRandomNumber}\n`;

  return [correctAnswer, gameQuestion];
};

export default () => startNewGame(calcGame);
