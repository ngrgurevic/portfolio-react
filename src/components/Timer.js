import React, { useState } from "react";
import { Typography } from "@mui/material";

function Timer() {
    setInterval(up, 1000);
    let time1 = new Date().toLocaleTimeString();

    const [Time, setTime] = useState(time1);

    function up() {
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }
    return (
    <Typography variant="p">
       Time: {Time}
       <br/>
    </Typography>
    )
}

export default Timer;