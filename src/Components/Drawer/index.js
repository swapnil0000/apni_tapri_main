import { Container, useMediaQuery, useTheme } from "@mui/material"

import MobileDrawer from "./MobileDrawer";
import DesktopDrawer from "./DesktopDrawer";



const Drawer=()=>{
    const theme=useTheme();
   const matches=useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container>
        {matches?<MobileDrawer/>:<DesktopDrawer/>}
        </Container>
    )
}


export default Drawer