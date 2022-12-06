import './App.css';
import Header from './components/Header'
import About from './components/Welcome'
import React, { createContext, useState, useEffect } from 'react'
import COLORS from './components/colors';
import { ThemeProvider, createTheme,useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Switch, Divider, Box, Tooltip, Paper } from '@mui/material';
import ParticlesBg from 'particles-bg';
import AboutMe from './components/AboutMe';
import ParticlesConfig from './components/ParticlesConfig'
import darkCheck from './components/darkCheck';
import MySwitch from './components/MySwitch';
import Footer from './components/Footer'
import HideOnScroll from './components/HideOnScroll';
import { darkTheme, lightTheme } from './components/Themes';
import customPaper from './components/Paper'

const style = {
  minHeight: "50%",
  minWidth: "50%",
  textAlign: "center",
  paddingTop: "5rem",

};



function App() {

  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <ThemeProvider theme={darkCheck(darkMode)}>

      <div className='bubbles'>
        <ParticlesBg type='circle' bg={true} config={ParticlesConfig} />
      </div>
      <CssBaseline />

      <div className="App">

        <br />
       

        <Header>
          {/* <Switch checked={darkMode}
            onChange={() => setDarkMode(!darkMode)} /> */}
            
       </Header>
       <MySwitch darkMode={darkMode}
            setDarkMode={() => {
              setDarkMode(!darkMode)}}
           />
        <About />
        {/* sx={{ opacity:0.9, mx: 5, my: 5, border: 5, px: 5, py: 5 }}  */}
        <Paper sx={{ opacity:0.9, mx: 5, my: 5, border: 5, px: 5, py: 5 }}>

          <AboutMe />
        </Paper>    
        <Footer/>    
      </div>

    </ThemeProvider>
  );

  function darkCheck() {
    return darkMode ? darkTheme : lightTheme;
  }
}

export default App;
