import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface IConfirmDialog {
  title: string;
  contents: React.ReactElement;
  buttons: {
    fn: () => void;
    name: string;
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  }[];
  open: boolean;
  dialogClose: () => void;
}

const ConfirmDialog = ({ title, contents, buttons, open, dialogClose }: IConfirmDialog) => {
  return (
    <Dialog open={open} onClose={dialogClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{contents}</DialogContent>
      <DialogActions>
        {buttons.map(({ fn, name, color }, index) => {
          return (
            <Button key={index} variant="contained" onClick={fn} color={color}>
              {name}
            </Button>
          );
        })}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
