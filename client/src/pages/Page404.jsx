import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <Box sx={{ minHeight: '60vh' }}>
      <Container maxWidth="xl" sx={{ pt: '10%' }}>
        <Typography color="error" variant="h2" mt={5}>
          404 Page Not Found!!
        </Typography>
        <Link style={{ color: 'rgb(213, 72, 87)' }} to="/home">
          Head back to the homepage of kinoverse.
        </Link>
      </Container>
    </Box>
  );
}

export default Page404;
