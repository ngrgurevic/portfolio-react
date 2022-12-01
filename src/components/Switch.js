import React, { useState } from "react";
import { createTheme, Switch } from "@mui/material";
import COLORS from "./colors";

function MySwitch() {
    const [isToggled, setIsToggled] = useState(false);
  
    const onToggle = () => {
      setIsToggled(!isToggled);
    };
  
    const Theme = createTheme({
        
        palette: {
            mode: isToggled ? COLORS.primary : COLORS.secondary
          }
      });

    return (
       
        <Switch checked={isToggled} onChange={onToggle}/>
    );
  }
  export default MySwitch;