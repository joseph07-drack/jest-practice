const capitalize = (string) => {
  return string !== ''
    ? string.trim().replace(/^\w/, (c) => c.toUpperCase())
    : '';
};

module.exports = capitalize;
