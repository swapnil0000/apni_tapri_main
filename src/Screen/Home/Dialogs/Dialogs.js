import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Container, Divider, IconButton, Radio, Typography } from '@mui/material';
import veg from "../Dialogs/veg.png"
import CancelIcon from '@mui/icons-material/Cancel';
import ShareIcon from '@mui/icons-material/Share';



export default function Dialogs({id,image,name,price,open,handleClose}) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Dialog className='dialog' maxWidth='300px'
       sx={{borderRadius:'10px'}}
       fullScreen={fullScreen}
        open={open}
      >
        <DialogContent sx={{ width: '700px', height: '550px',  }}>
        <Box sx={{display:'flex',flexDirection:'row'}}>
         <Box >

         <Box sx={{gap:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
         <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:2}}>
          <img src={veg} alt='veg'/>
          <Typography sx={{
            fontFamily:'sans-serif',
            lineHeight:'5px',
            fontWeight:400,
            fontSize:'20px'
          }}>{name}
          </Typography>
          </Box>

          <ShareIcon/>
          </Box>
          
          <Box>
           <img style={{width:'330px' ,height:'220px',marginTop:"30px"}} src={image} alt='burger'/>
          </Box>

          <Box>
           <Typography sx={{marginTop:'10px',fontFamily:'sans-serif'}}>Iusto excepturi, consectetur, turpis.<br/> Eget eros molestie necessitatibus diamlorem,<br/> dolorem lobortis</Typography>
          </Box>

          <Box sx={{display:'flex',flexDirection:'row',gap:30, alignItems:'center'}}>
           <Typography sx={{fontWeight:500}}>{price}</Typography>
           <Box sx={{display:'flex',flexDirection:'row',backgroundColor:'white',gap:.1,border:'1px solid orange',width:'80px',height:'20px',marginTop:'12px',alignItems:'center',borderRadius:'5px',justifyContent:'space-between'}}>
           <AddIcon/>
           <Divider orientation='vertical'/>
           <span>0</span>
           <Divider orientation='vertical'/>
          <RemoveIcon/>
         </Box>
          </Box>
          </Box>


          <Box sx={{height:'500px',margin:'10px'}}>
          <Divider orientation='vertical'/>
          </Box>


         <Box>

         <Box sx={{marginLeft:'300px'}}>
         <IconButton onClick={handleClose}>
         <CancelIcon />
         </IconButton>
          </Box>

          <Box>
           <Typography sx={{fontSize:'20px' ,marginLeft:'10px'}}>Select Size</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
           <Radio/>
           <Typography>Mini Meal</Typography>
           </Box>
           <Typography> $ 10</Typography>
          </Box>

          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
          <Radio/>
          <Typography>All-in-1 Meal</Typography>
          </Box>
          <Typography> $ 10</Typography>
         </Box>

         <Box>
         <Typography sx={{fontSize:'20px' ,marginLeft:'10px'}}>Select Base</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
         <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
         <Radio/>
         <Typography>Mini Meal</Typography>
         </Box>
         <Typography> $ 10</Typography>
        </Box>

        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
        <Radio/>
        <Typography>All-in-1 Meal</Typography>
        </Box>
        <Typography> $ 10</Typography>
       </Box>

       <Box>
       <Typography sx={{fontSize:'20px' ,marginLeft:'10px'}}>Select Coldrinks</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
       <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
       <Radio/>
       <Typography>Cocal Cola</Typography>
       </Box>
       <Typography> $ 30</Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
      <Radio/>
      <Typography>Limca</Typography>
      </Box>
      <Typography> $ 20</Typography>
     </Box>


    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
    <Radio/>
    <Typography>Cocal Cola</Typography>
    </Box>
    <Typography> $ 10</Typography>
   </Box>


      <Button variant='contained' sx={{textDecorationStyle:'dashed',width:'100%',marginTop:'30px'}}>Checkout</Button>

         </Box>
        </Box>
        </DialogContent>

      </Dialog>
    </Container>
  );
}