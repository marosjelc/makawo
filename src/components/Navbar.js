import React, { useEffect, useState } from 'react';
import { 
    Container,
    AppBar,
    Typography,
    Toolbar,
    Drawer,
    IconButton,
    Box,
    MenuItem
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles()((theme) => {
    return {
        appBar: {
            position: 'sticky',
            backgroundColor: "#FFB61C",
            [theme.breakpoints.up('md')]: {
                                
            }
        },
        miniToolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        miniToolbarMenuIcon: {
            color: 'white'
        },
        miniToolbarMenu: {
            
        }
    };
});

export default function Navbar(props) {
    const { classes } = useStyles();

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

    /* Display Mini Menu (mobile devices) */
    const displayMiniMenu = () => {
        const handleToggleMenuOpen = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: true
        }));
    
        const handleToggleMenuClose = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: false
        }));

        return (
            <Toolbar className={classes.miniToolbar}>
                <IconButton
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                >
                    <MenuIcon 
                        className={classes.miniToolbarMenuIcon}
                    />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "top",
                        open: toggleMenuOpen,
                        onClose: handleToggleMenuClose
                    }}
                >
                    <div>
                        <Box className={classes.miniToolbarMenu}>
                            
                            {['home', 'home2', 'home3'].map((menuOption) => (
                                <MenuItem>
                                    {menuOption.toUpperCase()}
                                </MenuItem>
                            ))}
                        </Box>
                    </div>
                </Drawer>
                <Typography
                    component="h1"
                    variant="h5"
                >
                    {props.pageTitle}
                </Typography>
                <Typography>ikona</Typography>
            </Toolbar>
        );
    };

    /* Display Large Menu (desktop) */
    const displayLargeMenu = () => {
        return (
            <Typography>Large Menu</Typography>
        );
    };

    return (
        <AppBar className={classes.appBar}>
            <Container>
                {toggleMenu ? displayMiniMenu() : displayLargeMenu() }
            </Container>
        </AppBar>
    );
}