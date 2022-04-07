import React from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import useStyles from '../../styles/Admin.style.js';
import { useSelector } from 'react-redux';

const Partners = () => {
    const partners = useSelector(state => state.subscriber.partners);
    const classes = useStyles();

    return (
        <Box className={classes.admin_page_partners}>
            <Typography variant='h3'>Partners</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Serial</TableCell>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">First Name</TableCell>
                            <TableCell align="left">Last Name</TableCell>
                            <TableCell align="left">Business Email</TableCell>
                            <TableCell align="left">Business Website</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {partners && partners.length > 0 && partners.map((partner, i) => (<TableRow key={i} sx={{ '& > *': { borderBottom: 'unset' } }}>
                            <TableCell align="left">{i + 1}</TableCell>
                            <TableCell align="left">{partner.id}</TableCell>
                            <TableCell align="left">{partner.firstName}</TableCell>
                            <TableCell align="left">{partner.lastName}</TableCell>
                            <TableCell align="left">{partner.businessEmail}</TableCell>
                            <TableCell align="left">{partner.businessWebsite ? partner.businessWebsite : " "}</TableCell>
                            <TableCell align="left">{partner.description}</TableCell>
                        </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Partners;