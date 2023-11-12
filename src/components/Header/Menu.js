import React, { useState } from 'react';
import { Button, Menu as MuiMenu, MenuItem } from '@mui/material';
import Link from 'next/link';

const Menu = ({ title, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {title}
      </Button>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <MenuItem onClick={handleClose} sx={{
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f0',
                color: '#000',
              },
            }}>
              {item.title}
            </MenuItem>
          </Link>
        ))}
      </MuiMenu>
    </div>
  );
};

export default Menu;