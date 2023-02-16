import React from "react";
import { Box, Container, FooterLink, Heading } from "./FooterStyles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid, TextField, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function Footer() {
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Heading>About Us</Heading>
            <FooterLink href="#">
              <Typography>
                We are pets center at vero eos et accusam et iusto odio
                dignissimos ducimus qui biand praesetilum voluptatum deleniti
                atque
              </Typography>
            </FooterLink>
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FooterLink href="#">
                <div>
                  <FacebookIcon />
                </div>
              </FooterLink>
              <FooterLink href="#">
                <div>
                  <InstagramIcon />
                </div>
              </FooterLink>
              <FooterLink href="#">
                <div>
                  <TwitterIcon />
                </div>
              </FooterLink>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Heading>CONTACT INFO</Heading>
            <FooterLink href="#" style={{ display: "flex" }}>
              <LocationOnIcon />
              <Typography style={{ paddingLeft: "10px" }}>
                137 Latona Ave NE, Washington United States
              </Typography>
            </FooterLink>
            <FooterLink href="#" style={{ display: "flex" }}>
              <PhoneIcon />
              <Typography style={{ paddingLeft: "10px" }}>
                1-375-48-037-7302
              </Typography>
            </FooterLink>
            <FooterLink href="#" style={{ display: "flex" }}>
              <EmailIcon />
              <Typography style={{ paddingLeft: "10px" }}>
                Infor@gmail.com
              </Typography>
            </FooterLink>
            <FooterLink href="#" style={{ display: "flex" }}>
              <AccessTimeFilledIcon />
              <div>
                <Typography style={{ paddingLeft: "10px" }}>
                  Mon - Fri 8:00 AM - 21:00 PM
                </Typography>
                <Typography style={{ paddingLeft: "10px" }}>
                  Sat - Sun 9:00 AM - 20:00 PM
                </Typography>
              </div>
            </FooterLink>
          </Grid>
          <Grid item xs={3}>
            <Heading>SUBCRIBE</Heading>
            <FooterLink href="#">
              <TextField
                style={{ background: "white" }}
                id="outlined-basic"
                placeholder="Email"
                // label="Outlined"
                variant="outlined"
              />
            </FooterLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
