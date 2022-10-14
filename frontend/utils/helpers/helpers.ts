import { v4 as uuidv4 } from 'uuid';

export const uniqueKey = () => uuidv4();

export const addZeroes = (num: number) => {
  const value = String(num);
  const origVal = value.split('.');
  let result = '';
  if (origVal.length === 1 || origVal[1].length < 3) {
    result = num.toFixed(2);
  }
  result = result.replace('.', ',');
  return result;
};
