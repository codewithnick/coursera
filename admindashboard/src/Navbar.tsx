import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from './assets/coursera-logo.png'
const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  if(localStorage.getItem('token'))
  {
    return (
      <AppBar position="fixed" style={{ top: 0, left: 0, width: '100%', backgroundColor: '#333' }}>
        <Toolbar variant='dense' style={{display:'flex' ,justifyContent:'space-around'}}>
          <Typography variant="h6" component="div" >
            <img src={logo} alt="Your Image" className="image" height={'50px'}/>
          </Typography>
          <Link  color="inherit" underline="none" onClick={() => handleNavigation('/')}>
            Home
          </Link>
          <Link  color="inherit" underline="none" onClick={() => handleNavigation('/addcourse')}>
            Add course
          </Link>
          <Link  color="inherit" underline="none" onClick={() => {localStorage.clear();handleNavigation('/')}}>
            logout
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
  else{
    return (
      <AppBar position="fixed" style={{ top: 0, left: 0, width: '100%', backgroundColor: '#333' }}>
        <Toolbar variant='dense' style={{display:'flex' ,justifyContent:'space-around'}}>
          <Typography variant="h6" component="div" >
            Logo
          </Typography>
          <Link  color="inherit" underline="none" onClick={() => handleNavigation('/')}>
            Home
          </Link>
          <Link  color="inherit" underline="none" onClick={() => handleNavigation('/signup')}>
            signup
          </Link>
          <Link  color="inherit" underline="none" onClick={() => handleNavigation('/signin')}>
            signin
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
};

export default Navbar;
