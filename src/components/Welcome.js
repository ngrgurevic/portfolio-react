import React from 'react'
import {Container,Card,Typography, Paper, ThemeProvider, Divider} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import '../App.css'

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
             
        <Typography
              variant="h1"
              noWrap
              component="h1"
              href=""
              sx={{my:10}}
            >
            Welcome to my Portfolio
            </Typography>
            
            <HomeIcon sx={{my:15}}
                />
              
            <Typography
              variant="p"
              noWrap
              component="p"
              href=""
              sx={{mb:10}}
            >
            I'm a Web and Mobile developer
            </Typography>
    </Container>
 )
}

export default Welcome