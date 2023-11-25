import React from 'react'

import { Box, Container } from '@mui/material'
import Actions from './Action';
import logo from "../../assets/Image/logo1.svg"
import Location from '../../Screen/Location/Location';
import styled from '@emotion/styled';


const Image=styled('img')({
    marginLeft:'40%',
    marginTop:'10px'
})
const MobileHeader = ({matches}) => {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <Image src={logo} alt='logo'/>
    <Location/>
    </Box>
    <Actions matches={matches}/>
    </>
  )
}

export default MobileHeader