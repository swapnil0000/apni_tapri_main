import React from 'react'
import LocImage from "../../assets/Image/Vector.svg"
import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import { Link,  } from 'react-router-dom'


const Location = () => {

    const Image=styled('img')({
        width: '33px',
        height: "36px",
        cursor:'pointer'
    })
  return (
      <Box  sx={{display:'flex',alignItems:'center'}}>
     <Link to="/location" >
     <Image  src={LocImage} alt='Location'/>
     </Link>
     <Typography  variant='body2' sx={{color:'black', fontFamily:'revert'  }}>Prayagraj</Typography>
     </Box>
  )
}

export default Location