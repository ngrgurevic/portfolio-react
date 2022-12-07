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
      <AppBar position="fixed" sx={{ mb: 1 }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
          <Box sx={{ flexGrow: 1, mx: 3, display: { xs: 'none', md: 'flex' } }}>
            <Grid container direction="row" sx={{ width: { lg: "400px", md: "350px" } }}>
              {pages.map((page) => (
                <Grid item xs>
                  <Button
                    component={Link}
                    to="#about"
                    key={page}

                    sx={{
                      mx: 2, color: 'white', display: 'block', "&:hover": {
                        color: 'white',
                        backgroundColor: COLORS.primary_light,
                        transition: 'ease-in',
                      }
                    }}
                  >
                    {page}
                  </Button>
                </Grid>
              ))}
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


