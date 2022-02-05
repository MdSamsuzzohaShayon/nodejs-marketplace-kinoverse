import React from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const Waitlist = () => {
    const waitlist = useSelector(state => state.subscriber.waitlist);

    return <Box>
        <Typography variant='h3'>Waitlist</Typography>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Serial</TableCell>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Name&nbsp;</TableCell>
                        <TableCell align="left">Email&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {waitlist && waitlist.length > 0 && waitlist.map((wait, i) => (<TableRow key={i} sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell align="left">{i + 1}</TableCell>
                        <TableCell align="left">{wait.id}</TableCell>
                        <TableCell align="left">{wait.name}</TableCell>
                        <TableCell align="left">{wait.email}</TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>;
};

export default Waitlist;
