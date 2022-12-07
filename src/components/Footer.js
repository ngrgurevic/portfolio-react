import { Grid, Paper, Typography,Stack, Link } from '@mui/material'
import React from 'react'
import COLORS from './colors'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css'
import Timer from './Timer'

export default function Footer() {
    return (
        <Paper sx={{
            mx: 0, mt: 2, borderTop: 4, display: 'center',
            boxShadow: '10', opacity: 0.9, borderRadius: 1
        }}>
            <Grid container
                rowSpacing={2} >

                <Grid md={6} sx={{ width: '100%',  pb:3 }} >


                    <Typography variant="h4"
                        Wrap
                        component="h4"
                        href=""
                        align='center'
                        sx={{pt:4}}
                        >
                        
                            Contact
                    </Typography>
                    <Typography
                        variant="p"
                        Wrap
                        component="p"
                        href=""
                        align='center'
                        sx={{pt:1}}
                    >
                        <Timer/>
                        Phone: +385977645232<br/>
                        Email: nikolagrgurevic92@gmail.com
                        
                    </Typography>


                </Grid>
                <Grid md={6} sx={{ width: '100%',  pb:3 }}>

                    <Typography variant="h4"
                        Wrap
                        component="h4"
                        href=""
                        align='center'
                        sx={{pt:4, pb:3}}
                        >
                            Links
                    </Typography>

                    <Stack
                        direction="row-reverse"
                        justifyContent="center"
                        alignItems="center"
                        spacing={6}

                    >
                        
                        <Link href='https://github.com/ngrgurevic'>
                            <GitHubIcon sx={{width:50,height:50, color:COLORS.secondary_light}}
                                color={COLORS.secondary_light}
                            />
                        </Link>

                        <Link href='https://www.linkedin.com/in/nikola-grgurevic-0782511b2'>
                            <LinkedInIcon sx={{width:50,height:50, color:COLORS.secondary_light}}
                                
                            />
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    )
}
