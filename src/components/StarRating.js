import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import COLORS from './colors'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Solid',
  3: 'Solid+',
  3.5: 'Decent',
  4: 'Decent+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: COLORS.secondary_dark,
    }
  });

export default function StarRating(props) {
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StyledRating
        name="text-feedback"
        value={props.value}
        readOnly
        icon={<FavoriteIcon/>}
        precision={0.5}
        emptyIcon={<FavoriteIcon style={{  color: COLORS.secondary_light}} fontSize="inherit" />}
      />
      <Box sx={{ ml: 5, alignContent: 'left', }}>{labels[props.value]}</Box>
    </Box>
  );
}