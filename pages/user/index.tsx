import Pagination from "../../src/components/Pagination"
import Table from "../../src/components/Table"
import { useState } from "react"
import {TableWrapper } from '../../src/components/Table/style'
import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "../../src/api/api"
import { USERS_COLUMNS } from '../../src/utils/constantValue'
import Layout from "../../src/container"

const User = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useQuery(
    ['userList', page], () => fetchUser(page)
  )
  return (
    <Layout>
      {isLoading && <div>loading</div>}
      {isError && <div>error</div>}
      {data &&
        (
          <TableWrapper>
            <Table columns={USERS_COLUMNS} data={data.userData} isAccount={false} />
            <Pagination total={data.totalData!} page={page} setPage={setPage} />
          </TableWrapper>
        )
      }
    </Layout>
  )
}

export default User