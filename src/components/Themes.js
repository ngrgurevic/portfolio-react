import { createTheme } from '@mui/material/styles';
import COLORS from './colors'

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
      light: COLORS.primary_light
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
          
        },primary:{
          main: COLORS.primary,
          light: COLORS.primary_light
        },
        sx: ({
          p: 5
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
  root:{
    palette: {
      mode: "dark"
    },
  },
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
    

