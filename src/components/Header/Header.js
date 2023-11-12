import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import FundMenuItems from '../../utils/Menu/FundMenu';
import ProgramsMenuItems from '../../utils/Menu/ProgramsMenuItems';
import PerformanceIndicatorsMenuItems from '../../utils/Menu/PerformanceIndicatorsMenuItems';
import ClientsNpfMenuItems from '../../utils/Menu/ClientsNpfMenuItems';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    НПФ Сургутнефтегаз
                </Typography>
                <Menu title="О Фонде" items={FundMenuItems} />
                <Menu title="Программы" items={ProgramsMenuItems} />
                <Menu title="Показатели деятельности" items={PerformanceIndicatorsMenuItems} />
                <Menu title="Клиентам НПФ" items={ClientsNpfMenuItems} />
                <Button color="inherit">Личный Кабинет</Button>
                <Button color="inherit">Обратиться в Фонд</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
