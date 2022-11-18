import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const PaginationSkeleton = () => {
  return (
    <Stack direction="row" spacing={1}>
      {Array.from({ length: 10 }, () => 0).map((_, i) => (
        <Skeleton key={i} variant="circular" width={32} height={32} animation="wave" />
      ))}
    </Stack>
  );
};

export default PaginationSkeleton;
