import { OwnAccounts, IsAgree, IsActive } from './userDataUtils';

export const USER_COLUMNS = [
  {
    Header: '고객명',
    accessor: 'name',
  },
  {
    Header: '보유계좌',
    accessor: 'id',
    Cell: (props: { value: number }) => {
      const accountsNum = OwnAccounts(props.value);
      return accountsNum;
    },
  },
  {
    Header: '이메일',
    accessor: 'email',
  },
  {
    Header: '성별',
    accessor: 'gender_origin',
  },
  {
    Header: '생년월일',
    accessor: 'birth_date',
  },
  {
    Header: '휴대폰 번호',
    accessor: 'phone_number',
  },
  {
    Header: '최근로그인',
    accessor: 'last_login',
  },
  {
    Header: '혜택 수신 동의 여부',
    accessor: 'uuid',
    Cell: (props: { value: string }) => {
      const agreePush = IsAgree(props.value);
      return agreePush;
    },
  },
  {
    Header: '활성화 여부',
    Cell: (props: { value: number }) => {
      const activeCheck = IsActive(props.uuid);
      return activeCheck;
    },
  },
  {
    Header: '계좌개설일',
    accessor: 'created_at',
  },
];
