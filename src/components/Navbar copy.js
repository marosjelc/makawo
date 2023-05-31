import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { 
    Container,
    AppBar
} from '@mui/material';
import NavbarLargeMenu from './NavbarLargeMenu';
import NavbarMiniMenu from './NavbarMiniMenu';

const useStyles = makeStyles()((theme) => {
    return {
        appBar: {
            backgroundColor: "#FFB61C",
            [theme.breakpoints.up('md')]: {
                                
            }
        }
    };
});

export default function Navbar() {
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

    const displayToggleMenu = () => {
        const handleToggleMenuOpen = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: true
        }));
    
        const handleToggleMenuClose = () => setState((prevState) => ({
            ...prevState, toggleMenuOpen: false
        }));
        
        return (
            <NavbarMiniMenu 
                tMenuOpen={handleToggleMenuOpen()}
                tMenuClose={handleToggleMenuClose()}
            />
        );
    };

    const displayLargeMenu = () => {
        return (
            <NavbarLargeMenu />
        );
    };

    return (
        <AppBar className={classes.appBar}>
            <Container>
                {toggleMenu ? displayToggleMenu() : displayLargeMenu() }
            </Container>
        </AppBar>
    );
}