import Character from '../Character';

test('new class Character', () => {
  function createCharacter() {
    return new Character(1, 'Bowman');
  }
  expect(createCharacter).toThrowError(new Error('You cannot create objects of this class!'));
});
