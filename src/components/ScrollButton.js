import { Button } from '@mui/material';
import React, { useRef } from 'react';

const ScrollButton = ({topPosition,name}) => {
  const myDiv = useRef(null);

  const handleClick = () => {
    window.scrollTo({
      top: topPosition,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
     <Button variant="contained" color="primary" onClick={handleClick} sx={{mx:2,p:1}}>{name}</Button>
    </div>
  );
};

export default ScrollButton;