import * as dayOne from './';
import { TestCase } from '~/types';

describe('dayOne', () => {
  const testCases: TestCase[] = [
    { description: 'given the sample input the expected output is 142', input: `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`, expectedOutput: 142 },
  ];

  describe('partOne', () => {
    test.each(testCases)('$description', ({ input, expectedOutput }) => {
      expect(dayOne.partOne(input)).toBe(expectedOutput);
    });
  });

  describe('partTwo', () => {
    const testCases: TestCase[] = [
      { description: 'given the sample input the expected output is 281', input: `two1nine
      eightwothree
      abcone2threexyz
      xtwone3four
      4nineeightseven2
      zoneight234
      7pqrstsixteen`, expectedOutput: 281 },
    ];

    test.each(testCases)('$description', ({ input, expectedOutput }) => {
      expect(dayOne.partTwo(input)).toBe(expectedOutput);
    });
  });
});
