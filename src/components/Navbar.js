import React from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
    return {
        menuBox: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up('md')]: {
                flexDirection: "row"
            }
        },
        menuOption: {
            padding: theme.spacing(1),
            [theme.breakpoints.up('md')]: {
                paddingLeft: theme.spacing(3)
            }
        },
        toolbar: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up('md')]: {
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between"
            }
        },
        title: {
            fontWeight: "bold"
        }
    };
});

export default function Navbar() {
    const { classes } = useStyles();
    return (
        <Container>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title}>Makawo</Typography>
                <Box className={classes.menuBox}>
                    {['home', 'home2', 'home3'].map((menuOption) => (
                        <Link
                            component='button'
                            variant='body1'
                            className={classes.menuOption}
                        >
                            {menuOption.toUpperCase()}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    );
}