import React from 'react';
import { Button } from '@mui/material';

const NavItem = ({ title, onClick }) => {
    return (
        <Button color="inherit" onClick={onClick}>
            {title}
        </Button>
    );
};

export default NavItem;
