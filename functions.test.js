const functions = require('./functions');

// toBe - use for primitive types
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
  });

  // CHECK FOR TRUTHY & FALSY VALUES

  // toBeNull
  test('Should be null', () => {
      expect(functions.isNull()).toBeNull()
  })

  // toBeFalsy
  test('Should be falsy', () => {
      expect(functions.checkValue(null)).toBeFalsy()
  })

  // toEqual - use for objects and arrays
  test('User should be Kurt Reynolds object', () => {
      expect(functions.createUser()).toEqual({firstName: 'Kurt', lastName: 'Reynolds'})
  } )