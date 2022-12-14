import React from 'react'
import { Typography, Paper, Grid, Box, Divider, Avatar} from '@mui/material'
import '../App.css'
import picture from '../images/Profile.gif'
import StarRating from './StarRating'
import DonutChart from './MyDonutChart';
import one from '../images/1.jpeg'
import two from '../images/2.jpeg'
import AoSEffect from './AoSEffect'

function AboutMe() {
    return (
        <Paper sx={{
            mx: 10, my: 10, borderTop: 4, borderBottom: 4, display: 'center',
            boxShadow: '0', opacity: 0.9, borderRadius: 20
        }}>
            <Grid spacing={2}
                container
                wrap='true'
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid xs={12} spacing={1}>
                    <AoSEffect
                    animation={'slide-left'}
                    duration={3000}
                    >
                        <Typography
                            variant="h2"
                            Wrap
                            component="h2"
                            href=""
                            align='center'
                            sx={{ my: 5 }}
                        >
                            About me

                        </Typography>
                    </AoSEffect>
                </Grid>
                <Grid
                    item
                    container
                    Wrap
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                >

                    <Grid item xs={12} lg={6} sm={12}>
                        
                    <AoSEffect
                    animation={'slide-up'}
                    duration={3000}
                    >
                        <div id="img">
                            <img src={picture} id='img'
                                alt='main'
                                style={{ maxWidth: 300, borderRadius: 15, margin: 2 }} />

                        </div>
                        
                        <Typography
                            variant="p"
                            Wrap
                            component="p"
                            href=""
                            align='center'
                            sx={{ p: 1 }}
                        >

                            <h4>Name: </h4>
                            Nikola Grgurevi??

                            <h4>Education: </h4>Bachelor of Information Technology

                            <h4>Date of Birth: </h4>19.06.1992

                            <h4>Location:</h4>Zagreb

                            <h4>Hobbies: </h4>Cycling,Swimming

                            <h4>Pets: </h4>
                        </Typography>
                        <Box sx={{ px: 2, mx: 2, display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <Avatar src={one} sx={{ width: 100, height: 100, opacity: 1, m: 2 }} alt='Roni'/>

                            <Avatar sx={{ width: 100, height: 100, opacity: 1, m: 2 }} src={two} alt='Loki' />
                        </Box>

                        </AoSEffect>
                    </Grid>

                    <Grid Wrap item xs={12} lg={6} sm={12}>
                    <AoSEffect
                    animation={'slide-up'}
                    duration={3000}
                    >
                        <Typography
                            variant="h2"
                            Wrap
                            component="h2"
                            href=""
                            sx={{ p: 2, my: 2 }}
                        >
                            Interest<br />
                        </Typography>
                        <Typography
                            variant="p"
                            Wrap
                            component="p"
                            href=""
                            align="center"
                            sx={{ p: 1 }}
                        >
                            <Divider sx={{ my: 5, borderBottom: 1, wrap: true }}>
                                React <StarRating value="4" /> </Divider>
                            <Divider sx={{ my: 5, borderBottom: 1 }}>
                                JavaScript <StarRating value="3.5" /></Divider>
                            <Divider sx={{ my: 5, borderBottom: 1 }}>
                                Kotlin<StarRating value="3.5" /> </Divider>
                            <Divider sx={{ my: 5, borderBottom: 1 }}>
                                Swift <StarRating value="3" /></Divider>
                            <Divider sx={{ my: 5, borderBottom: 1 }}>
                                Java<StarRating value="2.5" /></Divider>
                        </Typography>
                        <DonutChart Wrap sx={{ wrap: true }} />
                        </AoSEffect>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AboutMe