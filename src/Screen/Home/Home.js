import { Box, Button, Card, Container, Divider, Tab, Tabs, Typography, tabsClasses } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { carouselimage } from '../../Constant/constant';
import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { Menuimg } from '../../Constant/constant';
import { option } from '../../Constant/constant';
import SortIcon from '@mui/icons-material/Sort';
import RightSide from '../../Components/RightSide/RightSide';
import Cards from './Cards/Cards';
const Image = styled('img')({
  objectFit: 'cover'
})

const MenuImage = styled('img')({
  width: '75px',
  height: '75px',
  borderRadius: '50%',
  padding: '15px',
  "&:hover": {
    width: '100px',
    height: '100px',
    fontWeight: 1000
  }

})


const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{display:'flex',flexDirection:'row'}}>
    <Container maxWidth={'md'}>

        <Carousel sx={{
          width: { xs :330 - 600 , sm : 600-720 , md:721- 830 , lg:870}, 
          marginLeft: '0px', 
          height: '244px', 
          borderRadius: '5px', 
          color: 'white',
          marginTop:'10px'
          
        }}
          swipe={true}
          draggable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}>
          {carouselimage.map((ele) => (
            <Box key={ele.id}>
              <Image src={ele.image} alt='craousel' />
            </Box>
          ))}
        </Carousel>



        <Box sx={{
          width: 870,
          height: '220px',
          marginTop: '50px',
          borderRadius: '10px',
          backgroundColor: theme.palette.secondary.main
        }}>
          <Box>
            <Typography sx={{ marginLeft: '10px', fontSize: '16px', fontWeight:700 , lineHeight: '24px' }}>Popular Cuisines</Typography>
          </Box>
          <Box sx={{ display: 'flex' ,fontSize:'10px'}}>
            {
              Menuimg.map((ele) => (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <MenuImage src={ele.image} alt={ele.name} />
                  <Typography sx={{ fontWeight: 400 }}>{ele.name}</Typography>
                </Box>
              ))}
          </Box>
        </Box>
    
        <Container width={'md'}>
        <Box
          sx={{
            display: 'flex',
            px: { xs: 0, md: 3 },
            alignItems: 'center',
            mt: 2,
            mb: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            // scrollButtons 
            // sx={{
            //   [`& .${tabsClasses.scrollButtons}`]: {
            //     '&.Mui-disabled': { opacity: 0.3 },
            //   },
            // }}
          >
            {option.map((tab) => {
              return <Tab  toLowerCase={true} sx={{textTransform:'none', display:'flex', flexDirection:'row', gap:2.5,fontWeight:600 }}key={tab.id} icon={tab.icon} label={tab.value} />;
            })}
          </Tabs>
        </Box>
         
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',}}>
        <Cards/>
       </Box>

      </Container>
      </Container>
         <RightSide/>
      </Container>



  )
}

export default Home