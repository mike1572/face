
import React, {Fragment, useState} from 'react'
import './App.css';


// Pages
import Home from './pages/home'
import Recom from './pages/recom'
import DisplayAll from './pages/displayAll';
//Components
import Header from './components/header'

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

// MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButton } from '@mui/material';
export const light = {
  palette: {
    type: 'light',
    primary: {
      main: '#3E065F',
      contrastText: '#fff',
    },
  },
}

export const dark = {
  palette: {
    type: 'dark',
    primary: {
      main: '#93FFD8',
      contrastText: '#fff',
    },
  },
}




// let theme = createTheme({
  
//   palette: {
//     primary: {
//       // blue, text white
//       main: '#002984',
//       contrastText: '#fff'
//     },
//     secondary: {
//       // red , text black
//       main: '#f44336',
//       contrastText: '#00000'
//     },
//     warning: {
//       // red , text black
//       main: '#00000',
//       contrastText: '#fff'
//     }
//   }
  
// })

function App() {
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness6Icon /> : <Brightness4Icon />;
  const appliedTheme = createTheme(theme ? light : dark);
  return (
    <ThemeProvider theme={appliedTheme}>
    <Provider store={store}>
      <Fragment>
        <Header>
        <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
        </Header>
        <Home/>
        <Recom/>
      </Fragment>
    </Provider>
    </ThemeProvider>
  );
}



export default App;
