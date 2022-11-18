import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const TableSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }, () => 0).map((_, i) => (
        <TableRow key={i}>
          <TableCell colSpan={9} align="center">
            <Skeleton variant="rounded" height={20} animation="wave" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TableSkeleton;
