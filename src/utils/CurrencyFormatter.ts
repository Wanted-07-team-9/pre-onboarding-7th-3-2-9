export const convertCurrency = (currency: string) => {
  return parseInt(currency).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
};

export const diffAsset = (assets: number, payments: number) => {
  if (assets > payments) {
    return 'plus';
  } else if (assets < payments) {
    return 'minus';
  } else {
    return 'principal';
  }
};
