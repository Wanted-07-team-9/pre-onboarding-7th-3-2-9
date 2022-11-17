import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import Layout from '../../components/common/Layout';
import { useRouter } from 'next/router';
import { useAccountInfo } from '../../hooks/useAccount';
import { userType } from '../../types/userType';
import { accountType } from '../../types/accountType';
import { convertAssest, convertDate } from './../../utils/convert';
import { ACCOUNT_STATUS_TABLE, BROKERS_TABLE } from '../../utils/accountList/accountObj';

const AccountInfo = () => {
  const router = useRouter();
  const { id, user_id } = router.query;

  if (!id || !user_id) {
    return '잘못된 경로 입니다.';
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, isError, accountData, userData] = useAccountInfo(
    parseInt(id.toString()),
    parseInt(user_id.toString())
  );

  if (isLoading) {
    return '로딩중...';
  }

  if (isError) {
    return '에러가 발생하였습니다.';
  }

  const stockReturns = (
    (Number(accountData?.assets) / Number(accountData?.payments)) *
    100
  ).toFixed(2);

  return (
    <AccountInfoBlock>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{accountData?.name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {BROKERS_TABLE[accountData?.broker_id]}
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <InfoBlock>
            <InfoName>소유 고객</InfoName>
            <InfoContent>{userData.name}</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>고객 연락처</InfoName>
            <InfoContent>{userData.phone_number}</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>운용상태</InfoName>
            <InfoContent>{ACCOUNT_STATUS_TABLE[accountData?.status]}</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>계좌 생성일</InfoName>
            <InfoContent>{convertDate(accountData?.created_at)}</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>입금금액</InfoName>
            <InfoContent>{convertAssest(accountData?.payments)} 원</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>평가금액</InfoName>
            <InfoContent>{convertAssest(accountData?.assets)} 원</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>수익률</InfoName>
            <InfoContent
              className={`${
                Number(stockReturns) > 100 ? 'text-red-500' : 'text-blue-500'
              } font-semibold`}
            >
              {stockReturns} %
            </InfoContent>
          </InfoBlock>
        </dl>
      </div>
    </AccountInfoBlock>
  );
};
const AccountInfoBlock = tw.div`
overflow-hidden 
w-full
md:w-[720px] 
xl:w-[1080px] 
shadow 
sm:rounded-lg
`;

const InfoBlock = tw.div`
bg-gray-50 
even:bg-white
px-4 
py-5 
sm:grid 
sm:grid-cols-3 
sm:gap-4 
sm:px-6
`;

const InfoName = tw.dt`
text-sm 
font-medium 
text-gray-500
`;

const InfoContent = tw.dd`
mt-1 
text-sm 
sm:col-span-2 
sm:mt-0
`;

export default AccountInfo;

AccountInfo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
