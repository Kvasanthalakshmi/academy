import React, { useState } from 'react';
import { Grid, Typography, Menu, MenuItem } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import Home from '../Home/Home';
import './Header.css';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [blurBackground, setBlurBackground] = useState(false);
  const [activeItem, setActiveItem] = useState(''); 

  const isOpen = Boolean(anchorEl);

  return (
    <div>
      <header className="header">
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item lg={1}>
            <img src={logo} alt="Logo" style={{ width: '70%', height: '70px' }} />
          </Grid>
          <Grid item lg={0.8}>
            <Typography>
              <Link to="/" style={{ color: activeItem === 'Home' ? 'blue' : 'black' }} onClick={() => setActiveItem('Home')}>
                Home
              </Link>
            </Typography>
          </Grid>

          <Grid item lg={0.8}>
            <Typography>
              <Link to="/service" style={{ color: activeItem === 'Service' ? 'blue' : 'black' }} onClick={() => setActiveItem('Service')}>
                Service
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.8}>
            <Typography>
              <Link to="/aboutus" style={{ color: activeItem === 'About Us' ? 'blue' : 'black' }} onClick={() => setActiveItem('About Us')}>
                About Us
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.8}>
            <Typography>
              <Link to="/contactus" style={{ color: activeItem === 'Contact Us' ? 'blue' : 'black' }} onClick={() => setActiveItem('Contact Us')}>
                Contact Us
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={0.8}>
            <Typography>
              <SearchIcon style={{ color: 'black', cursor: 'pointer' }} />
            </Typography>
          </Grid>
        </Grid>
      </header>  
    </div>
  );
}

export default App;
