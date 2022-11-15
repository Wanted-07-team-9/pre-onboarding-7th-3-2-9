export const convertCurrency = (currency: string) => {
  return parseInt(currency).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
};

export const diffAsset = (assets: number, payments: number) => {
  if (assets > payments) {
    return 'plus_payments';
  } else if (assets < payments) {
    return 'minus_payments';
  } else {
    return 'principal';
  }
};
