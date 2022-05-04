const Calculator = require('../calculator');

describe('Addition', () => {
  it('should return 5', () => {
    expect(Calculator.add(2, 3)).toEqual(5);
  });

  it('shoud return a positve number when adding 2 positives numbers', () => {
    expect(Calculator.add(1, 2)).toBeGreaterThan(0);
  });

  it('shoud return a negative number when adding 2 negative numbers', () => {
    expect(Calculator.add(-2, -1)).toBeLessThan(0);
  });
});

describe('Subtraction', () => {
  it('Should return 1', () => {
    expect(Calculator.subtract(3, 2)).toEqual(1);
  });

  it('should return 0 when adding identical numbers', () => {
    expect(Calculator.subtract(3, 3)).toEqual(0);
  });

  it('shoud return a negative number when substracting 2 negative numbers', () => {
    expect(Calculator.subtract(-2, -1)).toBeLessThan(0);
  });
});

describe('Division', () => {
  it('should return underfine if the 2nd number is 0', () => {
    expect(Calculator.divide(2, 0)).toBeFalsy();
  });

  it('should return 10', () => {
    expect(Calculator.divide(10, 2)).toEqual(5);
  });

  it('should return 1 when dividing identical numbers', () => {
    expect(Calculator.divide(5, 5)).toEqual(1);
  });
});

describe('Multiplication', () => {
  it('should return 10', () => {
    expect(Calculator.multiply(2, 5)).toEqual(10);
  });

  it('should return 0 if any zero present', () => {
    expect(Calculator.multiply(4, 0)).toEqual(0);
  });

  it('shoud return a positive number if both numbers are negative', () => {
    expect(Calculator.multiply(-3, -3)).toEqual(9);
  });

  it('shoud return a negative number if one number is negative', () => {
    expect(Calculator.multiply(-3, 3)).toEqual(-9);
  });
});
