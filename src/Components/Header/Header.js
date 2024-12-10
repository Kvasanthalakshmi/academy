import React, { useState } from 'react';
import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../Assets/logo.png';
import './Header.css';

function Header() {
  const [activeItem, setActiveItem] = useState('');

  return (
    <header className="header">
      <Grid container justifyContent="center" alignItems="center">
        {/* Logo Section */}
        <Grid item xs={12} sm={2} lg={2} className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </Grid>

        {/* Navigation Section */}
        <Grid item xs={12} sm={10} lg={8} container justifyContent="center" alignItems="center" spacing={3}>
          {[
            { label: 'Home', path: '/' },
            { label: 'Service', path: '/service' },
            { label: 'About Us', path: '/aboutus' },
            { label: 'Contact Us', path: '/contactus' },
          ].map((item) => (
            <Grid item key={item.label}>
              <Typography>
                <Link
                  to={item.path}
                  className={activeItem === item.label ? 'active' : ''}
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.label}
                </Link>
              </Typography>
            </Grid>
          ))}

          {/* Search Icon */}
          <Grid item>
            <SearchIcon className="search-icon" />
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
