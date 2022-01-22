
import React, {Fragment} from 'react'
import './App.css';


// Pages
import Home from './pages/home'

//Components
import Header from './components/header'


function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
    </Fragment>
  
  );
}

export default App;
