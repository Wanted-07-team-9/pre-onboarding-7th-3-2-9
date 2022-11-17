import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import Layout from '../../components/common/Layout';
import { useRouter } from 'next/router';
import { useAccountInfo } from '../../hooks/useAccount';

const AccountInfo = () => {
  const router = useRouter();
  const { id, user_id } = router.query;

  return (
    <AccountInfoBlock>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">계좌명</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">증권사</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <InfoBlock>
            <InfoName>소유 고객</InfoName>
            <InfoContent>이름</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>고객 연락처</InfoName>
            <InfoContent>연락처</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>운용상태</InfoName>
            <InfoContent>상태값</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>계좌 생성일</InfoName>
            <InfoContent>일자</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>입금금액</InfoName>
            <InfoContent>금액</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>평가금액</InfoName>
            <InfoContent>평가금</InfoContent>
          </InfoBlock>
          <InfoBlock>
            <InfoName>수익률</InfoName>
            <InfoContent>수익률</InfoContent>
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
text-gray-900 
sm:col-span-2 
sm:mt-0
`;

export default AccountInfo;

AccountInfo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
