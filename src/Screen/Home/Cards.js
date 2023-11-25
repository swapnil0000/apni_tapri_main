import React, { useState } from 'react'
import { orderData } from '../../Constant/constant'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Dialogs from './Dialogs';






const Cards = () => {
  const [open, setOpen]=useState(false);

const handeOpen=()=>{
    setOpen(true)
}

const handleClose = () => {
  setOpen(false);
};


  return (
   <Box width="990px" sx={{borderRadius:'10px',boxShadow:'none'}}>
    <Grid  container spacing={1} >
       {
        orderData.map((ele)=>(
            <Grid key={ele.id} xs={6} sm={4} md={3} lg={3}>
            <Card sx={{ maxWidth: "250px", height:'250px', margin:'5px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ele.img}
                alt="green iguana"
              />
              <CardContent>
          <Box  variant="h5" component="div" sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <img style={{width:'18px', height:'18px'}} src={ele.veg} alt='grenn'/>
            <Typography sx={{fontSize:'20px',fontFamily:'Lato'}}>{ele.name}</Typography>
            <Typography>{ele.price}</Typography>
          </Box>
         <Box sx={{marginLeft:'100px',marginTop:'10px'}}>
          <Button variant='outlined' onClick={handeOpen}>
           Add
          </Button>
         </Box>
        </CardContent>
            </CardActionArea>
          </Card>
            
            </Grid>
             ))
        }
            </Grid>
            <Box>
            <Dialogs open={open} handleClose={handleClose}/>
            </Box>
            </Box>
  )
}

export default Cards