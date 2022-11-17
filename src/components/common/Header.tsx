import React from 'react';
import { useRouter } from 'next/router';

import { useSetRecoilState } from 'recoil';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import { SIDER } from 'utils/DataEnum';
import { sideState } from 'core/states';

const hasPath = path => {
  return SIDER.find(side => path.includes(side.keyword));
};

const Header = () => {
  const router = useRouter();
  const setOpen = useSetRecoilState(sideState);
  const title = hasPath(router.asPath.replace('/admin/', ''));
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(prev => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {title?.name}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-evenly',
            alignItems: 'center',
            minWidth: 250,
          }}
        >
          <Chip variant="outlined" color="warning" size="small" label="개발" />
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faCircleQuestion} />
          </IconButton>
          <IconButton aria-label="show 99+ new alarms" color="inherit">
            <Badge badgeContent={'99+'} color="error">
              <FontAwesomeIcon icon={faBell} />
            </Badge>
          </IconButton>
          <Avatar>9팀</Avatar>
          {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
