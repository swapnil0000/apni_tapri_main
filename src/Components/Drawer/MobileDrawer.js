import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { Box, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {draw}   from "../../Constant/constant"
import { Link } from 'react-router-dom';


const drawerWidth = 200;

// OPENMIXIN
const openedMixin = (theme) => ({
    display: 'flex',
    backgroundColor: '#F8F8F8',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

//CLOSEMIXIN

const closedMixin = (theme) => ({
    borderRight: 'hidden',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
});


//DRAWER STYLE

const DrawerStlye = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        backgroundColor: '#F8F8F8',
        borderRight:'hidden',
        marginTop: '50px',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        ...theme.mixins.toolbar,

        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

// IMAGE STYLE


const Drawers = () => {
    const [open, setOpen] = useState(false)
    const handleDrawerClose = () => {
        setOpen(!open);
    };
    return (
        <>
        <DrawerStlye variant="permanent" open={open}>
            <Box display="flex" flexDirection="row" >
                <IconButton
                    onClick={handleDrawerClose}
                    color='black'
                    disablePadding
                    disableRipple
                    sx={{
                        ml: '13px',
                        justifyContent: 'initial',
                    }}
                >
                    <MenuIcon />
                </IconButton>

            </Box>
            <List hidden={!open}>
                {draw.map((ele) => (
                    <Link key={ele.id} style={{ textDecoration: 'none', color: 'black' }} to={ele.path} >
                        <ListItem key={ele.id} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {ele.value}
                                </ListItemIcon>
                                <ListItemText primary={ele.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </DrawerStlye>
        </>
    )
}

export default Drawers