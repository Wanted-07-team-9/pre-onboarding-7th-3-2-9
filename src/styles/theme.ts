import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.plus': {
            color: '#ff0000',
          },
          '&.minus': {
            color: '#0000ff',
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        mt: 0.5,
        mb: 0.5,
        pl: 3,
        pr: 3,
      },
      styleOverrides: {
        root: {
          '&.plus': {
            color: '#ff0000',
          },
          '&.minus': {
            color: '#0000ff',
          },
          '&.principal': {
            color: '#000',
          },
          span: {
            marginRight: '5px',
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: 'flex-end',
        },
      },
    },
  },
};
