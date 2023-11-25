
// DRWAER DATA

import HomeIcon from '@mui/icons-material/Home';
import DiningIcon from '@mui/icons-material/Dining';
import ListIcon from '@mui/icons-material/List';
import ChatIcon from '@mui/icons-material/Chat';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';


// DIFFERENT SECTION DATA


import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DiscountIcon from '@mui/icons-material/Discount';


// CAROUSEL DATA

import cro1 from "../assets/Image/Carousel/Carousel1.jpeg"
import cro2 from "../assets/Image/Carousel/Carousel2.jpeg"
import cro3 from "../assets/Image/Carousel/Carousel3.jpeg"
import cro4 from "../assets/Image/Carousel/Carousel4.jpeg"


// MENU DATA

import pizza from "../assets/Image/MenuImage/pizza.jpg"
import biryani from "../assets/Image/MenuImage/biryani.jpg"
import roll from "../assets/Image/MenuImage/roll.jpg"
import southindian from "../assets/Image/MenuImage/southindian.jpg"
import dessert from "../assets/Image/MenuImage/dessert.jpg"
import italian from "../assets/Image/MenuImage/italian.jpg"
import burger from "../assets/Image/MenuImage/burger.jpg"
import chinese from "../assets/Image/MenuImage/chinese.jpg"

// ORDER DATA

import order1 from "../assets/Image/OrderImage/order1.png" 
import order2 from "../assets/Image/OrderImage/order2.png" 
import order3 from "../assets/Image/OrderImage/order3.png" 
import order4 from "../assets/Image/OrderImage/order4.png" 
import veg from "../Components/RightSide/veg.png"


export const draw=[
    {
      value:<HomeIcon/>,
      id:'1',
      name:'Home',
      path:'/'
    },
    { 
      value:<DiningIcon/>,
      id:'2',
      path:'/meal',
      name:'Meal'
    },
    { 
      value:<ListIcon/>,
      id:'2',
      path:'/menu',
      name:'Menu'
    },
    {
      value:<ChatIcon/> , 
      id:'3',
      path:'/chat',
      name:'Chat'
    },
    {
      value:<InfoIcon/>,
      id:'4',
      path:'/about',
      name:'About'
    },
    {
      value:<HelpIcon/>,
      id:'5',
      path:'/help',
      name:'Help'
    }
    ]

    export const carouselimage=[
      {
        id:1,
        image:cro1,
      },
      {
        id:2,
        image:cro2,
      },
      {
        id:3,
        image:cro3,
      },
      {
        id:4,
        image:cro4,
      },
      
    ]


   export const Menuimg=[
      {
        id:1,
        image:pizza,
        name:"Pizza"
      },
      {
        id:2,
        image:roll,
        name:"Roll"
      },
      {
        id:3,
        image:biryani,
        name:"Biryani"
      },
      {
        id:4,
        image:burger,
        name:"Burger"
      },
      {
        id:5,
        image:dessert,
        name:"Dessert"
      },
      {
        id:6,
        image:italian,
        name:"Italian"
      },
      {
        id:7,
        image:chinese,
        name:"Chinese"
      },
      {
        id:8,
        image:southindian,
        name:"South Indian"
      }
    ]

   export const option=[
      {
         id:1,
         icon:<LocationOnIcon/>,
         value:'Near By',
      },
      {
        id:2,
        icon: <FilterAltIcon/>,
        value:'Filter'
     },
     {
      id:3,
      icon:<StarBorderIcon/>,
      value:'Rating'
     },
     {
     id:4,
     icon:<SpaOutlinedIcon/>,
     value:'Pure Veg'
     },
    {
      id:5,
      icon:<ShoppingCartIcon/>,
      value:'Cuisiness'
    },
    {
      id:6,
      icon:<DiscountIcon/>,
      value:'Offer'
    },
  ]

  export const orderData=[
    {
      id:1,
      veg:veg,
      img:order1,
      name:'Burger',
      price:'$ 10'
    },
    {
      id:2,
      img:order2,
      veg:veg,
      name:'Burger',
      price:'$ 10'

    },
    {
      id:3,
      img:order3,
      veg:veg,
      name:'Burger',
      price:'$ 10'

    },
    {
      id:4,
      img:order4,
      veg:veg,     
      name:'Burger',
      price:'$ 10'
    },
    {
      id:5,
      img:order4,
      veg:veg,     
      name:'Burger',
      price:'$ 10'
    },
    {
      id:6,
      img:order4,
      veg:veg,     
      name:'Burger',
      price:'$ 10'
    },
    {
      id:7,
      img:order4,
      veg:veg,     
      name:'Burger',
      price:'$ 10'
    },

  ]