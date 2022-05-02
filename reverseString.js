const reverseString = (string) => {
  return string !== '' ? string.split('').reverse().join('') : null;
};

module.exports = reverseString;
