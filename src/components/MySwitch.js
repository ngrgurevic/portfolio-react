import React, { useState } from "react";
import { createTheme, Switch } from "@mui/material";
import COLORS from "./colors";
import { ThemeContext } from "../App";
import "./MySwitch.css";

function MySwitch(theme,toggleTheme) {
    const [isToggled, setIsToggled] = useState(false);
  
    const onToggle = () => {
      setIsToggled(!isToggled);
    };
    return (
        <Switch checked={isToggled} onChange={onToggle}/>
    );
  }
  export default MySwitch;