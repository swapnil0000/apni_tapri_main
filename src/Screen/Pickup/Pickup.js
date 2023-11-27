import { Box, Button, Container, Divider, Input, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DiningIcon from '@mui/icons-material/Dining';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import map from '../../Components/RightSide/Map.png'
import veg from "../../Components/RightSide/veg.png"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';

const Pickup = () => {
  const ButtonStyle =styled('Button')({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'90px',
    height:'30px',
    marginTop:'10px',
    backgroundColor:theme.palette.secondary.main,
    borderRadius:'10px' , 
    gap:1,
    fontWeight:400,
    border:'none'
})
const InputStlye = styled(Input)({
  placeholder: 'What would you like to eat',
  backgroundColor: '#F8F8F8',
  marginTop:'50px',
  width: '650px',
  variant: "filled",
  borderRadius: '25px',
  border:'1px solid black',
})
const Veg=styled('img')({
  width:'18px',
  height:'17px',
  marginTop:'12px',
  marginLeft:'6px'
})
const Image=styled('img')({
  margin:'2px'
})
  return (
    <Container  maxWidth='lg'>
    <Box sx={{display:'flex', flexDirection:'row',height:'750px'}}>
    <Box sx={{marginLeft:'20px' , backgroundColor:theme.palette.neutral.main,borderRadius:'5px' , marginTop:'10px'}}>
       <Box >
        <Typography sx={{fontSize:'30px'}}>Your Cart</Typography>
       </Box>
       <Box sx={{display:'flex', flexDirection:'row',gap:1.5}}>
       <Link style={{textDecoration:'none'}} to='/delivery'>
         <ButtonStyle>
          <DeliveryDiningIcon/>
          <Typography>Delivery</Typography>
         </ButtonStyle>
         </Link>
 
         <ButtonStyle >
         <DeliveryDiningIcon/>
         <Typography>Delivery</Typography>
        </ButtonStyle>
     
        <Link style={{textDecoration:'none'}} to='/delivery'>
        <ButtonStyle >
        <DiningIcon/>
        <Typography>Dining</Typography>
       </ButtonStyle>
       </Link>
       </Box>


 
       <Box sx={{marginTop:'15px'}}>
       <Typography sx={{fontSize:'20px'}}>Delivery Address</Typography>
      </Box>


      <Box sx={{display:'flex',flexDirection:'row' ,marginLeft:'5px',width:'680px' , height:'80px' , border : '1px solid black' , borderRadius:'12px', backgroundColor:'#FFFBFF',marginTop:'10px'}}>
      <Image src={map} alt='map'/>
      <Box sx={{display:'flex',flexDirection:'column'}}>
       <Typography>Delivery to: Home</Typography>
       <Typography sx={{color:theme.palette.primary.main}}>87114, Albuquerque, New York</Typography>
      </Box>
     </Box>


     <Box sx={{width:'125px', height:'30px',marginTop:'20px',backgroundColor:'white',color:theme.palette.primary.main,
     border:'1px solid orange',borderRadius:'10px'}}>
       <Typography sx={{fontSize:'17px',fontWeight:600,display:'flex',flexDirection:'row',alignItems:'center'}}>Items Added</Typography>
      </Box>


      <Box sx={{width:'690px',height:'113px',marginTop:'30px',backgroundColor:theme.palette.secondary.main,display:"flex",flexDirection:'column'}}>
       <Box sx={{display:'flex',flexDirection:'row',gap:2}} >
         <Veg src={veg} alt='veg'/>
         <Typography sx={{width:'150px',fontFamily:'sans-serif',fontWeight:600,marginTop:'10px'}}>Dal Makhani Meal</Typography> 
       <Box sx={{display:'flex',flexDirection:'row',backgroundColor:'white',gap:.1,border:'1px solid orange',width:'80px',height:'20px',marginTop:'12px',alignItems:'center',borderRadius:'5px',justifyContent:'space-between'}}>
        <AddIcon/>
        <Divider orientation='vertical'/>
        <span>0</span>
        <Divider orientation='vertical'/>
        <RemoveIcon/>
       </Box>
       </Box>

       <Box sx={{marginTop:'20px',display:'flex',flexDirection:'row', margin:'10px',justifyContent:'space-evenly'}}>
        <Typography>Nascetur nullam torquent <br/> lectus inceptos ultricies</Typography>
        <Typography sx={{fontWeight:'bold'}}> $ 220 </Typography>
       </Box>
      </Box>

      <Divider sx={{width:'690px'}}/>

      <Box sx={{width:'690px',height:'113px',backgroundColor:theme.palette.secondary.main,display:"flex",flexDirection:'column'}}>
      <Box sx={{display:'flex',flexDirection:'row',gap:2}} >
        <Veg src={veg} alt='veg'/>
        <Typography sx={{width:'150px',fontFamily:'sans-serif',fontWeight:600,marginTop:'10px'}}>Dal Makhani Meal</Typography> 
      <Box sx={{display:'flex',flexDirection:'row',backgroundColor:'white',gap:.1,border:'1px solid orange',width:'80px',height:'20px',marginTop:'12px',alignItems:'center',borderRadius:'5px',justifyContent:'space-between'}}>
       <AddIcon/>
       <Divider orientation='vertical'/>
       <span>0</span>
       <Divider orientation='vertical'/>
       <RemoveIcon/>
      </Box>
      </Box>

      <Box sx={{marginTop:'20px',display:'flex',flexDirection:'row', margin:'10px',justifyContent:'space-evenly'}}>
       <Typography>Nascetur nullam torquent <br/> lectus inceptos ultricies</Typography>
       <Typography sx={{fontWeight:'bold'}}> $ 220 </Typography>
      </Box>
     </Box>

     <Divider sx={{width:'690px'}}/>

     <Box sx={{width:'690px',height:'113px',backgroundColor:theme.palette.secondary.main,display:"flex",flexDirection:'column'}}>
     <Box sx={{display:'flex',flexDirection:'row',gap:2}} >
       <Veg src={veg} alt='veg'/>
       <Typography sx={{width:'150px',fontFamily:'sans-serif',fontWeight:600,marginTop:'10px'}}>Dal Makhani Meal</Typography> 
     <Box sx={{display:'flex',flexDirection:'row',backgroundColor:'white',gap:.1,border:'1px solid orange',width:'80px',height:'20px',marginTop:'12px',alignItems:'center',borderRadius:'5px',justifyContent:"space-between"}}>
      <AddIcon/>
      <Divider orientation='vertical'/>
      <span>0</span>
      <Divider orientation='vertical'/>
      <RemoveIcon/>
     </Box>
     </Box>

     <Box sx={{marginTop:'20px',display:'flex',flexDirection:'row', margin:'10px',justifyContent:'space-evenly'}}>
      <Typography>Nascetur nullam torquent <br/> lectus inceptos ultricies</Typography>
      <Typography sx={{fontWeight:'bold'}}> $ 220 </Typography>
     </Box>


     <Box>
     <InputStlye disableUnderline placeholder='Mention Your special instruction here.....'/>
     </Box>

    </Box>
       </Box>
       <Box sx={{width:'450px',height:'650px',backgroundColor:theme.palette.neutral.main,margin:'10px',borderRadius:'5px'}}>
         <Box sx={{margin:'20px'}}>
          <Typography sx={{fontWeight:700}}> Bill Details</Typography>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}} >
          <Typography > Items Total</Typography>
          <Typography> $ 20</Typography>
          </Box>

          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}} >
          <Typography > Text And Charges </Typography>
          <Typography> $ 10</Typography>
          </Box>

          <Divider  sx={{marginTop:'30px',border:'1px solid grey'}}/>

          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'30px'}} >
          <Typography >Delivery fee</Typography>
          <Typography> $ 25</Typography>
          </Box>

          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}} >
          <Typography > Packaging Charges   </Typography>
          <Typography> $ 190</Typography>
          </Box>


          <Divider  sx={{marginTop:'30px',border:'1px solid grey'}}/>
          


          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'20px'}} >
          <Typography sx={{fontWeight:600}} > Total  </Typography>
          <Typography> $ 190</Typography>
          </Box>


          <Button sx={{width:'100%',marginTop:'290px'}} variant='contained'> Pay Now</Button>

         </Box>
       </Box>
       </Box>

    </Container>
  )
}

export default Pickup