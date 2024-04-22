import Big from 'big.js';

export function getTotalBig(data: any[] = [], field: string): Big {
  return data.reduce((total, curr) => {
    return total.plus(curr[field]);
  }, new Big(0));
}

export function getTotal(data: any[] = [], field: string) {
  return getTotalBig(data, field).valueOf();
}
