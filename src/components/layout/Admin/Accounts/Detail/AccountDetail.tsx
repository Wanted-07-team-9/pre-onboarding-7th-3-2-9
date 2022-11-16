import { Formik } from 'formik';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MuiTypography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faMinus } from '@fortawesome/free-solid-svg-icons';

import { convertAccountNumber } from 'utils/DataFormatter';
import { BROKERS, ACCOUNT_STATUS } from 'utils/DataEnum';
import { convertCurrency, diffAsset } from 'utils/CurrencyFormatter';
import { IDetailData } from './index';

interface IAccountDetail {
  data: IDetailData;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onEditName: (values: { name: string }) => Promise<void>;
}

const Typography = styled(MuiTypography)({
  margin: '16px 0',
});
const AccountDetail = ({ data, isEdit, setIsEdit, onEditName }: IAccountDetail) => {
  const diffColor = diffAsset(data?.assets, data?.payments);

  const diffIcon = () => {
    if (diffColor === 'plus')
      return (
        <span>
          <FontAwesomeIcon icon={faCaretUp} />
        </span>
      );
    else if (diffColor === 'minus')
      return (
        <span>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      );
    return (
      <span>
        <FontAwesomeIcon icon={faMinus} />
      </span>
    );
  };

  return (
    <>
      {data ? (
        <>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              {`${BROKERS[data.broker_id]} (${data.is_active ? '활성' : '비활성'} 계좌)`}
            </Typography>
            {isEdit ? (
              <Formik
                initialValues={{ name: data.name }}
                onSubmit={(values, { setSubmitting }) => {
                  onEditName(values);
                  setSubmitting(false);
                }}
              >
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <form onSubmit={handleSubmit}>
                    <FormControl sx={{ minWidth: 200, maxHeight: 32, pl: 3, pr: 3 }} size="small">
                      <TextField
                        name="name"
                        label="계좌명"
                        value={values.name}
                        size="small"
                        // variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      sx={{ minHeight: 32, maxHeight: 32 }}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      수정 완료
                    </Button>
                  </form>
                )}
              </Formik>
            ) : (
              <Typography variant="h5" component="div">
                {data.name}
              </Typography>
            )}
            <Typography color="text.secondary">
              {`${convertAccountNumber(data.broker_id, data.number)} (${
                ACCOUNT_STATUS[data.status]
              })`}
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h6" component="div">
              계좌주<Typography variant="body1">{data.user_name}</Typography>
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h6" component="div">
              평가금액
              <Typography variant="body1" className={diffColor}>
                {diffIcon()}
                {convertCurrency(data.assets)}
              </Typography>
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h6" component="div">
              입금금액<Typography variant="body1">{convertCurrency(data.payments)}</Typography>
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h6" component="div">
              계좌개설일
              <Typography variant="body1">{new Date(data.created_at).toLocaleString()}</Typography>
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h6" component="div">
              계좌수정일
              <Typography variant="body1">{new Date(data.updated_at).toLocaleString()}</Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setIsEdit(prev => !prev)}>
              수정하기
            </Button>
          </CardActions>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default AccountDetail;
