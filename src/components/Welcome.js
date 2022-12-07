import React from 'react'
import {Container,Typography, Box} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import '../App.css'

// const style2 = {
//     minHeight: "100%",
//     minWidth: "100%",
//     textAlign: "center",
//     padding: "5rem",
//     height: "100%"
//   };


function Welcome() {
 return(
        <Box sx={{my:10}}>
        <Typography
              variant="h1"
              Wrap
              component="h1"
              href=""
              sx={{my:15}}
            >
            Welcome to my Portfolio
            </Typography>
            
            <HomeIcon sx={{my:7, width:50, height:50}}
                />
              
            <Typography
              variant="h4"
              Wrap
              component="h4"
              href=""
              sx={{mb:5}}
            >
            I'm a Web and Mobile developer
            </Typography>
            </Box>  
 )
}

export default Welcome