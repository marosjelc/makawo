import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { 
    Container,
    Toolbar, 
    Typography, 
    Box, 
    Link, 
    AppBar, 
    Drawer, 
    IconButton, 
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
                paddingLeft: theme.spacing(10)
            },
            color: "white"
        },
        toolbar: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up('md')]: {
                flexDirection: "row",
                justifyContent: "space-between"
            }
        },
        title: {
            fontWeight: "bold"
        },
        menuIcon: {
            color: 'white'
        }
    };
});

export default function Navbar() {
    const [state, setState] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
    });

    const { toggleMenu, toggleMenuOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
                ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
                : setState((prevState) => ({ ...prevState, toggleMenu: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const { classes } = useStyles();

    const displayToggleMenu = () => {
        const handleToggleMenuOpen = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: true
        }));

        const handleToggleMenuClose = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: false
        }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                >
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>
                <Drawer
                    {...{
                        anchor: 'left',
                        open: toggleMenuOpen,
                        onClose: handleToggleMenuClose
                    }}
                >
                    <div>
                        { getToggleMenuOptions() }
                    </div>
                </Drawer>
            </Toolbar>
        );
    };

    const getToggleMenuOptions = () => {
        return (
            <Box>
                {['home', 'home2', 'home3'].map((menuOption) => (
                    <MenuItem>
                        {menuOption.toUpperCase()}
                    </MenuItem>
                ))}
            </Box>
        );
    };

    const displayLargeMenu = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Typography 
                    className={classes.title}
                    component="h1"
                    variant="h6"
                >
                    Makawo
                </Typography>
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
        );
    };

    return (
        <Container>
            <AppBar>
                {toggleMenu ? displayToggleMenu() : displayLargeMenu() }
            </AppBar>
        </Container>
    );
}