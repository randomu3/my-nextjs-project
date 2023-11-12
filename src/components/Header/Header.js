import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import FundMenuItems from '../../utils/Menu/FundMenu';
import ProgramsMenuItems from '../../utils/Menu/ProgramsMenuItems';
import PerformanceIndicatorsMenuItems from '../../utils/Menu/PerformanceIndicatorsMenuItems';
import ClientsNpfMenuItems from '../../utils/Menu/ClientsNpfMenuItems';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const Header = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <AppBar position="static">
            <Toolbar>
                {!isDesktop && (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    НПФ Сургутнефтегаз
                </Typography>
                {isDesktop && (
                    <>
                        <Menu title="О Фонде" items={FundMenuItems} />
                        <Menu title="Клиентам НПФ" items={ClientsNpfMenuItems} />
                        <Menu title="Программы" items={ProgramsMenuItems} />
                        <Menu title="Показатели деятельности" items={PerformanceIndicatorsMenuItems} />
                    </>
                )}
                <Link href="/personal-account" passHref>
                    <Button
                        color="inherit"
                        sx={{
                            color: 'white',
                            backgroundColor: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}
                    >
                        Личный Кабинет
                    </Button>
                </Link>
                <Link href="/contact-fund" passHref>
                    <Button
                        color="inherit"
                        sx={{
                            color: 'white',
                            backgroundColor: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}
                    >
                        Обратиться в Фонд
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
