const stringLength = require('../stringLength');

describe('String Length', () => {
  it('should return 5', () => {
    expect(stringLength('hello')).toBe(5);
  });

  it('should return 10', () => {
    expect(stringLength('javascript')).toBe(10);
  });
});
