import { yellow } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        mainContainer: {
            backgroundColor: "purple",
            height: 400,
            color: theme.palette.common.white            
        },
        mainItem: {
            padding: theme.spacing(3),
            border: 5
        }
    };
});

export default function MainGridItem() {
    const { classes } = useStyles();
    return (
        <Grid container>
            <Grid item>
                <Typography>
                    Ahoj
                </Typography>
            </Grid>
            
        </Grid>
        
    );
}