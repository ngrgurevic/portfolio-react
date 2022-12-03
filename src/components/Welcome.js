import React from 'react'
import {Container,Card,Typography, Paper, ThemeProvider, Divider} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { lightTheme } from '../App';

const style2 = {
    minHeight: "100%",
    minWidth: "100%",
    textAlign: "center",
    padding: "5rem",
    height: "100%"
  };


function Welcome() {
 return(
    <Container>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
        <Typography
              variant="h1"
              noWrap
              component="h1"
              href=""
            >
            Welcome to my Portfolio
            </Typography>
            <br/>
            <br/>
            <HomeIcon sx={{my:15}}
                />
              <br/>
              <br/>
            <Typography
              variant="p"
              noWrap
              component="p"
              href=""
            >
            I'm a Web and Mobile developer
            </Typography>
    </Container>
 )
}

export default Welcome