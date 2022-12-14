import { Button } from '@mui/material';
import React from 'react';

const ScrollButton = ({topPosition,name}) => {
  const handleClick = () => {
    window.scrollTo({
      top: topPosition,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
     <Button variant="contained" color="primary" onClick={handleClick} sx={{mx:1,px:1}}>{name}</Button>
    </div>
  );
};

export default ScrollButton;