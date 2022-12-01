import React from 'react'
import {Container,Box,Typography} from '@mui/material'
import colors from './colors'
import HomeIcon from '@mui/icons-material/Home';

function About() {
 return(
    <Container  >
    <Box
      sx={{
        width: 1,
        height: 1,
        padding: 5,
        backgroundColor: colors.secondary,
        '&:hover': {
          backgroundColor: colors.secondary_dark,
        },
      }}
    >
        
        <Typography
              variant="h2"
              noWrap
              component="h2"
              href=""
              sx={{
                mr: 5,
                flexGrow: 2,
                padding: 10,
                fontFamily: 'fantasy',
                fontSize: 68,
                fontWeight: 800,
                letterSpacing: '.4rem',
                textDecoration: 'none',
                color: colors.white
              }}
            >
             Welcome to my page
            </Typography>
            <HomeIcon 
                
                />

            
            <Typography
              variant="p"
              noWrap
              component="p"
              href=""
              sx={{
                mr: 5,
                flexGrow: 2,
                fontFamily: 'fantasy',
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: '.4rem',
                textDecoration: 'none',
                color: colors.white
              }}
            >
            I'm a Web developer
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="p"
              href=""
              sx={{
                mr: 5,
                flexGrow: 2,
                fontFamily: 'fantasy',
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: '.4rem',
                textDecoration: 'none',
                color: colors.white
              }}
            >
            I'm a Web developer
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="p"
              href=""
              sx={{
                mr: 5,
                flexGrow: 2,
                fontFamily: 'fantasy',
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: '.4rem',
                textDecoration: 'none',
                color: colors.white
              }}
            >
            I'm a Web developer
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="p"
              href=""
              sx={{
                mr: 5,
                flexGrow: 2,
                fontFamily: 'fantasy',
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: '.4rem',
                textDecoration: 'none',
                color: colors.white
              }}
            >
            I'm a Web developer
            </Typography>
    </Box>

    
    </Container>
 )
}

export default About