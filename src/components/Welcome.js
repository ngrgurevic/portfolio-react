import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import '../App.css'
import MovingComponent from 'react-moving-text'


function Welcome() {
  return (
    <Box sx={{ my: 15, p: 5 }}>

      <MovingComponent
        type="unfold"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">

        <Typography
          variant="h1"
          Wrap
          component="h1"
          href=""
          sx={{ my: 13 }}
        >
          Welcome to my Portfolio
        </Typography>
      </MovingComponent>

      <HomeIcon sx={{ my: 10, width: 50, height: 50 }}
      />

      <MovingComponent
        type="unfold"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">

        <Typography
          variant="h4"
          Wrap
          component="h4"
          href=""
          sx={{ mb: 1 }}
        >
          I'm a Web and Mobile developer
        </Typography>
      </MovingComponent>
    </Box>
  )
}

export default Welcome