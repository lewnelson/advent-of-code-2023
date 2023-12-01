import * as dayTwentyTwo from './';
import { TestCase } from '~/types';

describe('dayTwentyTwo', () => {
  const testCases: TestCase[] = [
    { description: 'not implemented', input: '', expectedOutput: 'not implemented' },
  ];

  describe('partOne', () => {
    test.each(testCases)('$description', ({ input, expectedOutput }) => {
      expect(dayTwentyTwo.partOne(input)).toBe(expectedOutput);
    });
  });
});
