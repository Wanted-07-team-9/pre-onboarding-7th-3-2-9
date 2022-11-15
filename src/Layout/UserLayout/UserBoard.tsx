import UserTable from '../../components/common/main/UserTable';
import * as S from '../../styles/MainStyle';

import React from 'react';

function UserBoard() {
  return (
    <S.BankBoardStyle>
      <UserTable />
    </S.BankBoardStyle>
  );
}

export default UserBoard;
