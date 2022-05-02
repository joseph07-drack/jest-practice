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
