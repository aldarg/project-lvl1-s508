const getRandomInt = (min, max) => {
  const num = Math.floor(min + Math.random() * (max - min + 1));

  return num;
};

export { getRandomInt };
