import React from 'react';
import { Box, Typography, Container, Grid, Button, FormControl, Input } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import useStyles from '../styles/Career.style.js';
import { CustomOutlinedInput, CustomFileInput } from '../styles/Theme.style.js';


const styles = {
    hidden: {
        display: "none",
    },
    importLabel: {
        color: "black",
    },
};

const Career = (props) => {
    const classes = useStyles();


    return (<Box>
        <Container maxWidth="xl" >
            <Typography variant='h1' my={5} sx={{ fontSize: { xs: 30, md: 75 } }} >Kinoverse Careers</Typography>
        </Container>
        <Box className={classes.wrap_body} >
            {/* DO SOME STYLE FOR BOX AFTER  */}
            <Box py={5}>
                <Container maxWidth="xl" >
                    <Grid container sx={{ border: '1px solid rgba(0, 0, 0, 0.062)', overflow: "hidden", borderRadius: 5, background: '#1f1f24' }}>
                        <Grid item xs={12} md={4}  >
                            <Box className={classes.box_image_cover} >
                                <img className={classes.career_image} src='./img/career.png' alt='Career image' />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8} className={classes.content}>
                            <Box className={classes.learn_earn_text} >
                                <Typography variant='h1' my={4}>
                                    Earn and Learn
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: "1.5rem" }}>
                                    Kinoverse will be offering a earn and learn career path that will put you in the right direction to become a freelance screenwriter or 3D animator.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            <Box className={classes.apply_here}>
                <Container maxWidth="xl">
                    <Typography variant='h2' mb={5} pt={5}>Apply Here</Typography>
                    <Typography variant='h6'>Signup below to join the waitlist</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                        <CustomOutlinedInput
                            sx={{ marginRight: { xs: 0, md: 1 } }}
                            fullWidth
                            type='text'
                            name='name'
                            required
                            color='error'
                            // onChange={inputChangeHandler}
                            placeholder='Name'
                        />
                        <CustomOutlinedInput
                            sx={{ marginLeft: { xs: 0, md: 1 }, mt: { xs: 2, md: 0 } }}
                            fullWidth
                            type='text'
                            name='name'
                            required
                            color='error'
                            // onChange={inputChangeHandler}
                            placeholder='Name'
                        />
                    </Box>
                    <CustomFileInput
                        type="file"
                    />

                    <FormControl margin='dense' justify="center" align="center" fullWidth={true} >
                        <Box textAlign='center' my={5}>
                            <Button variant="contained" color="error" type='submit' endIcon={<ArrowForward />} sx={{ textTransform: 'capitalize' }} > Notify Me </Button>
                        </Box>
                    </FormControl>
                </Container>
            </Box>
        </Box>
        {/* Career hi there
        <br />
        <ChangeColor /> */}
    </Box>);
};

export default Career;
