const myLib = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(myLib.sum(1, 2)).toBe(3);
});

test('greeting universe', () => {
    expect(myLib.myFunc()).toBe('Hello Universe!');
});


