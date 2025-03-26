import React from 'react';
import { Grid } from '@mui/material';

const HomePage = (props) => {
    const movies = props?.movies || [];

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1>HomePage</h1>
                <p>This page is rendering correctly!</p>
            </Grid>
        </Grid>
    );
};

export default HomePage;
