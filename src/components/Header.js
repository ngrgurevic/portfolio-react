import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
import { Link } from "@mui/material";

const pages = ['About', 'Projects', 'Contact'];

function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <HideAppBar>
      <AppBar  position="fixed" sx={{
        marginBottom: "30px",
      }}>     
          <Toolbar>
            
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#index.html"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.4rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              
              Portfolio
            </Typography>

            <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon   />
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
                    <Typography textAlign="center"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.4rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                    >{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h4"
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
                textDecoration: 'none',
                color: COLORS.primary
              }}
            >
             
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , color: 'red' }} >
              {pages.map((page) => (
                <Link >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: COLORS.white , display: 'block', "&:hover": {
                    color: 'white',
                    backgroundColor: COLORS.primary_light,
                    transition: 'ease-in',
                  } }}
                >
                  
                  {page}
                </Button>
                </Link>
              ))}
             
            </Box>
            {/* <MySwitch darkMode={isToggled}
            setDarkMode={() => {
              setIsToggled(!isToggled)}}
           /> */}
          </Toolbar>
      </AppBar>
      </HideAppBar>
  );
}


export default Header


