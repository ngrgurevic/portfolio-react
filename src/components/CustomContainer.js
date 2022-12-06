import React from 'react';
import { Paper } from '@mui/material';
import {CssBaseline} from '@mui/material';

function customPaper(props){
    const { children} = props;
    return (
		<Paper sx={{ opacity:0.9, mx: 5, my: 5, border: 5, px: 5, py: 5 }}>
            {children}
        </Paper>
	)
}

 function CustomContainer(props) {
    return (
      <React.Fragment>
        <CssBaseline />
        <customPaper {...props}>
          {props.children}
        </customPaper>
      </React.Fragment>
    );
  }

export default CustomContainer;
