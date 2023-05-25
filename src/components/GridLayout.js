import React from 'react';
import {
    Grid 
} from '@mui/material';
/*import { makeStyles } from 'tss-react/mui';*/
import MainGridItem from './MainGridItem';
import GridItem from './GridItem';

/*const useStyles = makeStyles()((theme) => {
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
});*/

export default function GridLayout() {
    /*const { classes } = useStyles();*/
    return (
        <Grid container spacing={3}>
            <Grid item lg={12} sm={12} xs={12}>
                <MainGridItem />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
                <GridItem 
                    title="Ahoj"
                    image="https://cdn.pixabay.com/photo/2023/04/20/03/18/lizard-7938887_640.jpg"
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <GridItem 
                    title="Cau"
                    image="https://cdn.pixabay.com/photo/2023/04/23/09/40/bird-7945398_640.jpg"
                />
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
                <GridItem 
                    title="Hello"
                    image="https://cdn.pixabay.com/photo/2023/04/30/22/01/ocean-7961695__340.jpg"
                />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <GridItem 
                    title="Zdravicko"
                    image="https://cdn.pixabay.com/photo/2023/04/10/15/07/cactus-7914007_640.jpg"
                />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <GridItem 
                    title="Caves"
                    image="https://cdn.pixabay.com/photo/2023/05/21/20/02/needles-8009324_640.jpg"
                />
            </Grid>
        </Grid>
    );
}