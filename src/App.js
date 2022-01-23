// React
import React, {Fragment, useState} from 'react'

// Pages
import DisplayAll from './pages/displayAll';

//Components
import Header from './components/header'

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

// MUI
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButton } from '@mui/material';

export const light = {
  palette: {
    type: 'light',
    primary: {
      main: '#544A7D', // Button, purple
      contrastText: '#fff',
      toggleButton: '#000',
    },
    secondary: {
      main: '#544A7D', // Model ready text
      contrastText: '#000',
    },
    background: {
      default: '#E1EEC3',
    },
  },
}

export const dark = {
  palette: {
    type: 'dark',
    primary: {
      main: '#93FFD8',
      contrastText: '#000',
      toggleButton: '#fff',
    },
    secondary: {
      main: '#E1EEC3',
      contrastText: '#000',
    },
    background: {
      default: "#544A7D", 
    },
  },
}

function App() {
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness6Icon /> : <Brightness4Icon />;
  const appliedTheme = createTheme(theme ? light : dark);
  return (
    <ThemeProvider theme={appliedTheme}>
    <CssBaseline />
    <Provider store={store}>
      <Fragment>
        <Header>
        </Header>
        <IconButton
            edge="false"
            color="secondary"
            aria-label="mode"
            style={{position: 'absolute', right: '0', top: '0', width: '50px', height: '50px'}}
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
        <DisplayAll />
      </Fragment>
    </Provider>
    </ThemeProvider>
  );
}

export default App;