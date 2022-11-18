import { Dispatch, SetStateAction, useState } from 'react';

import { Formik } from 'formik';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MuiTypography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import DialogContentText from '@mui/material/DialogContentText';
import Switch from '@mui/material/Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faMinus } from '@fortawesome/free-solid-svg-icons';

import { convertAccountNumber } from 'utils/DataFormatter';
import { BROKERS, ACCOUNT_STATUS } from 'utils/DataEnum';
import { convertCurrency, diffAsset } from 'utils/CurrencyFormatter';
import { IAccountData } from 'core/services/types';
import ConfirmDialog from 'components/blocks/ConfirmDialog';
import { useRouter } from 'next/router';
import { useFormatLocaleDate } from 'core/services/hooks/useFormattedDate';

interface IAccountDetail {
  data: IAccountData;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onEditAccount: (values: { name: string }) => void;
  onDeleteAccount: () => void;
}
type ExtraProps = {
  component?: React.ElementType;
};

const Typography = styled(MuiTypography)<ExtraProps>({
  margin: '16px 0',
});

const AccountDetail = ({
  data,
  isEdit,
  setIsEdit,
  onEditAccount,
  onDeleteAccount,
}: IAccountDetail) => {
  const router = useRouter();
  const [delOpen, setDelOpen] = useState(false);
  const diffColor = diffAsset(+data?.assets, +data?.payments);

  const created_at = useFormatLocaleDate(data?.created_at);
  const updated_at = useFormatLocaleDate(data?.updated_at);

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

  const delDialogClose = () => {
    setDelOpen(false);
  };

  const goToList = () => {
    router.push('/admin/accounts');
  };

  return (
    <>
      {data ? (
        <>
          <CardContent>
            {isEdit ? (
              <>
                <Formik
                  initialValues={{ name: data.name, is_active: JSON.parse(data.is_active) }}
                  onSubmit={(values, { setSubmitting }) => {
                    onEditAccount(values);
                    setSubmitting(false);
                  }}
                >
                  {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                      <Typography
                        sx={{ fontSize: 18, minHeight: 32 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        <span>{BROKERS[data.broker_id]}</span>
                        <Switch
                          sx={{ ml: 1 }}
                          name="is_active"
                          defaultChecked={values.is_active}
                          onChange={handleChange}
                        />
                      </Typography>
                      <FormControl sx={{ minWidth: 200, maxHeight: 32, pl: 3, pr: 3 }} size="small">
                        <TextField
                          name="name"
                          label="계좌명"
                          value={values.name}
                          size="small"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                      </FormControl>
                      <Button
                        variant="contained"
                        sx={{ minHeight: 40 }}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        수정 완료
                      </Button>
                    </form>
                  )}
                </Formik>
              </>
            ) : (
              <>
                <Typography
                  sx={{ fontSize: 18, minHeight: 32 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {`${BROKERS[data.broker_id]} (${
                    JSON.parse(data.is_active) ? '활성' : '비활성'
                  } 계좌)`}
                </Typography>
                <Typography sx={{ minHeight: 40 }} variant="h5" component="div">
                  {data.name}
                </Typography>
              </>
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
              <Typography variant="body1">{created_at}</Typography>
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h6" component="div">
              계좌수정일
              <Typography variant="body1">{updated_at}</Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="info" size="small" onClick={goToList}>
              목록으로
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="small"
              onClick={() => setIsEdit(prev => !prev)}
            >
              수정하기
            </Button>
            <Button variant="contained" color="error" size="small" onClick={() => setDelOpen(true)}>
              삭제하기
            </Button>
          </CardActions>
          <ConfirmDialog
            open={delOpen}
            dialogClose={delDialogClose}
            title={`${data.name} 계좌를 삭제하시겠습니까?`}
            contents={
              <>
                {`${BROKERS[data.broker_id]} (${convertAccountNumber(
                  data.broker_id,
                  data.number
                )}) (${data.user_name})`}
                <DialogContentText>계좌 삭제시 되돌릴수 없습니다.</DialogContentText>
              </>
            }
            buttons={[
              { fn: delDialogClose, name: '취소', color: 'inherit' },
              { fn: onDeleteAccount, name: '삭제', color: 'error' },
            ]}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default AccountDetail;
