import React, { useState } from 'react'
import { orderData } from '../../../Constant/constant'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Dialogs from '../Dialogs/Dialogs'
import "../../../animation/animation.css"





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

   <Typography sx={{fontWeight:700,fontSize:'20px', margin:'10px'}}> Order Again</Typography>
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
            <Typography sx={{fontSize:'20px',fontFamily:'sans-serif'}}>{ele.name}</Typography>
            <Typography>{ele.price}</Typography>
          </Box>
         <Box sx={{marginTop:'10px'}}>
          <Button  className='btn' variant='outlined'  onClick={handeOpen}>
           Add 
          </Button>
         </Box>
        </CardContent>
            </CardActionArea>
            <Box>
            <Dialogs id={ele.id} image={ele.img} name={ele.name} price={ele.price}   open={open} handleClose={handleClose}/>
            </Box>
          </Card>
         
            </Grid>
            
             ))
        }
            </Grid>
            </Box>
  )
}

export default Cards