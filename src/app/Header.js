'use client'

import * as React from 'react';
import { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider,createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e91e63',
      contrastText: '#e91e63',
    },
    secondary: {
      main: '#000',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

export default function Header() {
  return (
    
    <Box sx={{  display: 'flex' }}>
      <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary" >
       {appBarLabel('light')}
        <Toolbar>
          <Typography variant="h5" component="div" color= "secondary" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="secondary" >Login</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}