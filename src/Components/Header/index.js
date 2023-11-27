import { Container, useMediaQuery, useTheme } from "@mui/material";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";



export default function Header(){
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Container maxWidth="lg"  >
         {matches?<MobileHeader matches={matches}/>:<DesktopHeader/>}
        </Container>
    )
}