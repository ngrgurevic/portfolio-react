import './App.css';
import Header from './components/Header'
import About from './components/Welcome'
import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ParticlesBg from 'particles-bg';
import AboutMe from './components/AboutMe';
import ParticlesConfig from './components/ParticlesConfig'
import Footer from './components/Footer'
import { darkTheme, lightTheme } from './components/Themes';
import CopyrightComponent from './components/CopyrightComponent'
import 'aos/dist/aos.css';
import AoSEffect from './components/AoSEffect';


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
        <Header darkMode={darkMode}
          setDarkMode={() => {
            setDarkMode(!darkMode)
          }}>

        </Header>

        <About id="about" />

        <AoSEffect
          animation={'zoom-in-up'}
          duration={2000}
        ><AboutMe /></AoSEffect>


        <AoSEffect
          animation={'fade-down'}
          duration={1000}
        >
          <Footer />
          <CopyrightComponent />

        </AoSEffect>

      </div>
    </ThemeProvider>
  );

  function darkCheck() {
    return darkMode ? darkTheme : lightTheme;
  }
}

export default App;
