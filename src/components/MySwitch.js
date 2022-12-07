import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Tooltip from '@mui/material/Tooltip';

function MySwitch({darkMode, setDarkMode}) {   
  
    return (
      <Tooltip describeChild title={darkMode ? "darkTheme" : "lightTheme"}>
      <DarkModeSwitch
      style={{marginTop: '5rem' }}
      checked={darkMode}
      onChange={setDarkMode}
      size={50}
    />
    </Tooltip>
    );
  }
  export default MySwitch;

  // () => setDarkMode(!darkMode)