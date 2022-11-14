import { useAppSelector } from '../redux/reducer/hook';

type accountStatusType = {
  [key: string]: number;
};

const data: accountStatusType = {
  관리자확인필요: 9999,
  입금대기: 1,
  운용중: 2,
  투자중지: 3,
  해지: 4,
};

export const statusNm = (codeNm: number) => {
  for (let i in data) {
    if (codeNm === data[i]) {
      return i;
    }
  }
};

type stringType = {
  [key: string]: string;
};

const bkCompanyData: stringType = {
  209: '유안타증권',
  218: '현대증권',
  230: '미래에셋증권',
  238: '대우증권',
  240: '삼성증권',
  243: '한국투자증권',
  247: '우리투자증권',
  261: '교보증권',
  262: '하이투자증권',
  263: 'HMC투자증권',
  264: '키움증권',
  265: '이베스트투자증권',
  266: 'SK증권',
  267: '대신증권',
  268: '아이엠투자증권',
  269: '한화투자증권',
  270: '하나대투자증권',
  279: '동부증권',
  280: '유진투자증권',
  288: '카카오페이증권',
  287: '메리츠종합금융증권',
  290: '부국증권',
  291: '신영증권',
  292: 'LIG투자증권',
  271: '토스증권',
};

export const bkCompanyNm = (codeNm: string) => {
  for (let i in bkCompanyData) {
    if (codeNm === i) {
      return bkCompanyData[i];
    }
  }
};

// type stringOrNumType = {
//   [key: string]: string | number;
// };

export const UserNm = (id: number) => {
  const { userData } = useAppSelector(state => state.bankBoardData);
  let userName;
  userData.map(el => {
    if (id === el.id) {
      userName = el.name;
    }
  });
  return userName;
};

export const accounNm = (account: string) => {
  const star = account.substring(2, 11);
  const match = new RegExp(star);
  return account.replace(match, `********`);
};

export const countMoney = (money: string) => {
  const abs = Math.ceil(Number(money));
  const thousand = abs.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return thousand;
};

export const isActive = (yOrN: boolean) => {
  const yesOrNo = !yOrN ? '☑️' : '❌';
  return yesOrNo;
};
