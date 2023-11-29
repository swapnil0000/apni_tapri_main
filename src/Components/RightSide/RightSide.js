import { Box, Button, Container, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import styled from '@emotion/styled'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DiningIcon from '@mui/icons-material/Dining';
import map from "../../Components/RightSide/Map.png"
import veg from "../../Components/RightSide/veg.png"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, Outlet } from 'react-router-dom';
const RightSide = () => {
    const BoxStyle=styled('Box')({
        width: '240px',
        height: '878px',
        marginTop:'20px', 
        borderRadius: '10px', 
        marginLeft:0,
        backgroundColor:theme.palette.neutral.main
    })
    const TypographyStyle = styled('Typography')({
        ontFamily:'Roboto',
        fontSize:'20px',
        lineHeight:'30px',
        marginTop:'50px',
        marginLeft:'5px',
        fontWeight:400
    })
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

    const Image=styled('img')({
       margin:'2px'
    })
    const Veg=styled('img')({
        width:'18px',
        height:'17px',
        marginTop:'12px',
        marginLeft:'6px'
    })
  return (
    <Box sx={{backgroundColor:theme.palette.neutral.main}} >
      <BoxStyle>
      <TypographyStyle>
        Your Cart
      </TypographyStyle>
      </BoxStyle>
      <Box sx={{display:'flex', flexDirection:'row',gap:1.5}}>
      <Link style={{textDecoration:'none'}} to='/delivery'>
        <ButtonStyle>
         <DeliveryDiningIcon/>
         <Typography>Delivery</Typography>
        </ButtonStyle>
        </Link>
       <Link style={{textDecoration:'none'}} to='/dining'>
        <ButtonStyle >
        <DeliveryDiningIcon/>
        <Typography>Dining</Typography>
       </ButtonStyle>
       </Link>
    
       <Link style={{textDecoration:'none'}} to='/delivery'>
       <ButtonStyle >
       <DiningIcon/>
       <Typography>Dining</Typography>
      </ButtonStyle>
      </Link>
      </Box>

      <Box>
       <Typography sx={{marginTop:'30px',fontSize:'20px', fontFamily:'sans-serif',marginLeft:'5px'}}>Delivery Address</Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'row' ,marginLeft:'5px',width:'280px' , height:'80px' , border : '1px solid black' , borderRadius:'12px', backgroundColor:'#FFFBFF',marginTop:'10px'}}>
       <Image src={map} alt='map'/>
       <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography>Delivery to: Home</Typography>
        <Typography sx={{color:theme.palette.primary.main}}>87114, Albuquerque, New York</Typography>
       </Box>
      </Box>

      <Box sx={{width:'125px',marginLeft:'5px', height:'30px',marginTop:'20px',backgroundColor:'white',color:theme.palette.primary.main,border:'1px solid orange',borderRadius:'10px',display:"flex",alignItems:'center',justifyContent:'center',justifyContent:'space-between'}}>
       <Typography sx={{fontSize:'20px',fontWeight:600}}>Items Added</Typography>
      </Box>

      <Box sx={{width:'290px',height:'113px',marginTop:'60px',marginLeft:'5px',backgroundColor:theme.palette.secondary.main,display:"flex",flexDirection:'column'}}>
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

      <Divider/>

      <Box sx={{width:'290px',height:'113px',marginLeft:'5px',backgroundColor:theme.palette.secondary.main,display:"flex",flexDirection:'column'}}>
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

     <Divider/>

     <Box sx={{width:'290px',height:'113px',marginLeft:'5px',backgroundColor:theme.palette.secondary.main,display:"flex",flexDirection:'column'}}>
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
    </Box>
    <Outlet/>
     </Box>

     
  )
}



export default RightSide