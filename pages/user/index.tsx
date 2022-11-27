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
              <Pagination total={data.totalData!} page={page} />
            </TableWrapper>
          )
        }
      </Wrapper>
    </Layout>
  )
}

export const getServerSideProps = async(context : any) => {
  const queryClient = new QueryClient();
  const accessToken = context.req.cookies.accessToken
  const page = context.query.page || 1
  await queryClient.prefetchQuery(['userList', page],() => fetchUserListServer(page, accessToken))
  return{
    props : {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default User