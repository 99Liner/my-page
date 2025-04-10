'use client'

import * as React from 'react';
import { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//This is just the header for global
function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h5" noWrap component="div" color= ' #3b3147' sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

//Header sections
export default function Header() {
  return (
    
    <Box sx={{  display: 'flex' }}>
    
      <AppBar position="fixed"  >
       {appBarLabel('Denice Space')}
        <Toolbar>
          <Typography variant="h5" component="div" color = ' #9f6ca1' sx={{ flexGrow: 1 }}> 
            Home
          </Typography> 

          <Typography variant="h6" component="div" color = ' #9f6ca1' sx={{ flexGrow: 1 }}> 
            Projects
          </Typography>
          <Typography variant="h6" component="div" color = ' #9f6ca1' sx={{ flexGrow: 1 }}> 
            _______________
          </Typography>

          <Typography variant="h6" component="div" color = ' #9f6ca1' sx={{ flexGrow: 1 }}> 
            About
          </Typography>

          <Typography variant="h6" component="div" color = ' #9f6ca1' sx={{ flexGrow: 1 }}> 
            Collections
          </Typography>
        </Toolbar>
      </AppBar>
    
    </Box>
  );
}