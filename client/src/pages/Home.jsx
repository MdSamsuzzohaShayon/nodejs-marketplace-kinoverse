import React from 'react';
import useStyles from '../styles/Home.style.js';
import { Grid, Container, Typography, OutlinedInput, FormControl, FormHelperText } from '@mui/material';

function Home() {
    const classes = useStyles();
    return (<div className='Home'>
        <Container maxWidth="xl" >
            {/* item container direction="row" */}
            {/* direction="column-reverse" */}
            <Grid container spacing={2} columns={{ xs: 4, md: 12 }}   >

                <Grid item xs={6} md={8}>
                    <Typography variant='h2'>Digitalized film industry - software for filmmaking</Typography>
                    <Typography variant='h4'>Filmmaker and content creator marketplace</Typography>
                    <Typography variant="h5">In need of filmmaker or video creator? <br />
                        Are you film maker or video content creator?</Typography>

                    <Typography variant="h6">Signup to get notified of our launch</Typography>

                    {/* sx={{ m: 1, width: '25ch' }} */}
                    <OutlinedInput
                        className={classes.input_field}
                        fullWidth={true}
                        id="outlined-adornment-weight"
                        // value={values.weight}
                        // onChange={handleChange('weight')}
                        // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormControl variant="outlined">
                        <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                    <form id="subscribe_form">
                        <div className="fields">
                            <div className="field">
                                <input name="email" id="email" placeholder="Email" type="email" required="" />
                            </div>
                            <div className="field">
                                <ul className="actions special">
                                    <li><button type="submit" id="notify-me" className="button primary">Notify Me</button></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src="./img/mobile.png" className={classes.image_fluid} alt="" />
                    {/* <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    /> */}
                </Grid>
            </Grid>
        </Container>


        <div id="wrapper">
            <div id="two" className="wrapper style1">
                <div className="inner">
                    <div className="features">
                        <div className="feature"><span className="icon solid alt major fa-laptop"></span>
                            <h2 className="standard-font">For Clients</h2>
                            <p>Hire a professional filmmaker and video creator of any kind for your business, or film
                                projects with ease. pay hourly or by the project upon completion or by milestone. post your
                                job and sort through lists of qualified candidates to find the right filmmaker.</p>
                        </div>
                        <div className="feature"><span className="icon solid alt major fa-camera-retro"></span>
                            <h2 className="standard-font">For Filmmakers</h2>
                            <p>Work on your schedule and post your talents for the world to see. Create your profile and get
                                hired doing what you love to do. Apply to new jobs posted or wait to get invited to apply.
                            </p>
                        </div>
                        <div className="feature"><span className="icon solid alt major fa-paper-plane"></span>
                            <h2 className="standard-font">For Business</h2>
                            <p>Are you a business looking to manage your creative process? We have you covered as well. KV
                                flow allows you to simplify the filmmaking and content creation process from start to
                                finish.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        <div id="navPanel">
            <nav>
            </nav>
            <a href="#navPanel" className="close"></a>
        </div>
    </div>);
};

export default Home;
