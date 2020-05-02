import { exampleFunction } from '../src';

test('should return the computer emoji', () => {
  // Given
  const emoji = exampleFunction();

  // Expect
  expect(emoji).toEqual('🖥️');
});
