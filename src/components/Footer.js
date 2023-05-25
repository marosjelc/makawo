import { 
    Container, 
    Typography, 
    Link 
} from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        footer: {
            padding: theme.spacing(6)
        }
    };
});

function Copyright() {
    return (
        <Typography>
            {"Copyright "}
            { new Date().getFullYear() }
            <Link href="/">
                {"Clickme"}
            </Link>
            
        </Typography>
    );
}

export default function Footer() {
    const { classes } = useStyles();
    return (
        <footer className={classes.footer}>
            <Container>
                <Typography variant="h6">
                    Makawo
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Your cooking companion.
                </Typography>

                <Copyright />
            </Container>
        </footer> 
    );
}