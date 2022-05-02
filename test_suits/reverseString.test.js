const reverseString = require('../reverseString');

describe('Reverse String', () => {
  it('should not reverse an empty string', () => {
    expect(reverseString('')).toBeNull();
  });

  it('should return olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should return bob', () => {
    expect(reverseString('bob')).toBe('bob');
  });
});
