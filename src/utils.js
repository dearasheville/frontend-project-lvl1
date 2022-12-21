const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const isEven = (num) => num % 2 === 0;

export { getRandomNumber, isEven };
