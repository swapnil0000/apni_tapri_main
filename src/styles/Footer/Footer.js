import { TextField, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import styled from "@emotion/styled";


export const FooterTitle=styled( Typography )(()=>({
    textTransform:'uppercase',
    marginBottom:'1em'
}))

export const SubscribeTf = styled( TextField )(() => ({
    ".MuiInputLabel-root": {
      color:theme.palette.secondary.main
    },
  
    ".MuiInput-root::before": {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
  }));