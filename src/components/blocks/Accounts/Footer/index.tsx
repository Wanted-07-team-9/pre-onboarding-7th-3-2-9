import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { SelectChangeEvent } from '@mui/material/Select';

import { queriesState } from 'core/states';
import { getAccountPath } from 'utils/AccountPath';

const AccountFooter = ({ totalCount }) => {
  const router = useRouter();
  const [queries, setQueries] = useRecoilState(queriesState);

  totalCount = Math.ceil(parseInt(totalCount) / queries.limit);

  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setQueries({ ...queries, page });
    router.push(getAccountPath({ ...queries, page }), undefined, { shallow: true });
  };

  const onLimitChange = (e: SelectChangeEvent) => {
    const limit = parseInt(e.target.value);
    setQueries({ ...queries, page: 1, limit: limit });
    router.push(getAccountPath({ ...queries, page: 1, limit: limit }), undefined, {
      shallow: true,
    });
  };

  return (
    <StyledFooterDiv>
      <div></div>
      <div>
        <Pagination
          count={totalCount}
          page={queries.page}
          onChange={onPageChange}
          siblingCount={2}
          variant="outlined"
          color="primary"
          className="pagination"
          sx={{ ul: { flexWrap: 'nowrap' } }}
        />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>페이지당 개수</InputLabel>
          <Select
            size="small"
            value={queries.limit.toString()}
            onChange={onLimitChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </div>
    </StyledFooterDiv>
  );
};

const StyledFooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  margin: 1em 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
  }
  > div:last-child {
    @media screen and (max-width: 800px) {
      display: none;
    }
    justify-content: flex-start;
  }
`;
export default AccountFooter;
