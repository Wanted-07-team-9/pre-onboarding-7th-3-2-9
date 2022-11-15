import { useAppSelector } from '../redux/reducer/hook';

export const OwnAccounts = (id: number) => {
  const { bankData } = useAppSelector(state => state.bankBoardData);
  let countAccounts = 1;
  bankData.map(el => {
    if (id === el.id) {
      countAccounts++;
    }
  });
  return countAccounts;
};

export const IsAgree = (uuid: string) => {
  const { userSetting } = useAppSelector(state => state.bankBoardData);
  let marketing;
  userSetting.map(el => {
    if (uuid === el.uuid) {
      marketing = el.allow_marketing_push;
    }
  });
  return marketing ? 'yes' : 'no';
};

export const IsActive = (id: number) => {
  const { userSetting } = useAppSelector(state => state.bankBoardData);
  userSetting.map(el => {
    if (id === el.id) {
      return el.is_active ? 'check' : 'no';
    }
  });
};
