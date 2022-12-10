import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import COLORS from './colors'
import '../App.css'
import HideAppBar from "./HideOnScroll";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { Grid, Link } from "@mui/material";
import MySwitch from "./MySwitch";
import App from '../App'
import ScrollButton from "./ScrollButton";


const pages = ['About', 'Projects', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header({ darkMode, setDarkMode }) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HideAppBar>
      <AppBar position="fixed" sx={{ mb: 1,  display: { xs: 'inherit', md: 'flex' } }}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mx: 2 }} />
          <Typography
            variant="h6"
            Wrap
            component="a"
            href="/"
            sx={{
              mx: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem key={pages} onClick={handleCloseNavMenu}>
                  <ScrollButton 
                name='Home'
                topPosition={0}
                />
               
                <ScrollButton 
                name='About Me'
                topPosition={900}
                />
                
                <ScrollButton 
                name='Contact'
                topPosition={15000}
                />
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, mx: 1, display: { xs: 'none', md: 'flex' } }}>
            <Grid container direction="row" sx={{ width: { lg: "400px", md: "350px" } }}>

              <Grid item direction="row" container >
                
                <ScrollButton 
                name='Home'
                topPosition={0}
                />
               
                <ScrollButton 
                name='About Me'
                topPosition={800}
                />
                
                <ScrollButton 
                name='Contact'
                topPosition={10000}
                />
             </Grid>

              <Grid item xs>
              </Grid>
            </Grid>
          </Box>
          <MySwitch darkMode={darkMode}
            setDarkMode={() => {
              setDarkMode(!darkMode)
            }}
          />
        </Toolbar>
      </AppBar>
    </HideAppBar >
  );
}


export default Header


