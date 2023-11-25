import { Box, Button, Container, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { FooterTitle, SubscribeTf } from "../../styles/Footer/Footer";
import { theme } from "../../theme/theme";



export default function Footer(){
   return(
    <Box 
    sx={{
      position:"absolute",
      backgroundColor:theme.palette.neutral.main,
      color: "black",
      p: { xs: 4, md: 10 },
      pt: 12,
      pb: 12,
      fontSize: { xs: '12px', md: '14px' },
      zIndex:1205,
     
    }}
  >
    <Grid container spacing={2} justifyContent="center">
      <Grid item md={6} lg={4}>
        <FooterTitle variant="body1">About us</FooterTitle>
        <Typography variant="caption2">
          Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
          incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </Typography>
        <Box
          sx={{
            mt: 4,
            color: "grey"
          }}
        >
          <FacebookIcon sx={{ mr: 1 }} />
          <TwitterIcon sx={{ mr: 1 }} />
          <InstagramIcon />
        </Box>
      </Grid>
      <Grid item md={6} lg={2}>
        <FooterTitle variant="body1">information</FooterTitle>
        <List>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              About Us
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Order Tracking
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Privacy &amp; Policy
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Terms &amp; Conditions
            </Typography>
          </ListItemText>
        </List>
      </Grid>
      <Grid item md={6} lg={2}>
        <FooterTitle variant="body1">my account</FooterTitle>
        <List>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Login
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              My Cart
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              My Account
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Wishlist
            </Typography>
          </ListItemText>
        </List>
      </Grid>
      <Grid item md={6} lg={4}>
        <FooterTitle variant="body1">newsletter</FooterTitle>
        <Stack>
          <SubscribeTf
            color="primary"
            label="Email address"
            variant="standard"
          />
          <Button
            startIcon={<SendIcon sx={{ color: "white" }} />}
            sx={{ mt: 4, mb: 4 }}
            variant="contained"
          >
            Subscribe
          </Button>
        </Stack>
      </Grid>
    </Grid>
  </Box>
   )
}