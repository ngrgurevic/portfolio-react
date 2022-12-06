import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Paper, Typography } from '@mui/material';

export default function CopyrightComponent() {
  
    return (
        <Paper sx={{
            mx: 0, mt: 0, borderTop: 1, display: 'box',
            boxShadow: '10', opacity: 0.9, alignContent:'center'
        }}>
            <Typography variant='h7'>
                Nikola Grgurević
                <CopyrightIcon/>
            </Typography>
            
            </Paper>
  )
}
