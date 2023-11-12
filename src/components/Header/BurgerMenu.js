import React, { useState } from 'react';
import { IconButton, Menu as MuiMenu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu'; // Предполагаем, что Menu импортируется из файла Menu.js

const BurgerMenu = ({ items }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu title="Меню" items={items} anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};

export default BurgerMenu;
