import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import MuiTypography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Skeleton from '@mui/material/Skeleton';

type ExtraProps = {
  component?: React.ElementType;
};
const Typography = styled(MuiTypography)<ExtraProps>({
  margin: '16px 0',
});

const DetailSkeleton = () => {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 18, minHeight: 32 }} color="text.secondary" gutterBottom>
          <Skeleton variant="rounded" width={210} height={20} animation="wave" />
        </Typography>
        <Typography sx={{ minHeight: 40 }} variant="h5" component="div">
          <Skeleton variant="rounded" width={300} height={20} animation="wave" />
        </Typography>
        <Typography color="text.secondary">
          <Skeleton variant="rounded" width={150} height={20} animation="wave" />
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" component="div">
          계좌주
          <Typography variant="body1">
            <Skeleton variant="rounded" width={120} height={20} animation="wave" />
          </Typography>
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" component="div">
          평가금액
          <Typography variant="body1">
            <Skeleton variant="rounded" width={180} height={20} animation="wave" />
          </Typography>
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" component="div">
          입금금액
          <Typography variant="body1">
            <Skeleton variant="rounded" width={180} height={20} animation="wave" />
          </Typography>
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" component="div">
          계좌개설일
          <Typography variant="body1">
            <Skeleton variant="rounded" width={250} height={20} animation="wave" />
          </Typography>
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" component="div">
          계좌수정일
          <Typography variant="body1">
            <Skeleton variant="rounded" width={250} height={20} animation="wave" />
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Skeleton variant="rounded" width={70} height={35} animation="wave" />
        <Skeleton variant="rounded" width={70} height={35} animation="wave" />
        <Skeleton variant="rounded" width={70} height={35} animation="wave" />
      </CardActions>
    </>
  );
};
export default DetailSkeleton;
