import {
    Grid, 
    Typography 
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { LoremIpsum } from 'react-lorem-ipsum';

const useStyles = makeStyles()((theme) => {
    return {
        mainContainer: {
            background: "url(https://cdn.pixabay.com/photo/2017/06/01/18/27/ingredients-2364182_960_720.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 400,
            color: theme.palette.common.white
        },
        mainItem: {
            padding: theme.spacing(6),
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end'
        }
    };
});

export default function MainGridItem() {
    const { classes } = useStyles();
    return (
        <Grid container className={classes.mainContainer} sx={{ mt: '20px' }}>
            <Grid item className={classes.mainItem}>
                <Typography component='h2' variant='h5'>
                    adafagadadad
                </Typography>

                <LoremIpsum avgWordsPerSentence={1} p={1} />
            </Grid>            
        </Grid>
        
    );
}