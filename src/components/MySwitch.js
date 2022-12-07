import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Tooltip from '@mui/material/Tooltip';
import { Box } from "@mui/system";

function MySwitch({ darkMode, setDarkMode }) {

  return (
    <Box sx={{mr:"15px"}}>
      <Tooltip describeChild title={darkMode ? "darkTheme" : "lightTheme"}>
        <DarkModeSwitch
          checked={darkMode}
          onChange={setDarkMode}
          size={30}
        />
      </Tooltip>
    </Box>
  );
}
export default MySwitch;

  // () => setDarkMode(!darkMode)