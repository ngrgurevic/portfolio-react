import './App.css';
import Header from './components/Header'
import About from './components/Welcome'
import React, { createContext, useState, useEffect } from 'react'
import COLORS from './components/colors';
import { ThemeProvider, createTheme,useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Switch, Paper, Divider, Box, Tooltip } from '@mui/material';
import ParticlesBg from 'particles-bg';
import AboutMe from './components/AboutMe';
import ParticlesConfig from './components/ParticlesConfig'
import darkCheck from './components/darkCheck';
import MySwitch from './components/MySwitch';
import Footer from './components/Footer'
import HideOnScroll from './components/HideOnScroll';
import { darkTheme, lightTheme } from './components/Themes';

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

      <div className="App" style={style}>

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
    
        <Paper sx={{ opacity:0.9, mx: 5, my: 5, border: 5, px: 5, py: 5 }} >

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
