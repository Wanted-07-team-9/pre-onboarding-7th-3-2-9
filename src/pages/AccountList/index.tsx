import React, { ReactElement, useEffect } from 'react';
import Layout from './../../components/common/Layout';
import { useAuth } from './../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { QueryClient, dehydrate, useQueries } from '@tanstack/react-query';
import { accountAPI } from './../../api/accountAPI';
import tw from 'twin.macro';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { userAPI } from './../../api/userAPI';
import { accountMerged } from '../../utils/accountList/account';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useAccountList } from './../../hooks/useAccount';
import { pagination } from './../../utils/pagination';
import { ACOOUNT_TABLE } from '../../utils/accountList/accountObj';
import Link from 'next/link';

const AccountHome = () => {
  const { user } = useAuth();
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page as string, 10) : 1;
  const defaultOffset = Math.ceil(page / 5) - 1;
  const [offSet, setOffSet] = useState(0);
  const [userData, accountData] = useAccountList(page);

  useEffect(() => {
    setOffSet(defaultOffset);
  }, [defaultOffset]);

  if (userData.isLoading || accountData.isLoading) {
    return <>Loading...</>;
  }
  if (!user?.accessToken) {
    return '허가되지 않은 접근입니다.';
  }
  const { count, mergedData } = accountMerged(userData, accountData);

  const paginationArr = pagination(parseInt(count!));
  const paginationRender = (pagiArr: number[]) => {
    return pagiArr.map((pageNumber: number, idx: number) => (
      <PaginationLi
        isActive={pageNumber === page}
        onClick={() => router.push(`?page=${pageNumber}`)}
        key={`${pageNumber}_${idx}`}
      >
        {pageNumber}
      </PaginationLi>
    ));
  };

  return (
    <>
      <div className="p-4 w-[720px] xl:w-[1440px] overflow-x-auto overflow-y-hidden  shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {ACOOUNT_TABLE.map((accountInfo, idx) => (
                <HeadThBlock key={`head_${idx}`}>{accountInfo[0]}</HeadThBlock>
              ))}
            </tr>
          </thead>
          <tbody>
            {mergedData?.map((accountData: any, idx: number) => {
              //FIXME : any형식 사용
              return (
                <Link
                  key={`${accountData.id}_${accountData.user_id}_${idx}`}
                  href={`Account/${accountData.id}/?&user_id=${accountData.user_id}`}
                >
                  <BodyTrBlock>
                    {ACOOUNT_TABLE.map((accountInfo, idx) => {
                      const type = accountInfo[1];

                      if (type === 'assets') {
                        const isrevenue =
                          parseInt(accountData.payments) - parseInt(accountData.assets) < 0;
                        return (
                          <BodyThBlock
                            key={`${idx}`}
                            scope="row"
                            className={`${isrevenue ? 'text-red-800' : 'text-blue-800'} `}
                          >
                            {accountData[type].toString()}
                          </BodyThBlock>
                        );
                      }

                      return (
                        <BodyThBlock key={`${idx}`} scope="row">
                          {accountData[type].toString()}
                        </BodyThBlock>
                      );
                    })}
                  </BodyTrBlock>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <PaginationWrapper>
          <PaginationUl>
            {offSet !== 0 && (
              <PaginationButton onClick={() => setOffSet(prev => prev - 1)}>
                <GrPrevious />
              </PaginationButton>
            )}

            {paginationRender(paginationArr[offSet])}

            {offSet < paginationArr.length - 1 && (
              <PaginationButton onClick={() => setOffSet(prev => prev + 1)}>
                <GrNext />
              </PaginationButton>
            )}
          </PaginationUl>
        </PaginationWrapper>
      </div>
    </>
  );
};

export default AccountHome;
export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const page = context.query.page ? parseInt(context.query.page as string, 10) : 1;
  await Promise.all([
    queryClient.prefetchQuery(['userList'], userAPI.getUser),
    queryClient.prefetchQuery(['AccountList', 1], () => accountAPI.getList(page)),
  ]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HeadThBlock = tw.th`
py-3 
px-6
`;
const BodyTrBlock = tw.tr`
bg-white 
border-b 
dark:bg-gray-800 
dark:border-gray-700 
hover:bg-gray-50 
dark:hover:bg-gray-600
`;

const BodyThBlock = tw.th`
py-4 px-6   whitespace-nowrap dark:text-white
`;

const PaginationWrapper = tw.div`
py-10
`;
const PaginationUl = tw.ul`
flex 
justify-center 
items-center
`;
const PaginationButton = tw.div`
transition 
duration-150 
ease-in-out 

flex 
leading-tight 
font-bold 
text-gray-500 
rounded 
mx-2 
sm:mx-4 
px-3 
py-2 


text-lg
cursor-pointer 

hover:scale-125
focus:outline-none 
`;

const PaginationLi = styled.li(({ isActive }: { isActive: boolean }) => [
  isActive ? tw`bg-blue-200` : '',
  tw`
  transition 
  duration-150 
  ease-in-out 
  flex 
  mx-2 
  sm:mx-4 
  px-3 
  py-2 
  rounded 
  text-base
  cursor-pointer 
  shadow 
  
  text-indigo-700 
  leading-tight 
  font-bold 
  focus:outline-none
  hover:bg-indigo-600 
  hover:text-white 
  `,
]);

AccountHome.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
