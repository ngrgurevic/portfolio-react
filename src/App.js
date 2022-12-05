import './App.css';
import Header from './components/Header'
import About from './components/Welcome'
import React, { createContext, useState, useEffect } from 'react'
import COLORS from './components/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Switch, Paper, Divider, Box } from '@mui/material';
import ParticlesBg from 'particles-bg';
import AboutMe from './components/AboutMe';
import ParticlesConfig from './components/ParticlesConfig'

const style = {
  minHeight: "50%",
  minWidth: "50%",
  textAlign: "center",
  paddingTop: "5rem",

};

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.primary_light,
          color: COLORS.black,

        },
        sx: ({
          padding: 50
        })
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {

        },
        h1: {
          fontSize: 80,
          fontFamily: 'sans-serif'
        },
        p: {
          fontSize: 24,
        },
        h2: {
          fontSize: 50,
          fontFamily: 'sans-serif'
        }
      },
    },

  },
  breakpoints: {
    value:
      { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 }
  }

});

export const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          color: COLORS.white,
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: COLORS.black,
        },

      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {

        },
        h1: {
          fontSize: 80,
          fontFamily: 'sans-serif'
        },
        p: {
          fontSize: 24,
        }

      },
      components: {

      }
    },
  },
});

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={toggleMode()} >

      <div className='bubbles'>
        <ParticlesBg type='circle' bg={true} config={ParticlesConfig} />
      </div>
      <CssBaseline />

      <div className="App" style={style}>

        <br />
        <Box>
          <Switch checked={darkMode}
            onChange={() => setDarkMode(!darkMode)} />
        </Box>

        <Header />
        <About />
       
        <Paper sx={{ mx: 5, my: 5, border: 5, px: 5, py: 5 }} >
          <AboutMe />
        </Paper>


      </div>

    </ThemeProvider>
  );

  function toggleMode() {
    return darkMode ? darkTheme : lightTheme;
  }

}

export default App;
