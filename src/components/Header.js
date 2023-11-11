// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Логотип и название */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">
            НПФ "Сургутнефтегаз"
          </Typography>
        </Box>

        {/* Навигационные ссылки для больших экранов */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} href="/">Главная</Button>
          <Button color="inherit" component={Link} href="/about">О нас</Button>
          <Button color="inherit" component={Link} href="/services">Услуги</Button>
          <Button color="inherit" component={Link} href="/contact">Контакты</Button>
          <Button color="inherit" component={Link} href="/news">Новости</Button>
          {/* ... остальные кнопки */}
        </Box>

        {/* Меню-гамбургер для мобильных устройств */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} href="/">Главная</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/about">О нас</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/services">Услуги</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/contact">Контакты</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/news">Новости</MenuItem>
            {/* ... остальные пункты меню */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
