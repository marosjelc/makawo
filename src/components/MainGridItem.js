import {
    Grid, 
    Typography 
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        mainContainer: {
            backgroundColor: "purple",
            height: 400,
            color: theme.palette.common.white            
        },
        mainItem: {
            padding: theme.spacing(6),
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    };
});

export default function MainGridItem() {
    const { classes } = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item className={classes.mainItem}>
                <Typography component='h2' variant='h5'>
                    Hello Coding
                </Typography>

                <Typography variant='body1' paragraph>
                    Do you want to learn to code? Smash your career goals. Build websites, games, apps and artificial intelligence project in 99 days.
                </Typography>
            </Grid>            
        </Grid>
        
    );
}