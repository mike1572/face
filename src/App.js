
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


function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header/>
        <Home/>
        <Recom/>
      </Fragment>
    </Provider>
  
  );
}

export default App;
