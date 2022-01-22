
import React, {Fragment} from 'react'
import './App.css';


// Pages
import Home from './pages/home'
import Recom from './pages/recom'
//Components
import Header from './components/header'


function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <Recom/>
    </Fragment>
  
  );
}

export default App;
