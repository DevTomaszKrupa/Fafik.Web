import React from 'react';
import { useDispatch } from 'react-redux';

import components from './styles';
import Button from '@material-ui/core/Button';

import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const AdminMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const logout = () => dispatch({ type: 'LOGOUT' });
  const onLogoutClicked = () => logout();

  const { ProfilBox, ButtonTitle, DropdownMenu, MenuButton } = components;

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ProfilBox>
          <SupervisedUserCircleIcon fontSize="large" htmlColor="#ffffff" />
          <ButtonTitle>PROFIL</ButtonTitle>
          <ArrowDropDownIcon fontSize="large" htmlColor="#000000" />
        </ProfilBox>
      </Button>
      <DropdownMenu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuButton onClick={handleClose}>Ustawienia</MenuButton>
        <MenuButton onClick={onLogoutClicked}>Wyloguj</MenuButton>
      </DropdownMenu>
    </div>
  );
};
export default AdminMenu;
