import { Box, Grid, Paper, Typography, Divider, Stack } from '@mui/material'
import React, { Children } from 'react'
import COLORS from './colors'
import darkCheck from './darkCheck'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css'

export default function Footer() {
    return (
        <Paper sx={{
            mx: 0, mt: 2, border: 2, justifyContent: 'center',
            boxShadow: '10', opacity: 0.9
        }}>
            <Grid container
                rowSpacing={2} >

                <Grid md={6} sx={{ width: '100%' }} >


                    <Typography variant="h4"
                        noWrap
                        component="h5"
                        href=""
                        align='center'
                        sx={{py:2}}
                        >
                        
                            Contact
                    </Typography>
                    <Typography
                        variant="p"
                        noWrap
                        component="p"
                        href=""
                        align='center'
                        sx={{py:2}}
                    >
                        Phone: +385977645232<br/>
                        Email: <a>nikolagrgurevic92@gmail.com</a>

                    </Typography>


                </Grid>
                <Grid xs={6} >

                    <Typography variant="h4"
                        noWrap
                        component="h4"
                        href=""
                        align='center'
                        sx={{py:2}}
                        >
                        
                            Links
                    </Typography>

                    <Stack
                        direction="row-reverse"
                        justifyContent="center"
                        alignItems="center"
                        spacing={8}

                    >
                        
                        <a href='https://github.com/ngrgurevic'>
                            <GitHubIcon fontSize='large'
                                color={COLORS.secondary_light}
                            />
                        </a>

                        <a href='https://www.linkedin.com/in/nikola-grgurevic-0782511b2'>
                            <LinkedInIcon fontSize='large'
                                
                            />
                        </a>
                    </Stack>



                </Grid>
            </Grid>
        </Paper>
    )
}
