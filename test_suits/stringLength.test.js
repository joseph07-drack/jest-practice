const stringLength = require('../stringLength');

describe('String Length', () => {
  it('should return 5', () => {
    expect(stringLength('hello')).toBe(5);
  });

  it('should return 10', () => {
    expect(stringLength('javascript')).toBe(10);
  });

  it('should not be less than 1 and greater than 10', () => {
    expect(stringLength('')).toBeFalsy();
  });
});
