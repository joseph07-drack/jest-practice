const capitalize = require('../capitalize');

describe('Capitalize', () => {
  it('should not capitalize an empty string', () => {
    expect(capitalize('')).toBeFalsy();
  });

  it('should return Africa', () => {
    expect(capitalize('africa')).toBe('Africa');
  });
});
