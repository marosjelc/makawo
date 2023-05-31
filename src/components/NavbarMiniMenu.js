import React, { useState } from 'react';
import { 
    Toolbar, 
    Typography, 
    Box, 
    IconButton, 
    MenuItem,
    Menu,
    Avatar,
    Tooltip,
    ThemeProvider,
    Drawer
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles()((theme) => {
    return {
        miniToolbar: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },        
        menuIcon: {
            color: 'white'
        },
        
    };
});

export default function NavbarMiniMenu(props) {
    const { classes } = useStyles();

    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <Toolbar className={classes.miniToolbar}>
            <Drawer
                {...{
                    anchor: "left",
                    open: props.tMenuOpen,
                    onClose: props.tMenuClose
                }}
            >
                <div>
                    <Box>
                        {['home', 'home2', 'home3'].map((menuOption) => (
                            <MenuItem>
                                {menuOption.toUpperCase()}
                            </MenuItem>
                        ))}
                    </Box>
                </div>
            </Drawer>
            <IconButton
                onClick={props.tMenuOpen}
                size="large"
                edge="start"
            >
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
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