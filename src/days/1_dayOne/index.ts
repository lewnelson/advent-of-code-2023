// https://adventofcode.com/2023/day/1
import { Main } from '~/types';

const getCalibrationValue = (line: string): number | undefined => {
  const numbers = line.match(/\d{1}/g) ?? [];
  if (numbers.length === 0) return undefined;
  let first: string;
  let last: string;
  if (numbers.length === 1) {
    first = numbers[0];
    last = numbers[0];
  } else {
    first = numbers[0]!;
    last = numbers[numbers.length - 1];
  }

  return parseInt(`${first}${last}`, 10);
};

export const partOne: Main = input => {
  return input.split('\n').reduce((sum, line) => {
    const calibrationValue = getCalibrationValue(line);
    if (calibrationValue === undefined) return sum;
    return sum + calibrationValue;
  }, 0);
};

const numbersAsText = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
} as const;

export const partTwo: Main = input => {
  return input.split('\n').reduce((sum, line) => {
    const numericalLine = line.replace(new RegExp(`(${Object.keys(numbersAsText).join('|')})`, 'g'), match => {
      return numbersAsText[match as keyof typeof numbersAsText] ?? '';
    });

    const calibrationValue = getCalibrationValue(numericalLine);
    if (calibrationValue === undefined) return sum;
    return sum + calibrationValue;
  }, 0);
};
