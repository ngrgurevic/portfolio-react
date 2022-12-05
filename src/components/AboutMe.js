import React from 'react'
import { Container, Typography, Paper, Grid, Grid2, Item, Avatar, Divider } from '@mui/material'
import '../App.css'
import picture from '../images/Profile.gif'
import PieChart from 'react-pie-graph-chart';
import COLORS from './colors'
import StarRating from './StarRating'


function AboutMe() {
    return (
        <Container>
            <Grid container spacing={4} >
                <Grid xs={12} md={20}>
                        <Typography
                            variant="h1"
                            noWrap
                            component="h1"
                            href=""
                            style={{ fontSize: 60 }}
                            align= 'center'
                        >
                            <Divider sx={{ my: 5, borderBottom: 2, width: '100%', mx:-3 }}>
                            About me</Divider>
                            
                        </Typography>
                    

                </Grid>
                <Grid xs={8} md={6} >
                    <Paper sx={{
                        mx: -1, my: 5, border: 2, px: 2, py: 2, justifyContent: 'center',
                        boxShadow: '10',
                    }}>

                        <img src={picture}

                            style={{ width: 300, height: 250, borderRadius: 15, margin: 10 }} />

                        <Typography
                            variant="p"
                            noWrap
                            component="p"
                            href=""
                            align='center'
                        >
                            <Divider sx={{ my: 4, borderBottom: 2 }} variant='fullWidth'>
                            Name: Nikola Grgurević <br /></Divider>
                            <Divider sx={{ my: 4, borderBottom: 2, px:2 }} variant='fullWidth'>
                            Education: Bachelor of Information Technology<br /></Divider>
                            <Divider sx={{ my: 4, borderBottom: 2 }}>
                            Date of Birth: 19.06.1992<br /></Divider>
                            <Divider sx={{ my: 4, borderBottom: 2 }}>
                            Location: Zagreb<br /></Divider>
                            <Divider sx={{ my: 4, borderBottom: 2 }}>
                            Hobbies: Cycling,Swimming <br /></Divider>
                            <Divider sx={{ my: 4, borderBottom: 2 }}>
                            Pets: 2 Dogs <br /></Divider>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs={8} md={6} >
                    <Paper sx={{
                        mx: 3, my: 5, border: 2, px: 2, py: 2, justifyContent: 'center',
                        boxShadow: '10',
                    }}>
                        <Typography
                            variant="h2"
                            noWrap
                            component="h2"
                            href=""
                        >
                            Skills<br />
                        </Typography>
                        <Typography
                            variant="p"
                            noWrap
                            component="p"
                            href=""
                            align="center"
                        >
                            <Divider sx={{ my: 5, borderBottom: 2 }}>
                            React <StarRating value="3"/> </Divider>
                            <Divider sx={{ my: 5, borderBottom: 2 }}>
                            JavaScript <StarRating value="4"/></Divider>
                            <Divider sx={{ my: 5, borderBottom: 2 }}>
                            Kotlin<StarRating value="4"/> </Divider>
                            <Divider sx={{ my: 5, borderBottom: 2 }}>
                            Swift <StarRating value="3"/></Divider>
                            <Divider sx={{ my: 5, borderBottom: 2 }}>
                            Java<StarRating value="4.5"/></Divider>
                        </Typography>
                        <PieChart type="donut" data={[
                            {
                                type: "React",
                                value: 200,
                                color: COLORS.pieColorOne
                            },
                            {
                                type: "JavaScript",
                                value: 200,
                                color: COLORS.pieColorTwo
                            },
                            {
                                type: "Kotlin",
                                value: 100,
                                color: COLORS.pieColorThree
                            },
                            {
                                type: "Swift",
                                value: 100,
                                color: COLORS.pieColorFour
                            },
                            {
                                type: "Java",
                                value: 50,
                                color: "#4BA2DA"
                            }
                        ]} />
                    </Paper>
                </Grid>
            </Grid>


        </Container>
    )
}

export default AboutMe