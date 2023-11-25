import { Box, Divider, List, ListItemButton, ListItemIcon } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Drawers from "../Drawer";
import { Component } from "react";
import { theme } from "../../theme/theme";
export const MyList=styled(List)(({type})=>({
    display:type==='row'?'flex':'block',
    
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:theme.palette.secondary.main,
    zIndex:1204,
    display: 'flex',
    position: "fixed",
    bottom: 0,
    left: 0,
    width:'100%',
    alignItems: 'center', 
}))


export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,  
    color:'#DA7455',
    backgroundColor:'#F9EAE6',
  }));
  
  export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
  }));

export default function Actions({ matches }) {

  

  return (
  
      
      <MyList sx={{zIndex:1205}} type="row">
        <ListItemButton
          sx={{
            justifyContent: "center", 
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              
              color:'#DA7455',

            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
            display:'flex',
            flexDirection:'column',
          

          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color:'#DA7455',

              
            }}
          >
            <HomeIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider  orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
            display:'flex',
            flexDirection:'column',
            
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color:'#DA7455',

            }}
          >
            <ManageAccountsIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" />
      </MyList>
  );
}