import { statusNm, bkCompanyNm, UserNm, accounNm, countMoney, isActive } from './dataUtils';

export const COLUMNS = [
  {
    Header: '고객명',
    accessor: 'user_id',
    Cell: (props: { value: number }) => {
      const userNm = UserNm(props.value);
      return userNm;
    },
  },
  {
    Header: '증권사',
    accessor: 'broker_id',
    Cell: (props: { value: string }) => {
      const bkCompany = bkCompanyNm(props.value);
      console.log(bkCompany);
      return bkCompany;
    },
  },
  {
    Header: '계좌번호',
    accessor: 'number',
    Cell: (props: { value: string }) => {
      const account = accounNm(props.value);
      return account;
    },
  },
  {
    Header: '계좌상태',
    accessor: 'status',
    Cell: (props: { value: number }) => {
      const statusName = statusNm(props.value);
      return statusName;
    },
  },
  {
    Header: '계좌명',
    accessor: 'name',
  },
  {
    Header: '평가금액',
    accessor: 'assets',
    Cell: (props: { value: string }) => {
      const newThousand = countMoney(props.value);
      return newThousand;
    },
  },
  {
    Header: '입금금액',
    accessor: 'payments',
    Cell: (props: { value: string }) => {
      const newThousand = countMoney(props.value);
      return newThousand;
    },
  },
  {
    Header: '계좌활성화여부',
    accessor: 'is_active',
    Cell: (props: { value: boolean }) => {
      const yesOrNo = isActive(props.value);
      return yesOrNo;
    },
  },
  {
    Header: '계좌개설일',
    accessor: 'created_at',
  },
];
