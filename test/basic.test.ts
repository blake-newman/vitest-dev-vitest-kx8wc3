import { expect, test } from 'vitest';
import { addTwice } from '../src/add-twice';

test('add twice', () => {
  expect(addTwice(2, 1)).toBe(4);
});
