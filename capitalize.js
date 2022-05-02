const capitalize = (string) => {
  return string !== '' ? string.replace(/^\w/, (c) => c.toUpperCase()) : '';
};

module.exports = capitalize;
