import React from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

function Subscriber() {
    const subscriberList = useSelector(state => state.subscriber.subscriberList);


    return <Box >
        <Typography variant='h3'>Subscriber</Typography>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Serial</TableCell>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscriberList && subscriberList.length > 0 && subscriberList.map((subscriber, i) => (<TableRow key={i} sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell align="left">{i + 1}</TableCell>
                        <TableCell align="left">{subscriber.id}</TableCell>
                        <TableCell align="left">{subscriber.email}</TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>;
}

export default Subscriber;
