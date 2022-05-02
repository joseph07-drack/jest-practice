const { add, subtract } = require('../calculator');

describe('Addition', () => {
  it('should return 5', () => {
    expect(add(2, 3)).toEqual(5);
  });

  it('shoud return a positve number when adding 2 positives numbers', () => {
    expect(add(1, 2)).toBeGreaterThan(0);
  });

  it('shoud return a negative number when adding 2 negative numbers', () => {
    expect(add(-2, -1)).toBeLessThan(0);
  });
});

describe('Subtraction', () => {
  it('Should return 1', () => {
    expect(subtract(3, 2)).toEqual(1);
  });

  it('should return 0 when adding identical numbers', () => {
    expect(subtract(3, 3)).toEqual(0);
  });

  it('shoud return a negative number when substracting 2 negative numbers', () => {
    expect(subtract(-2, -1)).toBeLessThan(0);
  });
});
