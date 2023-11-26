import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import SearchIcon from '@mui/icons-material/Search';

import logo from "../../assets/Image/logo1.svg"
import styled from '@emotion/styled';
import Location from '../../Screen/Location/Location';
import { AppBar, Avatar, Box, Divider, Input, InputAdornment } from '@mui/material';
import UserDetails from '../UserDetails/UserDetails';

const InputStlye = styled(Input)({
    placeholder: 'What would you like to eat',
    backgroundColor: '#F8F8F8',
    width: '40%',
    variant: 'outlined',
    borderRadius: '25px'
})

export default function DesktopHeader() {

    return (
        <>
            <AppBar position='stick' sx={{ boxShadow: 'none' }}>
                <Toolbar sx={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <img src={logo} alt='logo' />
                    <InputStlye disableUnderline placeholder='What would you like to eat'
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        } />
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                        <Location />
                        <UserDetails />
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider />
        </>
    )
}