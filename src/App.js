
import React, {Fragment} from 'react'
import './App.css';


// Pages
import Home from './pages/home'
import Recom from './pages/recom'
//Components
import Header from './components/header'

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

// MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

let theme = createTheme({
  
  palette: {
    primary: {
      // blue, text white
      main: '#002984',
      contrastText: '#fff'
    },
    secondary: {
      // red , text black
      main: '#f44336',
      contrastText: '#00000'
    },
    warning: {
      // red , text black
      main: '#00000',
      contrastText: '#fff'
    }
  }
  
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Fragment>
        <Header/>
        <Home/>
        <Recom/>
      </Fragment>
    </Provider>
    </ThemeProvider>
  
  );
}

export default App;
