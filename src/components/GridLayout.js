import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import MainGridItem from './MainGridItem';

const useStyles = makeStyles()((theme) => {
    return {
        mainGridItemC: {
            backgroundColor: "#521454"
        },
        secondLineGridItem1: {
            backgroundColor: "blue"
        },
        secondLineGridItem2: {
            backgroundColor: "orange"
        }
    };
});

export default function GridLayout() {
    const { classes } = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} sm={12} xs={12}>
                <MainGridItem />
            </Grid>

            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondLineGridItem1}>
                    second line, first item
                </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondLineGridItem2}>
                    second line, second item
                </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Typography className={classes.mainGridItemC}>
                    3rd line, 1st item
                </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography className={classes.secondLineGridItem1}>
                    3rd line, 2nd item
                </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography className={classes.secondLineGridItem2}>
                    3rd line, 3rd item
                </Typography>
            </Grid>
        </Grid>
    );
}