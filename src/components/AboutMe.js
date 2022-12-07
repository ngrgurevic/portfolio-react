import React from 'react'
import { Typography, Paper, Grid, Box, Divider, useTheme, Avatar, Container } from '@mui/material'
import '../App.css'
import picture from '../images/Profile.gif'
import StarRating from './StarRating'
import DonutChart from './MyDonutChart';
import one from '../images/1.jpeg'
import two from '../images/2.jpeg'


function AboutMe() {
    const theme = useTheme()
    return (
        <Paper sx={{
            mx: 5, my: 5, borderTop: 4, borderBottom: 4, display: 'center',
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

                    </Grid>
                    <Grid
                        item
                        container
                        Wrap
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="stretch"
                    >

                        <Grid item lg={6} sm={12}>
                            <div id="img">
                                <img src={picture} id='img'

                                    style={{ maxWidth: 300, borderRadius: 15, margin: 2 }} />

                            </div>
                            <Typography
                                variant="p"
                                Wrap
                                component="p"
                                href=""
                                align='center'
                                sx={{ p: 2 }}
                            >

                                <h4>Name: </h4>
                                Nikola Grgurević

                                <h4>Education: </h4>Bachelor of Information Technology

                                <h4>Date of Birth: </h4>19.06.1992

                                <h4>Location: </h4>Zagreb

                                <h4>Hobbies: </h4>Cycling,Swimming

                                <h4>Pets: </h4>

                            </Typography>
                            <Box sx={{ mx: 5, px: 2, display: 'flex', justifyContent: 'space-around' }}>
                                <Avatar src={one} sx={{ width: 125, height: 125, opacity: 1 }} />

                                <Avatar sx={{ width: 125, height: 125, opacity: 1 }} src={two} />  </Box>
                        </Grid>

                        <Grid item lg={6} sm={12}>
                            <Typography
                                variant="h2"
                                Wrap
                                component="h2"
                                href=""
                            >
                                Interest<br />
                            </Typography>
                            <Typography
                                variant="p"
                                Wrap
                                component="p"
                                href=""
                                align="center"
                            >
                                <Divider sx={{ my: 5, borderBottom: 1 }}>
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
                            <Typography
                                variant="h5"
                                Wrap
                                component="h5"
                                href=""
                                sx={{ mb: 4 }}
                            >
                                My Interest
                            </Typography>
                            <DonutChart />
                        </Grid>
                    </Grid>
                </Grid>
        </Paper>
    )
}

export default AboutMe