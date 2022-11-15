import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { FormHelperText } from '@mui/material';

const AccountFooter = ({ page, limit, totalCount, onPageChange, onLimitChange }) => {
  return (
    <StyledFooterDiv>
      <div></div>
      <div>
        <Pagination
          count={totalCount}
          page={page}
          onChange={onPageChange}
          siblingCount={2}
          variant="outlined"
          color="primary"
          className="pagination"
        />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={limit}
            onChange={onLimitChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
          <FormHelperText>페이지당 개수</FormHelperText>
        </FormControl>
      </div>
    </StyledFooterDiv>
  );
};

const StyledFooterDiv = styled.div`
  display: flex;
  justify-content: center;

  margin: 1em 0;
  > div {
    width: 33%;
  }
`;
export default AccountFooter;
