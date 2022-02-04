import React from 'react';
import { Box, Typography, Container, Grid, Button, FormControl, Input } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import useStyles from '../styles/Career.style.js';
import { useSelector } from 'react-redux';
import { CustomOutlinedInput, CustomFileInput } from '../styles/Theme.style.js';
import Spotlight from '../components/pages-common/Spotlight.jsx';


const styles = {
    hidden: {
        display: "none",
    },
    importLabel: {
        color: "black",
    },
};

const Career = (props) => {
    const learnEarn = useSelector((state) => state.static.learnEarn);
    const classes = useStyles();


    return (<Box>
        <Container maxWidth="xl" >
            <Typography variant='h1' my={5} sx={{ fontSize: { xs: 30, md: 75 } }} >Kinoverse Careers</Typography>
        </Container>
        <Box className={classes.wrap_body} >
            {/* DO SOME STYLE FOR BOX AFTER  */}
            <Spotlight img_src={learnEarn.img_src} title={learnEarn.title} desc={learnEarn.desc} />


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
