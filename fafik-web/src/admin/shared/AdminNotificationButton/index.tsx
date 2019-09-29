import React from 'react';

import components from './styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';

const AdminNotificationButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { DropdownMenu, NotificationBox, NotificationsQuantity } = components;

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <NotificationBox>
          <NotificationsIcon htmlColor="#F2EEE8" fontSize="large" />
          <NotificationsQuantity>1</NotificationsQuantity>
        </NotificationBox>
      </Button>
      <DropdownMenu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}></MenuItem>
      </DropdownMenu>
    </div>
  );
};
export default AdminNotificationButton;
