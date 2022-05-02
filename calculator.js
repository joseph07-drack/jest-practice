const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const divide = (num1, num2) => {
  // return undefined if num2 is less than 0
  return num2 < 1 ? undefined : num1 / num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};
