import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import COLORS from './colors'
import '../App.css'

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: COLORS.secondary_light,
    }
  });

export default function StarRating(props) {
  return (
    <Box
      sx={{
        width: 200,
        display: 'box',
        alignItems: 'center',
      }}
    >
      <StyledRating
        name="text-feedback"
        value={props.value}
        readOnly
        icon={<FavoriteIcon/>}
        precision={0.5}
        emptyIcon={<FavoriteIcon style={{  color: COLORS.secondary_dark}} fontSize="inherit" />}
      />
      
    </Box>
  );
}