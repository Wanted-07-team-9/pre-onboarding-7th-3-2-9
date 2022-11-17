import useUserService from '../hooks/useUserService';

export const ACCOUNT_STATUS = {
  '9999': '관리자확인필요',
  '1': '입금대기',
  '2': '운용중',
  '3': '투자중지',
  '4': '해지',
} as const;
type ACCOUNT_STATUS = typeof ACCOUNT_STATUS[keyof typeof ACCOUNT_STATUS];

export const BROKERS = {
  '209': '유안타증권',
  '218': '현대증권',
  '230': '미래에셋증권',
  '238': '대우증권',
  '240': '삼성증권',
  '243': '한국투자증권',
  '247': '우리투자증권',
  '261': '교보증권',
  '262': '하이투자증권',
  '263': 'HMC투자증권',
  '264': '키움증권',
  '265': '이베스트투자증권',
  '266': 'SK증권',
  '267': '대신증권',
  '268': '아이엠투자증권',
  '269': '한화투자증권',
  '270': '하나대투자증권',
  '279': '동부증권',
  '280': '유진투자증권',
  '288': '카카오페이증권',
  '287': '메리츠종합금융증권',
  '290': '부국증권',
  '291': '신영증권',
  '292': 'LIG투자증권',
  '271': '토스증권',
} as const;
type BROKERS = typeof BROKERS[keyof typeof BROKERS];

export const BROKER_FORMAT = {
  '209': '00-00000000-00',
  '218': '00-0000000-000',
  '230': '00-000000-0000',
  '238': '00-000-0000-000',
  '240': '00-0000-000000',
  '243': '00-000000000-0',
  '247': '00-0000-000000',
  '261': '00-00-00000000',
  '262': '00-0000000-000',
  '263': '00-0000-000000',
  '264': '00-0000-00-0000',
  '265': '00-000-000-0000',
  '266': '00-00000-00000',
  '267': '00-000-0000000',
  '268': '00-000000-00-00',
  '269': '00-00000-00000',
  '270': '00-000-0000000',
  '279': '00-00000-00000',
  '280': '00-0000-000000',
  '288': '00-00000000-00',
  '287': '00-0000-00000-0',
  '290': '00-000000-0000',
  '291': '00-0000-000000',
  '292': '00-00000-00000',
  '271': '00-000-0000000',
} as const;
type BROKER_FORMAT = typeof BROKER_FORMAT[keyof typeof BROKER_FORMAT];

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

export const UserNm = (user_id: string) => {
  const { usersData } = useUserService();
  let userName;
  usersData?.map(el => {
    if (user_id === el.id) {
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
