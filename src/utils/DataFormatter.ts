import { BROKER_FORMAT } from './DataEnum';

export const convertAccountNumber = (broker_id: string, accNumber: string) => {
  const format = BROKER_FORMAT[broker_id];
  const regex = /-/g;
  const arrIndex = [...format.matchAll(regex)].map(s => s.index);
  const markingNumber =
    accNumber.slice(0, 2) + ''.padEnd(accNumber.length - 4, '*') + accNumber.slice(-2);

  const arrNum = [];
  const acc = arrIndex.reduce((cur, acc, index) => {
    if (index > 1) {
      arrNum.push(markingNumber.slice(cur - (index - 1), acc - index));
    } else {
      arrNum.push(markingNumber.slice(cur, acc - index));
    }
    return acc;
  }, 0);
  arrNum.push(markingNumber.slice(acc - (arrIndex.length - 1)));
  return arrNum.join('-');
};
