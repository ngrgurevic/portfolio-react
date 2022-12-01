import './App.css';
import Header from './components/Header'
import About from './components/About'
import React, { useState } from 'react'
import { ReactDOM } from 'react';
import { ThemeProvider,createTheme} from'@mui/material/styles'
import { Paper,Switch } from '@mui/material';
import ParticlesBg from 'particles-bg';
import COLORS from './components/colors';
import { ThemeContext } from '@emotion/react';

const style = {
  minHeight: "100vh",
  textAlign: "center",
  paddingTop: "10rem",
  backgroundColor: COLORS.primary_light,
};

function App() {
  
  const [darkState, setDarkMode] = useState(false);

  const Theme = createTheme({
    palette: {
        mode: darkState ? "dark" : "light"
      }
  });
 

  return (
      <Paper>
        <div className="App" style={style}>
          <Header/>
          
           <br />
          <About />
          <About />
        </div>
        
      </Paper>
     
  );

}

export default App;
