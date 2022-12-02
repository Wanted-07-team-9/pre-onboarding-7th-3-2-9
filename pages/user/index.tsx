import Pagination from "../../src/components/Pagination"
import Table from "../../src/components/Table"
import { TableWrapper } from '../../src/components/Table/style'
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { fetchUserListClient, fetchUserListServer } from "../../src/api/api"
import { USERS_COLUMNS } from '../../src/utils/constantValue'
import Layout from "../../src/container"
import Loading from "../../src/components/InfoScreen/Loading"
import { Wrapper } from "../../src/container/style"
import { RouterInfo } from "../../src/utils/RouterInfo"
import { GetServerSideProps } from "next"
const User = () => {
  const {page}   = RouterInfo()
  const { data, isLoading, isError } = useQuery(
    ['userList', page], () => fetchUserListClient(page)
  )
  return (
    <Layout>
      <Wrapper>
        {isLoading && <Loading status='lodading' />}
        {isError && <div>error</div>}
        {data &&
          (
            <TableWrapper>
              <Table columns={USERS_COLUMNS} data={data.userData} isAccount={false} />
              <Pagination total={data.totalData!}/>
            </TableWrapper>
          )
        }
      </Wrapper>
    </Layout>
  )
}

export const getServerSideProps : GetServerSideProps = async(context) => {

  const accessToken = context.req.cookies.accessToken
  if(!accessToken){
    context.res.writeHead(303, {Location : '/'})
    context.res.end()
  }
  const queryClient = new QueryClient();
  const page = context.query.page || 1
  await queryClient.prefetchQuery(['userList', page],() => fetchUserListServer(page, accessToken))
  return{
    props : {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default User