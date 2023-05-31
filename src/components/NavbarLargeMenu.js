import React, { useState } from 'react';
import { 
    Toolbar, 
    Typography, 
    Box, 
    Link, 
    IconButton, 
    MenuItem,
    Menu,
    Avatar,
    Tooltip,
    ThemeProvider
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles()((theme) => {
    return {
        title: {
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
            [theme.breakpoints.up('lg')]: {
                
            }
        },
        toolbar: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up('md')]: {
                flexDirection: "row",
                justifyContent: "space-between"
                
            }            
        },
        menuOption: {
            padding: theme.spacing(1),
            [theme.breakpoints.up('md')]: {
                paddingLeft: theme.spacing(10)
            },
            color: "white"
        },
        menuBox: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up('md')]: {
                flexDirection: "row"
            }
        }
    };
});

export default function NavbarLargeMenu(props) {
    const { classes } = useStyles();

    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Toolbar className={classes.toolbar}>
            <ThemeProvider theme={theme}>
                <Typography 
                    className={classes.title}
                    component="a"
                    variant="h4"
                    href=""
                >
                    Makawo
                </Typography>
            </ThemeProvider>
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
            <Box>
                <Tooltip title="Settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Jane Doe" src="./static/44.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {['setting1', 'setting2', 'setting3'].map((menuOption) => (
                        <MenuItem>
                            {menuOption}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Toolbar>
    );
}